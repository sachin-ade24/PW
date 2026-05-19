import test from "@playwright/test";
import practiceData from '../data/practiceData.json';

Object.entries(practiceData).forEach(([key, value])=>{
    test(`practiceData for ${key}`, async({page})=>{
        await page.goto('https://practicesoftwaretesting.com/');
        await page.getByRole('heading', {name: value.trim(), exact: true}).click();
    });
});
