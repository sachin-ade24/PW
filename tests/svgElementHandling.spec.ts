import test, { Locator } from "@playwright/test";

test('test1: svg element', async({page})=>{
    await page.goto('https://www.flipkart.com/');

    // await page.locator('form input[title="Search for Products, Brands and More"]').fill('Samsung');
    // await page.locator('form', {has: page.getByTitle('Search for Products, Brands and More')}).locator('input[type="text"]').fill('Samsung');
    await page.locator('form input[type="text"]').first().fill('Samsung');

    // await page.pause();

    //all below are valid:
    // const searchTitleTxt = await page.locator('svg title').first().textContent();
    // const searchTitleTxt = await page.getByRole('img', {name: 'Search Icon'}).textContent();
    // const searchTitleTxt = await page.getByLabel('Search for Products, Brands and More').first().textContent();

    const searchIcon:Locator = page.getByRole('button', {name: 'Search for Products, Brands and More'}).locator('svg[fill ="none"]');
    const searchTitleTxt = await searchIcon.textContent();
    console.log(searchTitleTxt);

});
