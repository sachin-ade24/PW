import test, { expect, Locator } from "@playwright/test";

test('fetch text value', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let locator: Locator = page.getByRole('textbox', {name: 'First Name'});
    await locator.fill('Sachin');
    await page.getByRole('textbox', {name: 'First Name'}).press('Tab');
    let text: string = await locator.inputValue();
    expect(text).toEqual('Sachin');
    console.log(text);
});
