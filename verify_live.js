const puppeteer = require('puppeteer');

async function testPage(page, url) {
    console.log(`Testing ${url}...`);
    const errors = [];
    page.on('console', msg => {
        if (msg.type() === 'error') {
            const text = msg.text();
            errors.push(text);
            console.log(`[Console Error] ${text}`);
        }
    });
    page.on('pageerror', error => {
        errors.push(error.toString());
        console.log(`[Page Error] ${error}`);
    });

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Check CSP meta tag
    const cspMeta = await page.evaluate(() => {
        const meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
        return meta ? meta.getAttribute('content') : null;
    });

    // Check for any iframes
    const iframeCount = await page.evaluate(() => document.querySelectorAll('iframe').length);

    // Check for placeholder highlighting
    const placeholderCount = await page.evaluate(() => {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let count = 0;
        let node;
        while ((node = walker.nextNode())) {
            if (node.textContent.includes('___') || node.textContent.includes('???')) {
                let parent = node.parentElement;
                while (parent && parent !== document.body) {
                    const style = window.getComputedStyle(parent);
                    if (style.textDecoration.includes('underline') || style.backgroundColor.includes('rgb(254, 243, 199)') || style.color.includes('rgb(217, 119, 6)')) {
                        count++;
                        break;
                    }
                    parent = parent.parentElement;
                }
            }
        }
        return count;
    });

    // Check star rating button
    const starRatingWorks = await page.evaluate(() => {
        const opinarBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Opinar'));
        return !!opinarBtn;
    });

    return {
        url,
        errors,
        cspMeta,
        iframeCount,
        placeholderCount,
        starRatingWorks,
    };
}

async function main() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const testUrls = [
        'https://chispito.mx',
        'https://chispito.mx/secundaria-3/ciencias/bloque-1',
        'https://chispito.mx/secundaria-3/matematicas/bloque-6',
    ];

    const results = [];
    for (const url of testUrls) {
        try {
            const result = await testPage(page, url);
            results.push(result);
        } catch (err) {
            console.error(`Failed to test ${url}:`, err);
            results.push({ url, error: err.message });
        }
    }

    await browser.close();

    console.log('\n=== LIVE SITE VERIFICATION RESULTS ===');
    let allPass = true;
    results.forEach(r => {
        console.log(`\n${r.url}:`);
        if (r.error) {
            console.log(`  ERROR: ${r.error}`);
            allPass = false;
        } else {
            console.log(`  Console errors: ${r.errors.length}`);
            if (r.errors.length > 0) {
                r.errors.forEach(e => console.log(`    ${e}`));
                // Check for framing error
                if (r.errors.some(e => e.includes('Unsafe attempt to load URL') || e.includes('frame with URL'))) {
                    console.log(`  ⚠ Framing error detected!`);
                }
            }
            console.log(`  CSP meta: ${r.cspMeta}`);
            if (!r.cspMeta) {
                console.log(`  ⚠ CSP meta missing!`);
                allPass = false;
            }
            console.log(`  Iframe count: ${r.iframeCount}`);
            console.log(`  Placeholder count: ${r.placeholderCount}`);
            console.log(`  Star rating button present: ${r.starRatingWorks}`);
        }
    });

    if (allPass) {
        console.log('\n✅ All checks passed!');
    } else {
        console.log('\n⚠ Some issues need attention.');
    }
}

main().catch(console.error);