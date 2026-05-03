import test, { Locator } from "@playwright/test";

test('get attribute value', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let locator: Locator = page.getByRole('textbox', {name: 'First Name'});
    await locator.fill('Test Automation');

    let attrVal: string | null = await locator.getAttribute('placeholder');
    console.log(attrVal);//First Name

    let loginLink: string | null = await page.locator('aside a:has-Text("Login")').getAttribute('href');
    console.log(loginLink);
});
