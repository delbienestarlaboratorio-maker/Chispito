const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');
const BASE_URL = 'http://localhost:5001';
const MAX_PAGES = process.env.MAX_PAGES ? parseInt(process.env.MAX_PAGES) : 10; // default 10 for quick test
const CONCURRENCY = 1;

async function extractUrlsFromSitemap() {
    const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
    const regex = /<loc>(.*?)<\/loc>/g;
    const urls = [];
    let match;
    while ((match = regex.exec(xml)) !== null) {
        urls.push(match[1]);
    }
    // Convert to localhost URLs (replace https://chispito.mx with BASE_URL)
    const localUrls = urls.map(url => url.replace('https://chispito.mx', BASE_URL));
    // Filter only bloque pages (that contain /bloque-)
    const bloqueUrls = localUrls.filter(url => url.includes('/bloque-'));
    console.log(`Found ${bloqueUrls.length} bloque pages`);
    return bloqueUrls;
}

async function testPage(page, url) {
    const result = {
        url,
        stars: { success: false, error: null },
        fillBlank: { found: false, placeholderMissing: false, inputCount: 0 },
        consoleErrors: [],
        hydrationMismatch: false,
        visibleErrors: [],
        screenshot: null
    };

    try {
        // Clear console listeners
        page.removeAllListeners('console');
        // Capture console errors
        page.on('console', msg => {
            if (msg.type() === 'error') {
                const text = msg.text();
                result.consoleErrors.push(text);
                if (text.includes('hydration') || text.includes('Hydration') || text.includes('mismatch')) {
                    result.hydrationMismatch = true;
                }
            }
        });

        await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
        console.log(`Loaded ${url}`);

        // Wait a bit for dynamic content
        await new Promise(resolve => setTimeout(resolve, 1000));

        // 1. Test star rating
        const buttons = await page.$$('button');
        let opinarButton = null;
        for (let i = 0; i < buttons.length; i++) {
            const text = await page.evaluate(btn => btn.textContent, buttons[i]);
            if (text.includes('Opinar')) {
                opinarButton = buttons[i];
                break;
            }
        }

        if (!opinarButton) {
            result.stars.error = 'No Opinar button';
        } else {
            await opinarButton.click();
            await new Promise(resolve => setTimeout(resolve, 1000));

            const allButtons = await page.$$('button');
            const starButtons = [];
            for (let i = 0; i < allButtons.length; i++) {
                const text = await page.evaluate(btn => btn.textContent, allButtons[i]);
                if (text.includes('⭐') || text.includes('☆')) {
                    starButtons.push(allButtons[i]);
                }
            }

            if (starButtons.length === 0) {
                result.stars.error = 'No star buttons';
            } else {
                // Test first star
                await starButtons[0].click();
                await new Promise(resolve => setTimeout(resolve, 300));
                const firstStarText = await page.evaluate(btn => btn.textContent, starButtons[0]);
                const firstStarSelected = firstStarText.includes('⭐');
                result.stars.success = firstStarSelected;
                if (!firstStarSelected) {
                    result.stars.error = 'Star not selected';
                }
            }
        }

        // 2. Check fill blank exercises
        const fillInputs = await page.$$('input[type="text"]');
        result.fillBlank.inputCount = fillInputs.length;
        if (fillInputs.length > 0) {
            result.fillBlank.found = true;
            // Check placeholder
            for (const input of fillInputs) {
                const placeholder = await page.evaluate(el => el.placeholder, input);
                if (placeholder && placeholder.includes('Escribe tu respuesta')) {
                    // OK
                } else {
                    result.fillBlank.placeholderMissing = true;
                }
            }
        }

        // 3. Check for blank placeholder in question text
        const bodyText = await page.evaluate(() => document.body.innerText);
        if (bodyText.includes('___') || bodyText.includes('???')) {
            // placeholder present
        } else {
            if (result.fillBlank.found) {
                result.fillBlank.placeholderMissing = true;
            }
        }

        // 4. Check for visible error text
        const errorKeywords = ['error', 'Error', 'failed', 'Failed', 'invalid', 'Invalid'];
        const lowerBody = bodyText.toLowerCase();
        if (errorKeywords.some(k => lowerBody.includes(k.toLowerCase()))) {
            result.visibleErrors.push('Page contains error text');
        }

        // 5. Take screenshot
        const screenshotName = `crawl_${url.replace(BASE_URL, '').replace(/\//g, '_')}.png`;
        await page.screenshot({ path: screenshotName });
        result.screenshot = screenshotName;

    } catch (error) {
        console.error(`Error testing ${url}:`, error.message);
        result.stars.error = `Exception: ${error.message}`;
    }

    return result;
}

async function main() {
    const urls = await extractUrlsFromSitemap();
    if (urls.length === 0) {
        console.log('No bloque pages found');
        return;
    }

    const limitedUrls = urls.slice(0, MAX_PAGES);
    console.log(`Testing ${limitedUrls.length} pages (max ${MAX_PAGES})`);

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    const results = [];
    for (const url of limitedUrls) {
        console.log(`Testing ${url}`);
        const result = await testPage(page, url);
        results.push(result);
        // brief pause between pages
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    await browser.close();

    // Generate summary
    const passedStars = results.filter(r => r.stars.success).length;
    const failedStars = results.filter(r => !r.stars.success).length;
    const fillBlankFound = results.filter(r => r.fillBlank.found).length;
    const placeholderMissing = results.filter(r => r.fillBlank.placeholderMissing).length;
    const hydrationMismatch = results.filter(r => r.hydrationMismatch).length;
    const consoleErrors = results.filter(r => r.consoleErrors.length > 0).length;

    console.log('\n=== Comprehensive Crawl Report ===');
    console.log(`Total pages tested: ${results.length}`);
    console.log(`Star rating: ${passedStars} passed, ${failedStars} failed`);
    console.log(`Fill blank exercises found: ${fillBlankFound}`);
    console.log(`Missing placeholder: ${placeholderMissing}`);
    console.log(`Hydration mismatch errors: ${hydrationMismatch}`);
    console.log(`Pages with console errors: ${consoleErrors}`);

    // Log details of failures
    if (failedStars > 0) {
        console.log('\n--- Star rating failures ---');
        results.filter(r => !r.stars.success).forEach(r => {
            console.log(`  ${r.url}: ${r.stars.error}`);
        });
    }
    if (placeholderMissing > 0) {
        console.log('\n--- Missing placeholder ---');
        results.filter(r => r.fillBlank.placeholderMissing).forEach(r => {
            console.log(`  ${r.url}`);
        });
    }
    if (hydrationMismatch > 0) {
        console.log('\n--- Hydration mismatch ---');
        results.filter(r => r.hydrationMismatch).forEach(r => {
            console.log(`  ${r.url}: ${r.consoleErrors.length} console errors`);
        });
    }

    // Save detailed results
    fs.writeFileSync('crawl_comprehensive_results.json', JSON.stringify(results, null, 2));
    console.log('\nDetailed results saved to crawl_comprehensive_results.json');
}

main().catch(console.error);