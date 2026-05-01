import test from "@playwright/test";
import path from "path";

test.use({storageState:  path.join(__dirname, '../data/storageState.json')});

test('Home page', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
    await page.waitForTimeout(5000);
});

test('', async({page})=>{
    page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33');
    await page.waitForTimeout(5000);
});


