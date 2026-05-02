import test from "@playwright/test";

test('get by test id', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart//ui/data-testid-page.html');
    await page.getByTestId('email-input').fill('sac@cas.com');
});
