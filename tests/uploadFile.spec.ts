import test from "@playwright/test";

test('test1: file upload', async({page})=>{
    await page.goto('https://testing.qaautomationlabs.com/file-upload.php');
    await page.locator('#fileInput').setInputFiles('C:/Sachin/2026/Naveen Sir PW/test docs/Book1.xlsx');
    await page.pause();
});

test.only('test2: file download', async({page})=>{
    await page.goto('https://testing.qaautomationlabs.com/file-download.php');
    await page.getByRole('textbox', {name: 'Type your text here...'}).fill('Sachin...');
    await page.getByRole('button', {name: 'Generate File'}).click();
    
    await page.getByRole('link', {name: ' Download File'}).click();

    // await page.waitForEvent('download');
});