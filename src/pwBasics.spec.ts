//IIFE:
/*
(()=>{
    console.log("Hello World!");
})();
*/

import { Browser, chromium, firefox, Locator, Page, webkit } from "@playwright/test";
// import test from "node:test";


(async()=>{

    //Open browser manually

    //1. Use chrome:
    let browser: Browser = await chromium.launch({channel: 'chrome', headless: false});//Valid

    //2. Use chromium (CFT --> chrome for testing):
    //let browser: Browser = await chromium.launch({channel: 'chromium', headless: false});//Valid

    //3. Use msedge:
    //let browser: Browser = await chromium.launch({channel: 'msedge', headless: false});//valid

    //4. Use opera:
    //let browser: Browser = await chromium.launch({channel: 'opera', headless: false});//invalid
    //let browser: Browser = await chromium.launch({headless: false, executablePath: 'please provide Opera path'});//valid

    //5. Use brave:
    //let browser: Browser = await chromium.launch({headless: false, executablePath: 'please provide Brave path'});//valid

    //6. Use firefox (Nightly):
    //let browser: Browser = await firefox.launch({headless: false});//Valid

    //7. Use safari (webkit):
    //let browser: Browser = await webkit.launch({headless: false});//Valid


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
    await browser.close();

})();
