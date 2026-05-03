import test from "@playwright/test";


test('get by text', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let flag: boolean = await page.locator('#content').getByText('Register Account').isVisible();
    console.log(flag);
    console.log(await page.getByText('Register Account', {exact: true}).isVisible());
});


test.only('duplicate element test and get by label test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.locator('aside a', {hasText: 'Forgotten Password'}).click();
    await page.goBack();
    await page.getByLabel('Password').fill('sac@cas');
});
