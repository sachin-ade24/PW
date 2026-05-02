import test from "@playwright/test";

test('type with delay', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox', {name: 'First Name'}).pressSequentially('Sachin', {delay: 1000});
    await page.pause();
});
