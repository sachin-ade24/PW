import test from "@playwright/test";

test('test1: google search dd', async({page})=>{
    await page.goto('https://www.google.com');

    await page.locator('textarea[title="Search"]').fill('Naveen automation lab');
    await page.getByLabel('Naveen automation lab playwright').click();
});

test('test2: amazon search dd', async({page})=>{
    await page.goto('https://www.amazon.com/');
    await page.getByLabel('Search Amazon').fill('macbook pro');
    //await page.getByLabel('macbook pro 16 inch').click();//valid
    await page.getByLabel('macbook pro', {exact: true}).click();
});

//https://www.magupdate.co.uk/magazine-subscription/PHRR

test.only('test3: magupdate radio button', async({page})=>{
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/PHRR');
    await page.getByRole('radio', {name: 'I do not wish to receive FREE copies of HR Magazine regularly.'}).click();
});
