import test from "@playwright/test";

test('paceholder', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByPlaceholder('First Name').pressSequentially('Sac');
    await page.getByPlaceholder('Last Name').fill('Cas');
    await page.getByPlaceholder('E-Mail').fill('sac@cas.com');
    await page.getByPlaceholder('Telephone').fill('1234567890');
    await page.getByPlaceholder('Password', {exact: true}).fill('sac@cas');
    await page.getByPlaceholder('Password Confirm', {exact: true}).fill('sac@cas');
});
