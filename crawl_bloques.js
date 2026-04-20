const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');
const BASE_URL = 'http://localhost:5001';

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

async function testStarRating(page, url) {
    try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 10000 });
        console.log(`Loaded ${url}`);
        
        // Check if ComentariosSection is present (look for "Opinar" button)
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
            console.log(`  No "Opinar" button found (maybe not rendered)`);
            return { url, success: false, error: 'No Opinar button' };
        }
        
        // Click the button to open form
        await opinarButton.click();
        console.log(`  Opened form`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Find star buttons
        const allButtons = await page.$$('button');
        const starButtons = [];
        for (let i = 0; i < allButtons.length; i++) {
            const text = await page.evaluate(btn => btn.textContent, allButtons[i]);
            if (text.includes('⭐') || text.includes('☆')) {
                starButtons.push(allButtons[i]);
            }
        }
        
        if (starButtons.length === 0) {
            console.log(`  No star buttons found`);
            return { url, success: false, error: 'No star buttons' };
        }
        
        console.log(`  Found ${starButtons.length} star buttons`);
        
        // Test first star
        await starButtons[0].click();
        await new Promise(resolve => setTimeout(resolve, 300));
        const firstStarText = await page.evaluate(btn => btn.textContent, starButtons[0]);
        const firstStarSelected = firstStarText.includes('⭐');
        
        // Test fifth star if exists
        let fifthStarSelected = false;
        if (starButtons.length >= 5) {
            await starButtons[4].click();
            await new Promise(resolve => setTimeout(resolve, 300));
            const fifthStarText = await page.evaluate(btn => btn.textContent, starButtons[4]);
            fifthStarSelected = fifthStarText.includes('⭐');
        }
        
        const success = firstStarSelected && (starButtons.length < 5 || fifthStarSelected);
        if (success) {
            console.log(`  Star selection works`);
        } else {
            console.log(`  Star selection failed`);
        }
        
        return { url, success, error: null };
    } catch (error) {
        console.error(`  Error testing ${url}:`, error.message);
        return { url, success: false, error: error.message };
    }
}

async function main() {
    const urls = await extractUrlsFromSitemap();
    if (urls.length === 0) {
        console.log('No bloque pages found');
        return;
    }
    
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    const results = [];
    // Limit concurrency to 1 page at a time to avoid overload
    for (const url of urls.slice(0, 10)) { // Test only first 10 for speed
        console.log(`Testing ${url}`);
        const result = await testStarRating(page, url);
        results.push(result);
    }
    
    await browser.close();
    
    console.log('\n--- Summary ---');
    const passed = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    console.log(`Passed: ${passed}, Failed: ${failed}`);
    
    if (failed > 0) {
        console.log('\nFailed URLs:');
        results.filter(r => !r.success).forEach(r => {
            console.log(`  ${r.url} - ${r.error}`);
        });
    }
    
    // Write results to file
    fs.writeFileSync('crawl_results.json', JSON.stringify(results, null, 2));
    console.log('Results saved to crawl_results.json');
}

main().catch(console.error);