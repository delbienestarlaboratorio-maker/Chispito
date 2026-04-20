const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const url = 'http://localhost:3000/preescolar-1/espanol/bloque-6';
    console.log(`Testing ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Check exercise player presence
    const player = await page.$('.ejercicio-card, [class*="ExercisePlayer"], .blank-placeholder');
    console.log('Player container exists:', player !== null);

    // Count blank-placeholder spans
    const blankPlaceholders = await page.$$('.blank-placeholder');
    console.log('Number of .blank-placeholder elements:', blankPlaceholders.length);
    if (blankPlaceholders.length > 0) {
        const styles = await page.evaluate(() => {
            const el = document.querySelector('.blank-placeholder');
            if (!el) return null;
            const computed = window.getComputedStyle(el);
            return {
                textDecoration: computed.textDecoration,
                color: computed.color,
                backgroundColor: computed.backgroundColor,
                fontWeight: computed.fontWeight,
                borderBottom: computed.borderBottom,
            };
        });
        console.log('Style of first blank-placeholder:', styles);
    }

    // Check star rating section
    const starSection = await page.$('.ComentariosSection, [class*="Comentarios"]');
    console.log('Star rating section exists:', starSection !== null);
    const starButtons = await page.$$('button[aria-label*="estrella"], button[aria-label*="star"]');
    console.log('Star buttons count:', starButtons.length);
    // Try to click a star (first one)
    if (starButtons.length > 0) {
        await starButtons[0].click();
        await page.waitForTimeout(500);
        // Check if selected
        const selected = await page.evaluate(() => {
            const btn = document.querySelector('button[aria-label*="estrella"], button[aria-label*="star"]');
            return btn?.getAttribute('aria-selected') === 'true' || btn?.classList.contains('selected');
        });
        console.log('Star click successful?', selected);
    }

    // Take screenshot for visual verification
    await page.screenshot({ path: 'test_placeholder_final.png', fullPage: false });
    console.log('Screenshot saved.');

    await browser.close();
})();