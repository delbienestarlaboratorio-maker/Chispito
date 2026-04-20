const puppeteer = require('puppeteer');

const PAGES = [
    { url: 'http://localhost:5001/secundaria-3/ciencias/bloque-1', name: 'secundaria-3/ciencias/bloque-1' },
    { url: 'http://localhost:5001/secundaria-3/matematicas/bloque-6', name: 'secundaria-3/matematicas/bloque-6' }
];

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    for (const { url, name } of PAGES) {
        console.log(`\n=== Testing ${name} (${url}) ===`);
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Check for any console errors
        page.on('console', msg => {
            if (msg.type() === 'error') {
                console.error(`[CONSOLE ERROR] ${msg.text()}`);
            }
        });

        // 1. Test star rating component
        console.log('1. Testing star rating...');
        const buttons = await page.$$('button');
        let opinarClicked = false;
        for (let i = 0; i < buttons.length; i++) {
            const text = await page.evaluate(btn => btn.textContent, buttons[i]);
            if (text.includes('Opinar')) {
                console.log('   Found "Opinar" button');
                await buttons[i].click();
                opinarClicked = true;
                break;
            }
        }

        if (!opinarClicked) {
            console.log('   WARNING: No "Opinar" button found (maybe not logged in?)');
        } else {
            // Wait for form
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
            console.log(`   Found ${starButtons.length} star buttons`);
            if (starButtons.length > 0) {
                // Click the first star
                await starButtons[0].click();
                console.log('   Clicked first star');
                // Verify star changed? (optional)
                // Wait a bit
                await new Promise(resolve => setTimeout(resolve, 500));
            } else {
                console.log('   WARNING: No star buttons found');
            }
        }

        // 2. Test fill_blank exercises
        console.log('2. Checking fill_blank exercises...');
        // Look for input with placeholder "Escribe tu respuesta aquí..."
        const fillInputs = await page.$$('input[placeholder*="Escribe tu respuesta"]');
        console.log(`   Found ${fillInputs.length} fill_blank inputs`);
        // Check if any fill_blank question contains a blank placeholder
        const questionElements = await page.$$('.pregunta, [class*="pregunta"], p, div');
        let blankPlaceholderFound = false;
        for (const el of questionElements) {
            const text = await page.evaluate(e => e.textContent, el);
            if (text.includes('___') || text.includes('???')) {
                blankPlaceholderFound = true;
                console.log(`   Found blank placeholder in question: "${text.substring(0, 50)}..."`);
                break;
            }
        }
        if (!blankPlaceholderFound) {
            console.log('   WARNING: No blank placeholder (___ or ???) detected in question text');
        }

        // 3. Check for any visible errors (e.g., "error" text)
        const bodyText = await page.evaluate(() => document.body.innerText);
        if (bodyText.includes('error') || bodyText.includes('Error')) {
            console.log('   WARNING: Page contains "error" text');
        }

        // Screenshot for visual inspection
        const screenshotPath = `debug_${name.replace(/\//g, '_')}.png`;
        await page.screenshot({ path: screenshotPath });
        console.log(`   Screenshot saved: ${screenshotPath}`);
    }

    await browser.close();
    console.log('\n=== All tests completed ===');
})();