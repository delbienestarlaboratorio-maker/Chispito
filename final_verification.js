const puppeteer = require('puppeteer');

async function testPage(page, url) {
    console.log(`\n=== Testing ${url} ===`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 10000 }).catch(e => {
        console.log('Failed to load page:', e.message);
        return null;
    });

    // Check for blank-placeholder
    const blankCount = await page.$$eval('.blank-placeholder', els => els.length);
    console.log(`blank-placeholder count: ${blankCount}`);
    if (blankCount > 0) {
        const style = await page.evaluate(() => {
            const el = document.querySelector('.blank-placeholder');
            if (!el) return null;
            const comp = window.getComputedStyle(el);
            return {
                color: comp.color,
                backgroundColor: comp.backgroundColor,
                textDecoration: comp.textDecoration,
                borderBottom: comp.borderBottom,
            };
        });
        console.log('Placeholder style:', style);
    }

    // Check star rating section
    const starSection = await page.$('.ComentariosSection, [class*="Comentarios"]');
    console.log('Star rating section exists:', starSection !== null);
    if (starSection) {
        // Try to click a star button
        const starButtons = await page.$$('button[aria-label*="estrella"], button[aria-label*="star"]');
        console.log('Star buttons found:', starButtons.length);
        if (starButtons.length > 0) {
            await starButtons[0].click();
            await page.waitForTimeout(500);
            // Check if selected
            const selected = await page.evaluate(() => {
                const btn = document.querySelector('button[aria-label*="estrella"], button[aria-label*="star"]');
                return btn && (btn.getAttribute('aria-selected') === 'true' || btn.classList.contains('selected'));
            });
            console.log('Star click selected?', selected);
        }
    }

    // Check exercise player presence
    const player = await page.$('.ejercicio-card, [class*="ExercisePlayer"]');
    console.log('Exercise player container exists:', player !== null);
    if (player) {
        const question = await page.evaluate(() => document.querySelector('p')?.innerText?.substring(0, 50));
        console.log('Sample question:', question);
    }

    return { blankCount, starSection: starSection !== null };
}

async function main() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const base = 'https://chispito.mx';
    const urls = [
        '/secundaria-3/ciencias/bloque-1',
        '/secundaria-3/matematicas/bloque-6',
        '/preescolar-1/espanol/bloque-6',
        '/primaria-1/matematicas/bloque-1'
    ];
    for (const path of urls) {
        await testPage(page, base + path);
    }
    await browser.close();
    console.log('\n=== Verification complete ===');
}

main().catch(console.error);