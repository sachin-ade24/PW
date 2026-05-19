import test, { expect, Locator } from "@playwright/test";

test('practice test1', async({page})=>{
    // await page.goto('https://google.com');
    await page.goto('https://orangehrm.com/30-day-free-trial');
    // await page.goBack();
    // await page.goForward();
    await page.getByRole('textbox', {name: 'Name for the Trial System'}).highlight();
    await page.getByRole('textbox', {name: 'Name for the Trial System'}).fill('System1');
    await page.getByRole('textbox', {name: 'Full Name'}).highlight();
    await page.getByRole('textbox', {name: 'Full Name'}).fill('Sachin');
    await page.getByLabel('Email').fill('sa@bac.com');
    await page.getByPlaceholder('Phone Number*', {exact: true}).fill('1234567890');
    await page.getByRole('combobox', {name: 'Country'}).selectOption({label: 'India'});
    await page.getByRole('combobox', {name: 'Country'}).selectOption({value: 'Afghanistan'});
    let allTxts: string[] = await page.locator('#Form_getForm_Country').allInnerTexts();
    console.log(allTxts);
    let allOptions: Locator[] = await page.locator('#Form_getForm_Country option').all();
    for(let option of allOptions){
        let txt = (await option.innerText()).trim();
        console.log(txt);
        await page.getByRole('combobox', {name: 'country'}).selectOption({label: txt});
    };

})

test('practice test2', async({browser}) => {
    
    let context = await browser.newContext();
    let page = await context.newPage();
    
    await page.goto('https://orangehrm.com/30-day-free-trial');
    await page.locator('footer .footer-main-section').scrollIntoViewIfNeeded();
    

    let [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', {name: 'E-Books'}).click()
    ]);


    await newPage.waitForLoadState();

    let title: string = await newPage.title();
    expect(title).toBe('HR Software | eBooks | OrangeHRM');

});

test.only('multi-user test', async({browser})=>{

    let context1 = await browser.newContext();
    let context2 = await browser.newContext();

    let page1 = await context1.newPage();
    let page2 = await context2.newPage();

    await page1.goto('https://www.saucedemo.com/');
    await page1.getByRole('textbox', {name: 'Username'}).fill('standard_user');
    await page1.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
    await page1.getByRole('button', {name: 'Login'}).click();

    await page2.goto('https://www.saucedemo.com/');
    await page2.getByRole('textbox', {name: 'Username'}).fill('standard_user');
    await page2.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
    await page2.getByRole('button', {name: 'Login'}).click();

    await page1.pause();
    await page2.pause();

    //page1.locator('').setInputFiles('test.pdf');

    //page1.locator('div').waitFor({state: "detached"})


});

