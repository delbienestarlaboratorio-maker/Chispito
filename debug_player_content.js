const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('http://localhost:5001/primaria-1/matematicas/bloque-1', { waitUntil: 'networkidle2' });

    // Get the player container
    const container = await page.$('section.py-10.px-4 .max-w-2xl.mx-auto');
    if (!container) {
        console.error('No container');
        await browser.close();
        return;
    }

    // Get all text inside container
    const text = await page.evaluate(el => el.textContent, container);
    console.log('Container text length:', text.length);
    console.log('First 500 chars of text:', text.substring(0, 500));

    // Check for specific exercise question
    const hasQuestion1 = text.includes('¿Cuánto es 8 x 7?');
    console.log('Contains first exercise question?', hasQuestion1);

    // Look for any progress bar elements
    const progressBars = await container.$$('.flex.gap-1');
    console.log('Progress bar elements:', progressBars.length);

    // Look for any button with text "Siguiente" or "OK"
    const buttons = await container.$$('button');
    let buttonTexts = [];
    for (let btn of buttons) {
        const txt = await page.evaluate(b => b.textContent, btn);
        buttonTexts.push(txt);
    }
    console.log('Button texts:', buttonTexts);

    // Look for any input fields
    const inputs = await container.$$('input');
    console.log('Inputs:', inputs.length);

    // Check if any element has class containing "player"
    const playerElements = await container.$$('[class*="player" i]');
    console.log('Elements with player class:', playerElements.length);

    // Check if any element has class "ejercicio-card"
    const ejercicioCards = await container.$$('.ejercicio-card');
    console.log('Ejercicio cards:', ejercicioCards.length);

    // Take screenshot of container
    await container.screenshot({ path: 'debug_container_full.png' });

    // Also take screenshot of whole viewport to see layout
    await page.screenshot({ path: 'debug_page.png', fullPage: true });

    // Check if there is any hidden element (display:none) inside container
    const hiddenCount = await page.evaluate(el => {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_ELEMENT);
        let node;
        let count = 0;
        while (node = walker.nextNode()) {
            const style = window.getComputedStyle(node);
            if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
                count++;
            }
        }
        return count;
    }, container);
    console.log('Hidden elements inside container:', hiddenCount);

    await browser.close();
})();