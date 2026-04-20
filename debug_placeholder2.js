const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('http://localhost:5001/primaria-1/matematicas/bloque-1', { waitUntil: 'networkidle2' });
    // Wait for exercise player
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Find all elements with class 'blank-placeholder'
    const blanks = await page.$$('.blank-placeholder');
    console.log('Found blank-placeholder elements:', blanks.length);
    for (let i = 0; i < blanks.length; i++) {
        const text = await page.evaluate(el => el.textContent, blanks[i]);
        console.log(`Blank ${i}: "${text}"`);
    }
    // Find all fill blank inputs
    const inputs = await page.$$('input[type="text"]');
    console.log('Text inputs:', inputs.length);
    // Get the pregunta text from the ejercicio card
    const cards = await page.$$('.ejercicio-card');
    console.log('Ejercicio cards:', cards.length);
    for (let i = 0; i < cards.length; i++) {
        const html = await page.evaluate(el => el.innerHTML, cards[i]);
        console.log(`Card ${i} HTML snippet:`, html.substring(0, 500));
    }
    await browser.close();
})();