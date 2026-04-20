const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/primaria-1/matematicas/bloque-1', { waitUntil: 'networkidle2' });

    // Get page title
    const title = await page.title();
    console.log('Page title:', title);

    // Get all sections with class py-10 px-4
    const sections = await page.$$('section.py-10.px-4');
    console.log('Number of sections with py-10 px-4:', sections.length);

    // Iterate through each section and get its inner HTML snippet
    for (let i = 0; i < sections.length; i++) {
        const html = await page.evaluate(el => el.outerHTML, sections[i]);
        console.log(`--- Section ${i} ---`);
        console.log(html.substring(0, 500));
    }

    // Check for any element containing "Ejercicios"
    const ejercicioElements = await page.$$x('//*[contains(text(), "Ejercicios")]');
    console.log('Elements containing "Ejercicios":', ejercicioElements.length);

    // Check for any element with class containing "player"
    const playerClasses = await page.$$('[class*="player"], [class*="Player"], [class*="exercise"]');
    console.log('Elements with player/exercise class:', playerClasses.length);

    // Take screenshot of full page
    await page.screenshot({ path: 'debug_fullpage.png', fullPage: true });

    // Capture console errors
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.log('Console error:', msg.text());
        }
    });

    // Wait a bit for any dynamic content
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check for any script errors in page
    const errors = await page.evaluate(() => {
        const errors = [];
        const scripts = document.querySelectorAll('script');
        scripts.forEach(s => {
            if (s.src && s.onerror) {
                errors.push(s.src);
            }
        });
        return errors;
    });
    console.log('Script errors:', errors);

    await browser.close();
})();