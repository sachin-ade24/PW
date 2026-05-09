import test from "@playwright/test";
import * as XLSX from 'xlsx';

const workbook: XLSX.WorkBook = XLSX.readFile('data/registrationExcelData.xlsx');
const sheetName: string = workbook.SheetNames[0];
const sheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
const excelData: any[] = XLSX.utils.sheet_to_json(sheet);
console.log(excelData);

excelData.forEach((user)=>{
    test(`Registration for ${user['First Name']}`, async({page})=>{
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        await page.getByLabel('First Name').fill(user['First Name']);
        await page.getByLabel('Last Name').fill(user['Last Name']);
        await page.getByLabel('E-Mail').fill(user['E-Mail']);
    });
});
