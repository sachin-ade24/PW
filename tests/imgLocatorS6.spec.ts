import test, { Locator } from "@playwright/test";

test('image locator test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let locator1: Locator = page.getByAltText('naveenopencart');
    let locator2: Locator = page.getByRole('img', {name: 'naveenopencart'});
    let locator3: Locator = page.getByTitle('naveenopencart');
    let f1: boolean = await locator2.isVisible();
    let f2: boolean = await locator3.isVisible();
    console.log(f1);
    console.log(f2);
    let visibilityFlag: boolean = await locator1.isVisible();
    if(visibilityFlag){
        await locator1.highlight();
        await locator1.click();
        console.log('***PASSED***');
    } else{
        console.log('***FAILED***');
    };
});
