const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/primaria-1/matematicas/bloque-1', { waitUntil: 'networkidle2' });
  
  console.log('Page loaded');
  
  // Find and click the "Opinar" button
  const buttons = await page.$$('button');
  let opinarClicked = false;
  for (let i = 0; i < buttons.length; i++) {
    const text = await page.evaluate(btn => btn.textContent, buttons[i]);
    if (text.includes('Opinar')) {
      console.log('Found "Opinar" button');
      await buttons[i].click();
      console.log('Clicked');
      opinarClicked = true;
      break;
    }
  }
  
  if (!opinarClicked) {
    console.error('Could not find "Opinar" button');
    await browser.close();
    process.exit(1);
  }
  
  // Wait for form to appear (look for star buttons)
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
  
  console.log(`Found ${starButtons.length} star buttons`);
  
  if (starButtons.length === 0) {
    console.error('No star buttons found');
    await page.screenshot({ path: 'debug_no_stars.png' });
    await browser.close();
    process.exit(1);
  }
  
  // Click first star (should be empty star)
  await starButtons[0].click();
  console.log('Clicked first star');
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Check if first star now appears filled
  // We can evaluate the button's text after click
  const firstStarText = await page.evaluate(btn => btn.textContent, starButtons[0]);
  if (firstStarText.includes('⭐')) {
    console.log('SUCCESS: First star selected');
  } else {
    console.log('FAIL: First star not selected');
  }
  
  // Click fifth star (assuming there are at least 5)
  if (starButtons.length >= 5) {
    await starButtons[4].click();
    console.log('Clicked fifth star');
    await new Promise(resolve => setTimeout(resolve, 500));
    const fifthStarText = await page.evaluate(btn => btn.textContent, starButtons[4]);
    if (fifthStarText.includes('⭐')) {
      console.log('SUCCESS: Fifth star selected');
    } else {
      console.log('FAIL: Fifth star not selected');
    }
  }
  
  await browser.close();
})();