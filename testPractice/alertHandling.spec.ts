import test from "@playwright/test";


/*
    //DOM -- alert:
    <button onclick="alert('Login Successful')">
        Click Me
    </button>

    //DOM -- confirm:
    <button onclick="confirm('Delete item?')">
        Delete
    </button>

    //DOM -- prompt:
    <button onclick="prompt('Enter your name')">
        Prompt
    </button>
*/


/*
    JavaScript dialogs are:
        - alert()
        - confirm()
        - prompt()
    
    Playwright handles it by using:
        page.on('dialog', async dialog => {
            // handle dialog
        });

    The dialog object provides:
        | Method                  | Purpose                  |
        | ----------------------- | ------------------------ |
        | `dialog.accept()`       | Click OK                 |
        | `dialog.dismiss()`      | Click Cancel             |
        | `dialog.message()`      | Get popup text           |
        | `dialog.type()`         | Get dialog type          |
        | `dialog.defaultValue()` | Get default prompt value |

*/

test('test1', async({page})=>{
    await page.goto('https://vinothqaacademy.com/alert-and-popup/');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());

        await dialog.accept();
    });

    await page.getByRole('button', {name: 'Alert Box', exact: true}).click();

    // await page.pause();

});

test('test2', async({page})=>{
    await page.goto('https://vinothqaacademy.com/alert-and-popup/');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());

        await dialog.dismiss();
    });

    await page.getByRole('button', {name: 'Alert Box', exact: true}).click();
});

test('test3', async({page})=>{
    await page.goto('https://vinothqaacademy.com/alert-and-popup/');

    page.on('dialog', async dialog => {
        console.log(dialog.message());

        await dialog.accept();
    });

    await page.getByRole('button', {name: 'Confirm Alert Box'}).click();
    // await page.pause();

});

test('test4', async({page})=>{
    await page.goto('https://vinothqaacademy.com/alert-and-popup/');

    page.on('dialog', async dialog => {
        console.log(dialog.message());

        await dialog.dismiss();
    });

    await page.getByRole('button', {name: 'Confirm Alert Box'}).click();
    await page.pause();

});

test('test5', async({page})=>{
    await page.goto('https://vinothqaacademy.com/alert-and-popup/');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());
        console.log(dialog.defaultValue());

        await dialog.accept('Automation');
    });

    await page.getByRole('button', {name: 'Prompt Alert Box'}).click();
    // await page.pause();

});

test.only('test6', async({page})=>{

    await page.goto('https://www.flipkart.com/');

    //let popup = await page.waitForEvent('popup');

    // await page.getByLabel('Enter Email/Mobile number').fill('Sachin');
    //await page.locator('form input').last().fill('Sachin');

    await page.locator('form').filter({hasText: 'Enter Email/Mobile number'}).getByRole('textbox').fill('Sachin');

    //await popup.waitForLoadState();

    //console.log(await popup.title());

    await page.pause();


});

