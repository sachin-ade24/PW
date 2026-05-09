import test, { expect, Frame, FrameLocator, Locator, Page } from "@playwright/test";

type RoleType = Parameters<Page['getByRole']>[0];

test('test1: iframe', async({page})=>{

    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');

    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();
    await page.waitForSelector('#formTemplateContainer');

    const iframeLocator: FrameLocator = page.frameLocator('[id*="frame-one"]')

    await iframeLocator.getByRole('textbox', {name: 'Proposal title *'}).fill('Sachin');
    await iframeLocator.getByRole('textbox', {name: 'Location'}).fill('Pune');
    await iframeLocator.getByRole('textbox', {name: 'Proposed date *'}).fill('05/31/2026');
    await iframeLocator.getByRole('textbox', {name: 'Description '}).fill('Description');
    await iframeLocator.locator('[id*="RESULT_FileUpload"]').setInputFiles('C:/Users/suraj/Downloads/DummyFile.docx');
    await iframeLocator.getByLabel('First Name *').fill('Sachin');
    await iframeLocator.getByLabel('Last Name *').fill('Ade');
    await iframeLocator.getByLabel('Street Address *').fill('Shivaji Nagar, Pune')
    await iframeLocator.getByLabel('City *').fill('Pune');
    //await iframeLocator.getByLabel('State *').selectOption({label: 'California'});//valid
    await iframeLocator.getByRole('combobox', {name: 'State *'}).selectOption('California');
    await iframeLocator.getByRole('textbox', {name: 'Zip Code *'}).fill('123456');
    await iframeLocator.getByRole('textbox', {name: 'Phone Number *'}).fill('9898989898');
    await iframeLocator.getByLabel('Email Address *').fill('a@b.com');

    //await getByFrameWithRole(page, '[id*="frame-one"]', 'button', 'Submit').click();//valid
    await getByFrameWithName(page, 'iframe[title]', 'Submit').click();

    const vrfStr: string = await page.getByRole('heading', {name: 'Vehicle Registration Form'}).innerText();
    console.log(vrfStr);

    await expect(page.getByTitle('Get this form')).toHaveText('Get this form');
    await page.getByTitle('Get this form').scrollIntoViewIfNeeded();
    await page.getByRole('link', {name: 'Get this form'}).click();

    await page.pause();
});

test('test2: multiple iframes', async({page})=>{

    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    await page.locator('frameset').first().isVisible();
    await page.frameLocator('[name=void1]').locator('title').isVisible();
    let frameArray: Frame[] = page.frames();
    console.log(frameArray.length);
    // console.log(frAr);//valid

    console.log('page.frames() Method=========================================================================================================');

    // const mainframeTxt: string = await page.frameLocator('[name="main"]').locator('title').innerText();//valid
    // console.log(mainframeTxt);//valid
    // const mainframeTxt: string = await page.frameLocator('[name="main"]').getByRole('heading', {name: 'Title bar (top.html)'}).innerText();//valid
    // console.log(mainframeTxt);//valid
    const mainframeTxt: string = await page.frameLocator('[name="main"]').getByRole('heading', {level: 2}).innerText();
    console.log(mainframeTxt);

    console.log('MainFrame Ended==============================================================================================================');

    const navFrameBodyTxt: string = await page.frameLocator('[name="navbar"]').locator('body').innerText();
    console.log(navFrameBodyTxt);

    console.log('NavigationFrame Endeded=======================================================================================================');
    
    const contentFrameHeadTxt: string = await page.frameLocator('[name="content"]').locator('head').innerText();
    const contentFrameBodyTxt: string = await page.frameLocator('[name="content"]').locator('body').innerText();
    console.log(contentFrameHeadTxt);
    console.log(contentFrameBodyTxt);

    console.log('ContentFrame Endeded==========================================================================================================');

    const botFrameHeadTxt: string = await page.frameLocator('[name="bot"]').getByRole('heading', {level: 2}).innerText();
    console.log(botFrameHeadTxt);

    console.log('=============================================================================================================================');

    for(let f of frameArray){
        console.log(`| Frame Name: ${await f.locator('title').innerText()} | Frame URL: ${f.url()} |`);
    };

    console.log('=============================================================================================================================');

    for(let f of frameArray){
        let name = f.name();
        let url = f.url();
        console.log(`${name}: ${url}`);
    };

});

test.only('test3: nested iframes', async({page})=>{
    await page.goto('https://www.dezlearn.com/nested-iframes-example/');

    const parentFrame: FrameLocator = page.frameLocator('#parent_iframe');
    const childFrame: FrameLocator = parentFrame.frameLocator('#iframe1');

    const parentFrameHeaderTxt: string = await parentFrame.getByRole('heading', {name: 'Parent iframe', level: 4}).innerText();
    console.log(parentFrameHeaderTxt);

    await parentFrame.getByRole('button', {name: 'Click Here'}).click();
    const para: string = await parentFrame.getByRole('paragraph').innerText();
    console.log(para);
    const flag: boolean = await childFrame.getByRole('heading', {name: 'iframe 2', level: 4}).isVisible();
    console.log(flag);
    await childFrame.getByRole('button', {name: 'Click Here'}).click();
    const frame1ParaTxt: string = await childFrame.getByRole('paragraph').innerText();
    console.log(frame1ParaTxt);

    const txt: string = await page.getByRole('heading', {name: 'Nested iFrames Example', level: 2}).innerText();
    console.log(txt);
})


function getByFrameWithRole(page: Page, selector: string, role: RoleType, name: string): Locator{
    return page.frameLocator(selector).getByRole(role, { name });
};

function getByFrameWithLabel(page: Page, selector: string, label: string): Locator{
    return page.frameLocator(selector).getByLabel(label);
};

function getByFrameWithName(page: Page, selector: string, name: string): Locator{
    return page.frameLocator(selector).locator(`[name=${name}]`);
};
