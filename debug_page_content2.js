const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/preescolar-1/espanol/bloque-6', { waitUntil: 'networkidle2' });
    
    // Get console logs from browser
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    
    // Dump page title and some HTML
    const title = await page.title();
    console.log('Title:', title);
    
    // Check for specific elements
    const bodyHtml = await page.evaluate(() => document.body.innerHTML.length);
    console.log('Body HTML length:', bodyHtml);
    
    // Look for any exercise-related text
    const hasEjercicio = await page.evaluate(() => document.body.innerText.includes('ejercicio') || document.body.innerText.includes('pregunta'));
    console.log('Has ejercicio text:', hasEjercicio);
    
    // Check for script tags
    const scripts = await page.evaluate(() => Array.from(document.querySelectorAll('script')).map(s => s.src || s.innerText.substring(0, 50)));
    console.log('Scripts count:', scripts.length);
    
    // Check for React root
    const root = await page.$('#__next');
    console.log('Next.js root exists:', root !== null);
    
    // Look for any component with class containing "ExercisePlayer"
    const exercisePlayer = await page.evaluate(() => {
        const elements = Array.from(document.querySelectorAll('*[class*="ExercisePlayer"]'));
        return elements.length;
    });
    console.log('Elements with class ExercisePlayer:', exercisePlayer);
    
    // Take screenshot
    await page.screenshot({ path: 'debug_page_content2.png', fullPage: true });
    
    await browser.close();
})();