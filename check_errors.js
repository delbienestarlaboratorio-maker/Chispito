const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Listen for console errors
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.log('Console Error:', msg.text());
        }
    });
    page.on('pageerror', error => {
        console.log('Page Error:', error.message);
    });
    page.on('requestfailed', request => {
        console.log('Request Failed:', request.url(), request.failure()?.errorText);
    });
    
    await page.goto('https://110a1303.chispito-mx.pages.dev/', { waitUntil: 'networkidle2' });
    
    // Wait a bit for scripts to load
    await page.waitForTimeout(3000);
    
    // Check for iframes
    const iframes = await page.$$('iframe');
    console.log('Iframes count:', iframes.length);
    for (let i = 0; i < iframes.length; i++) {
        const src = await page.evaluate(frame => frame.getAttribute('src'), iframes[i]);
        console.log(`Iframe ${i}: src="${src}"`);
    }
    
    // Check for unsafe attempts (can't directly)
    await browser.close();
})();