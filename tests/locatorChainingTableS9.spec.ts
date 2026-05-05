import test, { Locator } from "@playwright/test";

test('test1: chaining', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.locator('fieldset').getByRole('textbox', {name: 'First Name'}).fill('Sachin');
    let locator: Locator = page.locator('aside').getByText('Login');
    await locator.highlight();
    await locator.click();
});

test('test2: table with chaining', async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/');

    let locatorTr: Locator = page.locator('#table01 tbody tr');
    let tableStrs: string[] = await locatorTr.allInnerTexts();
    for(let tr of tableStrs){
        console.log(tr);
    };

    let locatorCb: Locator = page.locator('#table01 input[type="checkbox"]');
    let allCheckBoxes: Locator[] = await locatorCb.all();
    for(let cb of allCheckBoxes){
        await cb.click();
    };

    let locatorTd: Locator[] = await locatorTr.locator('td').all();
    for(let td of locatorTd){
        if((await td.innerText()).trim() === 'TFS'){
            console.log((await td.innerText()).trim());
        };
    };

    await page.locator('//td[text()="GUI"]/ancestor::tr//input[@type="checkbox"]').click();
    //alternative XPath: //a[text()='Selenium']/../..//input[@type="checkbox"]
    // '/-->direct' and '//-->indirect'

    let trLocators = await page.locator('#table01 tbody tr').all();
    for(let tr of trLocators){
        if((await tr.innerText()).includes('Selenium')){
            await tr.locator('input[type="checkbox"]').click();
        };
    };    
});

test('test3: table with chaining', async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/');
    await page.locator('#table01 tr')
        .filter({hasText: 'QTP', visible: true})
        .getByRole('checkbox')
        .click();
    await page.locator('#table01 tr', {hasText: 'Selenium'})
        .getByRole('checkbox')
        .click();
});

test('test4: table with chaining', async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/');

    //console.log(await page.locator('td', {hasText: 'Ashton Cox'}).innerText());//Ashton Cox
    console.log(await page.locator('tr', {hasText: 'Ashton Cox'}).innerText());

    console.log("========================================================================================================");

    let empData: string[] = await page.locator('tr', {hasText: 'Ashton Cox'}).allInnerTexts();
    for(let e of empData){
        console.log(e);
    };

    console.log("========================================================================================================");

    for(let i = 0; i<await page.locator('#table02 th').count(); i++){
        console.log(`${await page.locator('#table02 th').nth(i).innerText()}:--> ${await page.locator('#table02 tr').nth(3).locator('td').nth(i).innerText()}`);
    };

    console.log("========================================================================================================");

    for(let i=0; i<await page.locator('#table02 tbody tr').count(); i++){
        for(let j=0; j<await page.locator('#table02 th').count(); j++){
            console.log(`${await page.locator('#table02 th').nth(j).innerText()}:--> ${await page.locator('#table02 tbody tr').nth(i).locator('td').nth(j).innerText()}`);
        };
        console.log("====================================================");
    };

    console.log("========================================================================================================");

    //Approach 1:
    //Print whole table:
    let tableRowTexts: string[] = await page.locator('#table02 tr').allInnerTexts();
    for(let txt of tableRowTexts){
        console.log(txt);
    };

    console.log("========================================================================================================");
    
    //Approach 2:
    //Print whole table:
    console.log(await page.locator('#table02').innerText());
});

test.only('test5: table with chaining', async({page})=>{

    await page.goto('https://www.w3schools.com/HTML/html_tables.asp');

    //Approach 1:
    console.log(await page.locator('.w3-example table#customers').innerText());

    console.log("========================================================================================================");

    //Approach 2:
    let allRows: Locator[] = await page.locator('.w3-example table#customers tr').all();
    for(let row of allRows){
        console.log(await row.innerText());
    };

    console.log("========================================================================================================");

    //Approach 2:
    let allTxts: string[] = await page.locator('.w3-example table#customers tr').allInnerTexts();
    for(let txt of allTxts){
        console.log(txt);
    };

    console.log("========================================================================================================");

    //Approach 3: (This logs each cell one by one)
    let allTexts:string[] = await page.locator('.w3-example table#customers th').allInnerTexts();
    for(let th of allTexts){
        console.log(th);
        // process.stdout.write(`${th} `);
    };

    let allTdTxts: string[] = await page.locator('.w3-example table#customers td').allInnerTexts();
    for(let td of allTdTxts){
        console.log(td);
        // process.stdout.write(`${td} `);
    };

    console.log("========================================================================================================");

    //Approach 4: (This logs only 'td' cells one by one)
    let locator: Locator = page.locator('#customers tr');
    let count: number = await locator.count(); 
    for(let i=1; i<count; i++){
        for(let j=0; j<(await locator.locator('th').count()); j++){
            console.log(await locator.nth(i).locator('td').nth(j).innerText());
        };
    };

    console.log("========================================================================================================");

    //Approach 5: with filter
    console.log(await page.locator('#customers tr', {has: page.locator('th')}).nth(0).innerText());
    for(let i=1; i<count-1; i++){
        console.log(await page.locator('#customers tr', {has: page.locator('td')}).nth(i).innerText());
    };
});

