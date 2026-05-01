import { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test";

(async()=>{

    //browser:
    let browser: Browser = await chromium.launch({channel: 'chrome', headless: false, slowMo: 500});
    let context1: BrowserContext = await browser.newContext();
    let context2: BrowserContext = await browser.newContext();

    //page
    let page1: Page = await context1.newPage();
    let page2: Page = await context2.newPage();

    //standard_user:
    await page1.goto('https://www.saucedemo.com/');
    await page1.getByPlaceholder('Username').fill('standard_user');
    await page1.getByPlaceholder('Password').fill('secret_sauce');
    await page1.locator('input#login-button').click();
    expect(page1.url()).toBe('https://www.saucedemo.com/inventory.html');  
    await page1.close();  

    //visual_user:
    await page2.goto('https://www.saucedemo.com/');
    await page2.getByPlaceholder('Username').fill('standard_user');
    await page2.getByPlaceholder('Password').fill('secret_sauce');
    await page2.locator('input#login-button').click();
    expect(page2.url()).toBe('https://www.saucedemo.com/inventory.html');
    await page2.close();

})();
