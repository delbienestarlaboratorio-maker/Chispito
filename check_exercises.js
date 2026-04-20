const puppeteer = require('puppeteer');

async function checkPage(url) {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    console.log(`\n=== ${url} ===`);
    
    // Wait for exercise player
    await page.waitForSelector('.ejercicio-card', { timeout: 5000 });
    
    // Get total number of free exercises (maybe from UI)
    const totalText = await page.evaluate(() => {
        const elem = document.querySelector('.ejercicio-card');
        return elem ? elem.textContent : '';
    });
    // Extract pattern like "1 de 3 (gratis)"
    const match = totalText.match(/(\d+) de (\d+)/);
    const total = match ? parseInt(match[2]) : 1;
    
    console.log(`Total free exercises: ${total}`);
    
    for (let i = 0; i < total; i++) {
        console.log(`\n  Exercise ${i + 1}:`);
        // Extract question text
        const question = await page.evaluate(() => {
            const q = document.querySelector('.ejercicio-card .font-fredoka');
            return q ? q.textContent : '';
        });
        console.log(`    Question: ${question}`);
        
        // Check exercise type
        const hasInput = await page.$('input[type="text"]');
        const hasOptions = await page.$$('button[class*="opcion"]');
        console.log(`    Has input: ${!!hasInput}, Has options: ${hasOptions.length}`);
        
        // If fill blank, check placeholder
        if (hasInput) {
            const placeholder = await page.evaluate(() => {
                const input = document.querySelector('input[type="text"]');
                return input ? input.placeholder : '';
            });
            console.log(`    Placeholder: ${placeholder}`);
            // Check if question contains blank (___)
            if (question.includes('___')) {
                console.log('    ✅ Blank placeholder present in question.');
            } else {
                console.log('    ⚠️  Blank placeholder missing in question.');
            }
        }
        
        // Click next button if not last
        if (i < total - 1) {
            const nextButton = await page.$('button:has-text("Siguiente ejercicio")');
            if (nextButton) {
                await nextButton.click();
                await page.waitForTimeout(1000); // wait for transition
            } else {
                console.log('    Next button not found, stopping.');
                break;
            }
        }
    }
    
    await browser.close();
}

(async () => {
    const pages = [
        'http://localhost:5001/secundaria-3/ciencias/bloque-1',
        'http://localhost:5001/secundaria-3/matematicas/bloque-6'
    ];
    for (const url of pages) {
        await checkPage(url);
    }
})();