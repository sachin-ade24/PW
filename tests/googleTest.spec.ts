import {test, Page, Locator, chromium, Browser} from '@playwright/test';

//Destructuring with page parameter:
test('google test1', async ({page}) => {

    const searchBox: Locator = page.locator('[title="Search"]');

    await page.goto('https://www.google.com');
    const titleOfPage: string = await page.title();
    console.log(titleOfPage);
    const pageUrl: string = page.url();
    console.log(pageUrl);
    await searchBox.click();
    await searchBox.fill('playwright');
    await page.keyboard.press('Enter');

});

//Destructuring with browser parameter:
test('google test2', async ({browser}) => {

    const page: Page = await browser.newPage();
    const searchBox: Locator = page.locator('[title="Search"]');

    await page.goto('https://www.google.com');
    const titleOfPage: string = await page.title();
    console.log(titleOfPage);
    const pageUrl: string = page.url();
    console.log(pageUrl);
    await searchBox.click();
    await searchBox.fill('playwright');
    await page.keyboard.press('Enter');

});

//Without destructuring:
test('google test3', async () => {

    //Open browser manually
    let browser: Browser = await chromium.launch({channel: 'chrome', headless: false});

    //create a new page
    const page: Page = await browser.newPage();

    //Save common locator
    const searchBox: Locator = page.locator('[title="Search"]');

    //Navigate to the URL
    await page.goto('https://www.google.com');

    //Get the title of the page
    const titleOfPage: string = await page.title();
    console.log(titleOfPage);

    //Get the current URL
    const pageUrl: string = page.url();
    console.log(pageUrl);
    await searchBox.click();
    await searchBox.fill('playwright');
    await page.keyboard.press('Enter');

});

