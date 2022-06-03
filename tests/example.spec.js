const { test, expect } = require('@playwright/test');

test.only('Example Test - 1', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  const firstName = page.locator('#firstName');
  const lastName = page.locator('#lastName');
  const userEmail = page.locator('#userEmail');
  //await firstName.click();
  await firstName.type("Manikandan");
  await lastName.type("Adaikalam");
  await userEmail.type("maniziva@gmail.com");
  await page.selectOption('#gender-radio-1', { label: 'Male' });

});