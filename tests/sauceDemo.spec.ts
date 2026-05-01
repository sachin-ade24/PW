import {expect, test} from "@playwright/test";

test('saucedemo test', async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    //username: 
    const usernamesText: string = await page.locator('#login_credentials').innerText();
    const users: string[] = usernamesText!.split('\n');
    /*
    ! --> tells TypeScript:
    “I’m sure this is not null”
    */
   console.log(users);

   if(users.includes('standard_user')){
        await page.getByPlaceholder('Username').fill('standard_user');
   } else{
    console.log('FAILD TEST');
   };

   //password:
   const pwdForAllUsers: string = await page.locator('[data-test="login-password"]').innerText();
   const pwdUsers: string[] = pwdForAllUsers!.split('\n')
   console.log(pwdUsers);
   if(pwdUsers.includes('secret_sauce')){
        await page.getByPlaceholder('Password').fill('secret_sauce');
   } else{
    console.log('FAILD TEST');
   };

   //login button:
   await page.locator('input#login-button').click();

   //assertion
   expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

});
