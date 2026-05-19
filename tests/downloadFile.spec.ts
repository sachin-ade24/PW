import test from "@playwright/test";

test('test1: download', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
    await page.getByRole('textbox', {name: 'Enter Text:'}).fill('Sachin R. Tendulkar');
    await page.getByRole('button', {name: 'Generate and Download Text File'}).click();
    await page.getByRole('link', {name: 'Download Text File'}).click();
    await page.pause();
});

