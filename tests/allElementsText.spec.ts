import test, { Locator } from "@playwright/test";

test('test1: grab text associated with all elements', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let locator: Locator = page.locator('a[href]');
    let allHrefTxts: string[] = await locator.allInnerTexts();
    for(let txt of allHrefTxts){
        console.log(txt);
    };
    console.log(await locator.count());
    console.log(allHrefTxts.length);
});

test('test2: grab text associated with all elements', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    const locators: Locator[] = await page.locator('#column-right a').all();
    for(let locator of locators){
        if(await locator.innerText() != 'Forgotten Password'){
            await locator.click();
        } else{
            break;
        }
        if(await locator.innerText() != 'Register'){
            await page.goBack();
        };
    };
});

test('test3: grab text associated with all elements', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let locatorsArr: Locator[] = await page.locator('#column-right a').all();
    let strArr: string[] = [];
    for(let e of locatorsArr){
        strArr.push(await e.innerText());
    };
    console.log(strArr);
    for(let str of strArr){
        if(str!='Forgotten Password'){           
            await page.locator(`#column-right a:has-text('${str}')`).click();
            if(str!='Register'){
                await page.goBack();
            };             
            console.log(`Clicked on '${str}'`);
        } else{
            break;
        }
    };
});

test('test4: grab text associated with all elements', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let strArr: string[] = await page.locator('#column-right a').allInnerTexts();
    for(let str of strArr){
        if(str!='Forgotten Password'){      
            let locator: Locator = page.locator(`#column-right a:has-text('${str}')`);
            await locator.highlight();
            await locator.click();
            if(str!='Register'){
                await page.goBack();
            };             
            console.log(`Clicked on ${str}`);
        } else{
            break;
        };
    };
});

test('test5: grab text associated with all elements', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let strArr: string[] = await page.locator('#column-right a').allInnerTexts();
    for(let str of strArr){
        if(str!='Forgotten Password'){      
            let locator: Locator = page.locator(`#column-right a:has-text('${str}')`);
            await locator.highlight();
            await locator.click();
            if(str!='Register'){
                await page.goBack();
            };             
            console.log(`Clicked on ${str}`);
        } else{
            break;
        };
    };
});

test.only('test6: grab text associated with all elements', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let strArr: string[] = await page.locator('#column-right a').allInnerTexts();
    for(let str of strArr){
        if(str==='Forgotten Password'){
            let locator: Locator = page.locator(`#column-right a:has-text('${str}')`);
            await locator.highlight();
            await locator.click();
            console.log(`Clicked on '${str}'`);
        };
    };
});
