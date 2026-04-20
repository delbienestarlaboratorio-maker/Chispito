const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('http://localhost:5001/primaria-1/matematicas/bloque-1', { waitUntil: 'networkidle2' });
    const bodyText = await page.evaluate(() => document.body.innerText);
    console.log('Body text length:', bodyText.length);
    console.log('Contains "___":', bodyText.includes('___'));
    console.log('Contains "???":', bodyText.includes('???'));
    // Find the pregunta element
    const preguntaEl = await page.$('.font-fredoka.text-gray-800');
    if (preguntaEl) {
        const preguntaText = await page.evaluate(el => el.textContent, preguntaEl);
        console.log('Pregunta text:', preguntaText);
        console.log('Pregunta contains "___":', preguntaText.includes('___'));
    }
    // Screenshot
    await page.screenshot({ path: 'debug_placeholder.png' });
    await browser.close();
})();