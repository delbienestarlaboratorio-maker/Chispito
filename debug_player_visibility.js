const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('http://localhost:5001/primaria-1/matematicas/bloque-1', { waitUntil: 'networkidle2' });

    // 1. Check if the player container exists
    const container = await page.$('section.py-10.px-4 .max-w-2xl.mx-auto');
    if (!container) {
        console.error('ERROR: Player container not found');
        await page.screenshot({ path: 'debug_no_container.png', fullPage: true });
        await browser.close();
        return;
    }

    // 2. Get its HTML
    const html = await page.evaluate(el => el.outerHTML, container);
    console.log('Container HTML (first 2000 chars):\n', html.substring(0, 2000));

    // 3. Check visibility
    const visible = await page.evaluate(el => {
        const style = window.getComputedStyle(el);
        return {
            display: style.display,
            visibility: style.visibility,
            opacity: style.opacity,
            hidden: el.hidden,
            offsetHeight: el.offsetHeight,
            offsetWidth: el.offsetWidth
        };
    }, container);
    console.log('Visibility:', visible);

    // 4. Look for any exercise player component (custom elements are not directly selectable)
    // Instead, look for specific child elements
    const playerInner = await container.$('div > div > div'); // nested
    const playerText = await page.evaluate(el => el.textContent, container);
    console.log('Player text length:', playerText.length);
    if (playerText.length < 100) {
        console.warn('WARNING: Player text seems very short');
    }

    // 5. Look for any buttons, inputs, etc.
    const buttons = await container.$$('button');
    const inputs = await container.$$('input');
    console.log('Buttons inside container:', buttons.length);
    console.log('Inputs inside container:', inputs.length);

    // 6. Check for any error messages
    const errorText = await page.evaluate(() => {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        const errors = [];
        while (node = walker.nextNode()) {
            if (node.nodeValue.includes('error') || node.nodeValue.includes('Error') ||
                node.nodeValue.includes('failed') || node.nodeValue.includes('Failed')) {
                errors.push(node.nodeValue.trim());
            }
        }
        return errors;
    });
    if (errorText.length > 0) {
        console.log('Possible error text:', errorText);
    }

    // 7. Take screenshot of container
    await container.screenshot({ path: 'debug_container.png' });

    // 8. Log console errors
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.log('Console error:', msg.text());
        }
    });

    await browser.close();
})();