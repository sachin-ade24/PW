//IIFE:
/*
(()=>{
    console.log("Hello World!");
})();
*/

import { Browser, chromium, Locator, Page } from "@playwright/test";
// import test from "node:test";


(async()=>{

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

})();
