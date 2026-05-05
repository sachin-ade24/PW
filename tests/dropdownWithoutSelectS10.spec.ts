import test, { Locator } from "@playwright/test";

test('test1: multi-select dropdown with check boxes', async({page})=>{
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');

    //await page.locator('#justAnInputBox[placeholder="Select"]').click();//valid 
    await page.locator('div', {has: page.locator('h3:has-text("Multi Selection")')})
            .locator('#justAnInputBox').click();

    //For choice1:
    //await page.locator('//h3[text()="Multi Selection"]/..//span[text()="choice 1  "]').click();//valid

    //For all options in the 1st dropdown:
    let locatorArr: Locator[] = await page.locator('//h3[text()="Multi Selection"]/..//span[@data-id]').all();
    for(let l of locatorArr){
        await l.click();
    };

    //Following forloop targets all 45 option in all 3 dropdown: so, the for loop below does not give you the righ result
    // let la: Locator[] = await page.locator('div', {has: page.locator('h3:has-text("Multi Selection")')}).locator('span[data-id]').all();
    // for(let l of la){
    //     await l.click();
    // };    
});
