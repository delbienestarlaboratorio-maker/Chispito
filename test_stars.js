const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:5001/primaria-1/matematicas/bloque-1', { waitUntil: 'networkidle2' });
  
  console.log('Page loaded');
  
  // Wait for the comentarios section to be present using XPath
  const opinarButtonXPath = "//button[contains(text(), 'Opinar')]";
  await page.waitForXPath(opinarButtonXPath, { timeout: 5000 }).catch(() => {
    console.log('No "Opinar" button found');
    // Take screenshot for debugging
    page.screenshot({ path: 'debug.png' });
    console.log('Screenshot saved');
    process.exit(1);
  });
  
  // Click the "Opinar" button to open the form
  const [opinarButton] = await page.$x(opinarButtonXPath);
  await opinarButton.click();
  console.log('Clicked "Opinar" button');
  
  // Wait for the star rating buttons to appear
  const starButtonXPath = "//button[contains(., '⭐') or contains(., '☆')]";
  await page.waitForXPath(starButtonXPath, { timeout: 5000 });
  
  // Get all star buttons
  const starButtons = await page.$x(starButtonXPath);
  console.log('Number of star buttons:', starButtons.length);
  
  // Click the first star (should set rating to 1)
  await starButtons[0].click();
  console.log('Clicked first star');
  
  // Wait a bit for UI update
  await page.waitForTimeout(500);
  
  // Verify that the first star is now selected (should be ⭐)
  const firstStarSelected = await page.$x("//button[contains(., '⭐')][1]");
  if (firstStarSelected.length > 0) {
    console.log('SUCCESS: First star selected');
  } else {
    console.log('FAIL: First star not selected');
  }
  
  // Click the fifth star
  await starButtons[4].click();
  console.log('Clicked fifth star');
  await page.waitForTimeout(500);
  
  // Verify fifth star selected
  const fifthStarSelected = await page.$x("//button[contains(., '⭐')][5]");
  if (fifthStarSelected.length > 0) {
    console.log('SUCCESS: Fifth star selected');
  } else {
    console.log('FAIL: Fifth star not selected');
  }
  
  // Close browser
  await browser.close();
})();