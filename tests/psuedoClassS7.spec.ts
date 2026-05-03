import test from "@playwright/test";

test('psuedo class test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //partial or complete text matching:
    const registerAccTxt: string = await page.locator('h1:has-text("Register Account")').innerText();
    //const text: string = await page.locator('h1:has-text("Register")').innerText();//valid
    console.log(registerAccTxt);

    //exact text matching:
    const personalDetailsTxt: string =  await page.locator('legend:text-is("Your Personal Details")').innerText();
    console.log(personalDetailsTxt);//Your Personal Details

    //exact text matching:
    const regAccTxt: string =  await page.locator('text=Register Account').innerText();
    console.log(regAccTxt);

    //filter:
    const loginPageTxt: string = await page.locator('p a', {hasText: 'login page'}).innerText();
    console.log(loginPageTxt);
});
