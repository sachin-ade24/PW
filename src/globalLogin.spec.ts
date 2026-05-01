import { Browser, chromium, expect, Page } from "@playwright/test";
import path from "path";


//IIFE
(async()=>{

    let browser: Browser = await chromium.launch({channel: 'chrome', headless: false, slowMo: 2000});
    let page: Page = await browser.newPage();
    page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //getByPlaceholder:
    //await page.getByPlaceholder('E-Mail Address').fill('sac_cas@abc.com');
    //await page.getByPlaceholder('Password').fill('sac@cas');

    //getByRole:
    //await page.getByRole('textbox', {name: 'E-Mail Address'}).fill('sac_cas@abc.com');
    //await page.getByRole('textbox', {name: 'Password'}).fill('sac@cas');

    //getByLable:
    await page.getByLabel('E-Mail Address').fill('sac_cas@abc.com');
    await page.getByLabel('Password').fill('sac@cas');

    await page.locator('input[value="Login"]').click();

    //await page.waitForSelector("//h2[text()='My Account']");
    await page.waitForSelector('img[title="naveenopencart"]');
    await expect(page.locator("//h2[text()='My Account']")).toHaveText('My Account');

    await page.context().storageState({path: path.join(__dirname, '../data/storageState.json')});

    await page.close();

})();


