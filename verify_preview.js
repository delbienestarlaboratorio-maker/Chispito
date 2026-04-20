const puppeteer = require('puppeteer');
const fs = require('fs');

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

    // Wait for exercise player to load
    await page.waitForSelector('.ejercicio-card, [data-ejercicio], .pregunta', { timeout: 5000 }).catch(() => {
        console.log('No exercise card found within 5s');
    });

    // Check for placeholder spans (___ or ???) with highlighting
    const placeholderCount = await page.evaluate(() => {
        // Find all text nodes containing ___ or ???
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let count = 0;
        let node;
        while ((node = walker.nextNode())) {
            if (node.textContent.includes('___') || node.textContent.includes('???')) {
                // Check if parent element has inline styles indicative of highlighting
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

    // Check star rating functionality (Opinar button)
    const starRatingWorks = await page.evaluate(() => {
        const opinarBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Opinar'));
        if (!opinarBtn) return false;
        // Check if there are star icons nearby
        const stars = opinarBtn.closest('section')?.querySelectorAll('svg[fill*="currentColor"]');
        return stars && stars.length > 0;
    });

    // Check exercise player container presence
    const playerContainer = await page.evaluate(() => {
        const container = document.querySelector('.ejercicio-card, [data-ejercicio], .pregunta');
        return !!container;
    });

    // Check CSP meta tag
    const cspMeta = await page.evaluate(() => {
        const meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
        return meta ? meta.getAttribute('content') : null;
    });

    // Check for any iframes that might cause framing errors
    const iframeCount = await page.evaluate(() => document.querySelectorAll('iframe').length);

    return {
        url,
        errors,
        placeholderCount,
        starRatingWorks,
        playerContainer,
        cspMeta,
        iframeCount,
    };
}

async function main() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const baseUrl = 'https://5adaef5c.chispito-mx.pages.dev';
    const testUrls = [
        `${baseUrl}/secundaria-3/ciencias/bloque-1`,
        `${baseUrl}/secundaria-3/matematicas/bloque-6`,
        `${baseUrl}/preescolar-1/espanol/bloque-6`,
        `${baseUrl}/primaria-1/matematicas/bloque-1`,
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

    console.log('\n=== PREVIEW VERIFICATION RESULTS ===');
    results.forEach(r => {
        console.log(`\n${r.url}:`);
        if (r.error) {
            console.log(`  ERROR: ${r.error}`);
        } else {
            console.log(`  Console errors: ${r.errors.length}`);
            if (r.errors.length > 0) console.log(`    ${r.errors.join('\n    ')}`);
            console.log(`  Placeholder count: ${r.placeholderCount}`);
            console.log(`  Star rating works: ${r.starRatingWorks}`);
            console.log(`  Player container present: ${r.playerContainer}`);
            console.log(`  CSP meta: ${r.cspMeta}`);
            console.log(`  Iframe count: ${r.iframeCount}`);
        }
    });

    // Determine overall status
    const allGood = results.every(r => !r.error && r.errors.length === 0 && r.placeholderCount > 0 && r.playerContainer && r.cspMeta);
    if (allGood) {
        console.log('\n✅ All checks passed!');
    } else {
        console.log('\n⚠ Some issues detected.');
    }

    // Write results to file
    fs.writeFileSync('preview_verification_results.json', JSON.stringify(results, null, 2));
    console.log('\nResults saved to preview_verification_results.json');
}

main().catch(console.error);