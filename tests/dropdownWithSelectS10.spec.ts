import test, { Locator } from "@playwright/test";

test.only('test1: select tag dropdown handling', async({page})=>{
    
    await page.goto('https://www.orangehrm.com/contact-sales');
    // console.log(await page.locator('select#Form_getForm_Country').allInnerTexts());//valid

    let locator: Locator = page.locator('select#Form_getForm_Country');

    //Select with text:
    await locator.selectOption({label: 'India'});//valid
    let selectedIndia = await locator.inputValue();
    console.log(selectedIndia);

    //==============================================================================================================

    //Select option with value:
    await locator.selectOption({value: 'Afghanistan'});//valid
    await locator.selectOption({index: 50});//valid

    //==============================================================================================================

    //Select option directly from the visible dropdown by paasing string:
    await locator.selectOption('India');

    //==============================================================================================================

    //For loop with 'label':
    let locatorArr: Locator[] = await locator.locator('option').all();
    for(let l of locatorArr){
        let labelStr: string = (await l.innerText()).trim();
        // await locator.selectOption({label: labelStr});//valid
        await page.getByRole('combobox', {name: 'Country'}).selectOption({label: labelStr});
    };

    //==============================================================================================================

    //For loop with 'value':

    /*
    This is not allowed in async code execution:
        // locatorArr.forEach(async(l)=>{
        //     // console.log(await l.getAttribute('value'));
        //     let s: string | null = await l.getAttribute('value');
        //     await page.getByRole('combobox', {name: 'Country'}).selectOption({value: s!});
        // });
    */

    for(let l of locatorArr){
        // await locator.selectOption({label: (await l.innerText()).trim()});//valid
        let s: string | null = await l.getAttribute('value');
        await page.getByRole('combobox', {name: 'Country'}).selectOption({value: s!});
    };


    //==============================================================================================================

    //For loop with 'index':
    for(let i=0; i<locatorArr.length; i++){
        await page.getByRole('combobox', {name: 'Country'}).selectOption({index: i});
    };

});

test('test2: multi-select dropdown', async({page})=>{
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');
    await page.locator('select[name="Month"]').scrollIntoViewIfNeeded();
    await page.locator('select[name="Month"]').selectOption(["January", "February", "March"]);
});
