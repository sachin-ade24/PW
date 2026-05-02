import test from "@playwright/test";

test('test1', async({page})=>{
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', {name: 'First Name'}).fill('Sac1');
    await page.getByRole('textbox', {name: 'Last Name'}).fill('1caS');
    await page.getByRole('textbox', {name: 'E-Mail'}).fill('sac1@1cas.com');
    await page.getByRole('textbox', {name: 'Telephone'}).fill('0123456789');
    await page.locator('[placeholder="Password"]').scrollIntoViewIfNeeded();
    await page.locator('[placeholder="Password"]').fill('sac@cas');
    await page.locator('[placeholder="Password Confirm"]').fill('sac@cas');
    await page.getByRole('radio', {name: 'Yes'}).check();
    await page.locator('input[name="agree"]').click();

    let visibilityFlag: boolean = await page.getByRole('button', {name: 'Continue'}).isVisible();
    console.log(visibilityFlag);

});
