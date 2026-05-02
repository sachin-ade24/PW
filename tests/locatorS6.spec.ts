import test, { expect, Locator } from "@playwright/test";

test.skip('header locator: h1 to h6', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let flag1: boolean =  await page.getByRole('heading', {name: 'Register Account'}).isVisible();
    console.log(flag1);

    let flag2 = await page.getByText('Register Account').isVisible();
    console.log(flag2);

    let h1Count: number = await page.locator('h1').count();
    let h1Text: string = await page.locator('h1').innerText();
    if((h1Count === 1) && (h1Text === 'Register Account')){
        let flag3: boolean = await page.locator('h1').isVisible();
        console.log(flag3);
    } else{
        console.log('FAILED');
    }

    //For header use level:
    let flag4: boolean = await page.getByRole('heading', {name: 'Register Account', level: 1}).isVisible();
    console.log(flag4);
});


test.skip('radio button 1', async({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('radio', {name: 'Yes', checked: false}).click();
    await page.getByLabel('No').click();
    await page.getByText('Yes').click();
});


test.skip('checkbox1', async({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let checkboxFlag1: boolean = await page.getByRole('checkbox', {checked: false, disabled: false}).isVisible();
    console.log(checkboxFlag1);
    let numOfCheckBoxes: number = await page.locator('input[name="agree"]').count();
    let flag: boolean = await page.locator('input[name="agree"]').isVisible();
    console.log(numOfCheckBoxes);
    if(numOfCheckBoxes===1 && flag){
        await page.getByRole('checkbox', {checked: false, disabled: false}).scrollIntoViewIfNeeded();
    } else{
        console.log('FAILED');
    };
    //finding a parent by using filter and then getting its child:
    let parentLocator = page.locator('.pull-right', {has: page.getByRole('button', {name: 'Continue'})});
    await parentLocator.getByRole('checkbox', {checked: false}).check();
});


test.skip('checkbox2', async({page})=>{
    await page.goto('https://testing.qaautomationlabs.com/checkbox.php');
    await page.getByRole('checkbox', {name: 'Check me!', checked: false}).check();
    let locator: Locator = page.locator('label', {has: page.getByText('Check me!')});
    await locator.getByRole('checkbox', {checked: true}).uncheck();
});


test.skip('radio button 2', async({page}) => {
    await page.goto('https://testing.qaautomationlabs.com/radio-button.php');
    await page.locator('[name="gender"]').last().click();
    let locator: Locator = page.locator('.card-tools', {has: page.getByRole('button', {name: 'Show Selected Gender'})});
    await locator.locator('[value="Male"]').click();
    await page.getByRole('radio', {name: 'Female'}).first().click();
    await page.locator('[name="gender"]').and(page.locator('[value="Male"]')).click();
});


test.skip('radio button 3', async({page})=>{
    await page.goto('https://testing.qaautomationlabs.com/radio-button.php');
    let locator: Locator = page.locator('div', {has: page.getByText('Select Age Group:')});
    await locator.getByRole('radio', {name: '35+'}).click();
    await page.getByLabel('18-35').click();
    await page.getByText('Under 18').click();
    await page.getByRole('radio', {name: '35+'}).click();
});

test.skip('links', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let numberOfLinks: number = await page.getByRole('link').count();
    console.log(numberOfLinks);//48

    //Approach 1: valid
    await page.getByRole('textbox', {name: 'Password'}).and(page.locator('[name="password"]')).fill('1234567');

    //Approach 2: valid --> *************************A SPECIAL CASE**************************
    //await page.getByRole('textbox', {name: '* Password', exact: true}).fill('1234567');

    //Approach 2: valid
    // let locator: Locator = page.locator('[placeholder="Password"]');
    // await locator.scrollIntoViewIfNeeded();
    // await locator.fill('1234567');

    //Approach 3: valid
    // await page.getByRole('textbox', {name: 'Password'}).first().fill('1234567');

    await page.getByRole('link', {name: 'Forgotten Password'}).click();
});


test.skip('textarea', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42&search=apple+');
    await page.getByRole('checkbox', {name: 'Checkbox 3'}).click();
    await page.getByRole('checkbox', {name: 'Checkbox 4'}).click();
    let locator1: Locator = page.getByRole('textbox', {name: 'Textarea'});
    await locator1.fill('Hello Automation');
    let locator2: Locator = page.getByRole('textbox', {name: '* Text', exact: true});
    await expect(locator2).toHaveValue('test');
    await locator1.clear();
    let address = `Flat no.1, 
    Plot no.25, 
    Samata Colony, 
    Pune - 412345`;
    await locator1.fill(address);
});


test.skip('select dropdown', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42&search=apple+');
    let locator1: Locator = page.locator("select[id*='input']");
    await locator1.scrollIntoViewIfNeeded();
    await locator1.selectOption({label: 'Blue (+$3.60)'});
    let locator2: Locator = page.locator('.form-group.required', {has: page.getByRole('option', {name: 'Select'})}).locator('select');
    await locator2.selectOption({label: 'Green (+$1.20)'});
});


test.skip('date', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42&search=apple+');
    let locator1: Locator = page.locator('[data-date-format="YYYY-MM-DD"]');
    await locator1.click().then(()=>locator1.clear());
    await page.locator('div.date button').click();
    let locator2: Locator = page.locator('.picker-open .datepicker-days th.picker-switch');
    let defaultTextOfDatePickerDays: string = await locator2.innerText();
    if(defaultTextOfDatePickerDays != '2026'){
        await locator2.click();
        let locator3: Locator = page.locator('.picker-open .datepicker-months th.picker-switch');
        let defaultTextOfDatePickerMonths: string = await locator3.innerText();
        while(defaultTextOfDatePickerMonths != '2026'){
            await page.locator('.picker-open .datepicker-months th.next').click();
            if(defaultTextOfDatePickerMonths == '2026'){
                break;
            };
        };
        await page.locator('.picker-open .datepicker-months tbody').locator('//span[text()="May"]').click().then(()=>{
            page.locator('td.day.today').click();
        });
        
    };
});


test('Add to Cart button', async({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42&search=apple+');
    await page.locator('#product').getByText('Add to Cart').click();
    //await page.locator('#product').getByRole('button', {name: 'Add to Cart'}).click(); //valid
});

