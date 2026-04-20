const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // show browser to see
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/secundaria-3/ciencias/bloque-1', { waitUntil: 'networkidle2' });
  
  // Wait for exercise player to load
  await page.waitForSelector('.ejercicio-card', { timeout: 5000 });
  
  // Take screenshot of the whole page
  await page.screenshot({ path: 'debug_exercise.png', fullPage: true });
  console.log('Screenshot saved');
  
  // Extract exercise questions
  const questions = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('.ejercicio-card'));
    return elements.map(el => el.textContent);
  });
  
  console.log('Found exercise cards:', questions.length);
  questions.forEach((q, i) => {
    console.log(`--- Card ${i} ---`);
    console.log(q.substring(0, 200));
  });
  
  // Look for fill blank input
  const inputs = await page.$$('input[type="text"]');
  console.log('Text inputs:', inputs.length);
  
  // Wait for user to inspect
  console.log('Browser open for manual inspection. Close manually.');
  // await browser.close();
})();