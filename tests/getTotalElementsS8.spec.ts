import test, { Locator } from "@playwright/test";

test('find total links on page', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let numberOfLinks: number = await page.getByRole('link').count();
    console.log(numberOfLinks);//48

    let locator: Locator = page.locator('a[href]');
    let numberOfLinksWith_aTag: number = await locator.count();
    console.log(numberOfLinksWith_aTag);//81

    let allHrefLinks: Locator[] = await locator.all();
    console.log(allHrefLinks.length);
    for(let linkLocator of allHrefLinks){
        console.log(linkLocator);
    };
    /*
        Note: As allHrefLinks: Locator[] --> is array of locators, allHrefLinks will save the locators not links.
    */

   console.log('=================================================================================================');

    for(let linkLocator of allHrefLinks){
        // console.log(await linkLocator.innerText());//--> valid
        // console.log(await linkLocator.getAttribute('href'));//--> valid
        console.log(`${await linkLocator.innerText()}:--> ${await linkLocator.getAttribute('href')}`);
    };
});

test.only('find total images on the page', async({page})=>{
    await page.goto('https://www.flipkart.com');
    let locator: Locator = page.getByRole('img');
    console.log(await locator.count());
    let allImgLocators: Locator[] = await locator.all();
    for(let e of allImgLocators){
        console.log(`${e.getAttribute('alt')}:--> ${e.getAttribute('src')}`);
    }
   console.log('=================================================================================================');
    let allImgTxt: string[] = await locator.allInnerTexts();
    for(let e of allImgTxt){
        console.log(e);
    }
});
