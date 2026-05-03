import test from "@playwright/test";

test('css selector test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //css selector: 
    await page.locator('#input-firstname').fill('S@C');
    await page.locator('[name="lastname"][placeholder="Last Name"]').fill('C@S');
});
