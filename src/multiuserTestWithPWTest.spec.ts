import { test, expect } from "@playwright/test";

test('multiple users test', async ({ browser }) => {

    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    // standard_user
    await page1.goto('https://www.saucedemo.com/');
    await page1.getByPlaceholder('Username').fill('standard_user');
    await page1.getByPlaceholder('Password').fill('secret_sauce');
    await page1.locator('#login-button').click();
    await expect(page1).toHaveURL('https://www.saucedemo.com/inventory.html');

    // visual_user
    await page2.goto('https://www.saucedemo.com/');
    await page2.getByPlaceholder('Username').fill('visual_user');
    await page2.getByPlaceholder('Password').fill('secret_sauce');
    await page2.locator('#login-button').click();
    await expect(page2).toHaveURL('https://www.saucedemo.com/inventory.html');

});