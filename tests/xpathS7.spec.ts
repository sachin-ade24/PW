import test from "@playwright/test";

test('xpath test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //XPath:
    //id:
    await page.locator('//input[@id="input-firstname"]').fill('S@cI');
    //text():
    const regAccTxt1: string = await page.locator('//h1[text()="Register Account"]').innerText();
    console.log(regAccTxt1);
    //contains():
    await page.locator('//input[contains(@placeholder, "E-Mail")]').fill('sac@cas.com');
    //starts-with:
    const regAccTxt2 = await page.locator('//h1[starts-with(text(), "Register")]').innerText();
    console.log(regAccTxt2);
    await page.locator('//input[starts-with(@placeholder, "First")]').clear();
    //parent to child:
    let numberOfLinksInTheFooter: number = await page.locator('//footer//a').count();
    console.log(numberOfLinksInTheFooter);
});
