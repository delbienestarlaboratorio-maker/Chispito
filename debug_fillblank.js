const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('http://localhost:5001/secundaria-3/ciencias/bloque-1', { waitUntil: 'networkidle2' });

    // Wait for exercise player to load
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Find all elements with class containing "pregunta"
    const preguntaElements = await page.$$('[class*="pregunta"], .pregunta, .question, .ejercicio');
    console.log(`Found ${preguntaElements.length} potential question elements`);
    for (let i = 0; i < preguntaElements.length; i++) {
        const text = await page.evaluate(el => el.textContent, preguntaElements[i]);
        console.log(`[${i}] "${text}"`);
    }

    // Look for fill blank input
    const inputs = await page.$$('input[type="text"]');
    console.log(`Found ${inputs.length} text inputs`);
    for (let i = 0; i < inputs.length; i++) {
        const placeholder = await page.evaluate(el => el.placeholder, inputs[i]);
        console.log(`Input ${i}: placeholder="${placeholder}"`);
    }

    // Check if there is any element containing "___" or "???"
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    if (bodyHTML.includes('___')) {
        console.log('Found "___" in HTML');
    } else {
        console.log('No "___" found in HTML');
    }

    await page.screenshot({ path: 'debug_fillblank.png' });
    await browser.close();
})();