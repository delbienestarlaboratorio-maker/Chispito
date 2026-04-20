const puppeteer = require('puppeteer');

async function main() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/primaria-1/matematicas/bloque-1', { waitUntil: 'networkidle0' });

    // Check if the player container exists
    const playerContainer = await page.$('section.py-10.px-4 .max-w-2xl.mx-auto');
    if (!playerContainer) {
        console.error('Player container not found');
        // Take screenshot for debugging
        await page.screenshot({ path: 'debug_player_missing.png', fullPage: true });
        await browser.close();
        return;
    }

    // Get the HTML of the container
    const html = await page.evaluate(el => el.outerHTML, playerContainer);
    console.log('Player container HTML (first 2000 chars):', html.substring(0, 2000));

    // Check for exercise player components
    const kinderPlayer = await page.$('KinderExercisePlayer');
    const primariaPlayer = await page.$('PrimariaExercisePlayer');
    const exercisePlayer = await page.$('ExercisePlayer');
    console.log('Custom element presence:', { kinderPlayer: !!kinderPlayer, primariaPlayer: !!primariaPlayer, exercisePlayer: !!exercisePlayer });

    // Check for any rendered ejercicio cards
    const ejercicioCards = await page.$$('.ejercicio-card');
    console.log('Ejercicio card count:', ejercicioCards.length);

    // Check for any blank placeholders
    const blankPlaceholders = await page.$$('.blank-placeholder');
    console.log('Blank placeholder count:', blankPlaceholders.length);

    // Check for any input fields
    const inputs = await page.$$('input[type="text"]');
    console.log('Input count:', inputs.length);

    // Check visibility of the player
    const isVisible = await page.evaluate(el => {
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    }, playerContainer);
    console.log('Player container visible:', isVisible);

    // Take screenshot of the player area
    await playerContainer.screenshot({ path: 'debug_player_area.png' });

    await browser.close();
}

