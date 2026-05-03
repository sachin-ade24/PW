import test from "@playwright/test";

test('page loading state', async({page})=>{

    //goto() options:
    //load: all resources(images, elements, css, script) loaded --> this is default option (no need to write)
    //domcontentloaded: HTML DOM is parsed, DOM is ready --> it says DOM is loaded but it does not guarentee that page has loaded completely
    /*
        networkidle: no network activity for 500ms --> bad practic and hence should not be used for the dynamic applications
        e.g. espncricinfo.com
    */
    //commit: getting first response from the server --> again not good to go. Because we need all responses to be received

    //Hence the best option is --> {waitUntil: 'load'} --> but this is a default option (no need to write it)
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil: 'load'});
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil: 'domcontentloaded'});
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil: 'networkidle'});
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil: 'commit'});

});
