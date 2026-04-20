const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/primaria-1/matematicas/bloque-1', { waitUntil: 'networkidle2' });
  
  console.log('Page loaded');
  
  // Get all buttons
  const buttons = await page.$$('button');
  console.log('Total buttons:', buttons.length);
  
  // Loop through buttons and get text
  for (let i = 0; i < buttons.length; i++) {
    const text = await page.evaluate(btn => btn.textContent, buttons[i]);
    console.log(`Button ${i}: "${text}"`);
    if (text.includes('Opinar')) {
      console.log('Found "Opinar" button');
      // Click it
      await buttons[i].click();
      console.log('Clicked');
      break;
    }
  }
  
  // Wait for star buttons
  await page.waitForTimeout(1000);
  
  // Find star buttons
  const starButtons = await page.$$('button');
  for (let i = 0; i < starButtons.length; i++) {
    const text = await page.evaluate(btn => btn.textContent, starButtons[i]);
    if (text.includes('⭐') || text.includes('☆')) {
      console.log(`Star button ${i}: "${text}"`);
    }
  }
  
  await browser.close();
})();