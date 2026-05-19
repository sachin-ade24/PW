import test, { expect } from "@playwright/test";
import myData from '../data/myData.json';
import registrationFormData from '../data/registrationFormData.json';
import users from '../data/users.json';
import data from '../data/data.json';
import { userInfo } from "node:os";

test('test1: json data check', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    expect(page.url()).toEqual(myData.url);
    expect(await page.title()).toEqual(myData.title);
});

test('test2: json data check', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox', {name: Object.keys(registrationFormData)[0]}).fill(registrationFormData["* First Name"]);
    for(let [key, value] of Object.entries(registrationFormData)){
        console.log(`${key}: ${value}`);
    };
    for(let [key, value] of Object.entries(registrationFormData)){
        await page.getByRole('textbox', {name: key}).fill(value);
        await expect(page.getByLabel(key.replace('*', ''))).toHaveValue(value);
    };
});

// test.only('test3: json data check', async({page})=>{
//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
//     await page.getByLabel('First Name', {exact: true}).fill('Sachin');
// })

users.Users.forEach((user)=>{
    test(`Registration for ${user["* First Name"]}`, async({page})=>{
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        console.log(users.Users[0]["* First Name"]);
        for(let i=0; i<=users.Users.length; i++){
            console.log(users.Users[i]);
        };
        for(let [key, value] of Object.entries(user)){
            await page.getByLabel(key.replace('*', ''), {exact: true}).fill(String(value));
            await expect(page.getByLabel(key.replace('*', '').trim(), {exact: true})).toHaveValue(value);
        };
    });
});


data.Users.forEach((user)=>{
    test(`testing json data for ${user["firstname"]}`, async({page}) => {

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        
        /*
            //This will not work due to forEach loop:
                Object.entries(user).forEach(async([key, value])=>{
                    await page.locator(`#input-${key}`).fill(String(value));
                    await expect(page.locator(`#input-${key}`)).toHaveValue(value);
                });
        */

        for(let [key, value] of Object.entries(user)){
            await page.locator(`#input-${key}`).fill(String(value));
            await expect(page.locator(`#input-${key}`)).toHaveValue(String(value));
        };
    });
});


let testCount = 0;
data.Users.forEach((user)=>{
    Object.entries(user).forEach(([key, value])=>{
        testCount++;
        test.only(`data driven test no.: ${testCount}`, async({page})=>{
            await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
            await page.locator(`#input-${key}`).fill(String(value));
            await expect(page.locator(`#input-${key}`)).toHaveValue(String(value));
        });
    });
});
