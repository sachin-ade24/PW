import test, { Locator } from "@playwright/test";

test('test1: shadow dom handling', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    // await page.locator('single-shadow-element').getByText('Click Me').click();//valid
    // await page.locator('single-shadow-element').locator('button#shadow-btn').click();//valid
    await page.getByRole('button', {name: 'Click Me', exact: true}).click();//valid

});

test('test2: shadow dom handling', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');
    const shadowLocator: Locator = page.locator('shadow-form-element');

    //Username:
    // await shadowLocator.getByLabel('Username').fill('sac123');//valid
    await shadowLocator.getByRole('textbox', {name: 'Username'}).fill('sac123');
    // await shadowLocator.getByPlaceholder('Enter username').fill('sac123');//valid
    // await shadowLocator.getByTestId('username-input').fill('sac123');//valid

    //Email:
    // await shadowLocator.getByLabel('Email').fill('sac123@cool.com');//valid
    // await shadowLocator.getByPlaceholder('Enter email').fill('sac123@cool.com');//valid
    await shadowLocator.getByRole('textbox', {name: 'Email'}).fill('sac123@cool.com');
    // await shadowLocator.getByTestId('email-input').fill('sac123@cool.com');//valid

    //Bio:
    // await shadowLocator.getByTestId('bio-textarea').fill('Tell us..');//valid
    // await shadowLocator.getByRole('textbox', {name: 'Bio'}).fill('Tell us..');//valid
    await shadowLocator.getByPlaceholder('Tell us about yourself...').fill('Tell us..');

    //submit button:
    // await shadowLocator.getByTestId('submit-btn').click();//valid
    await shadowLocator.getByRole('button', {name: 'Submit'}).click();

});

test('test3: 2-level shadow dom handling', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');
    const outerShadowLocator: Locator = page.locator('outer-shadow-element');
    const outerShadowTxt: string = await outerShadowLocator.getByText('Outer Shadow (Level 1)').innerText();
    console.log(outerShadowTxt);
    const innerShadowLocator: Locator = outerShadowLocator.locator('inner-shadow-element');
    // await innerShadowLocator.getByPlaceholder('Type inside nested shadow...').fill('TYpe inside nested shadow..');//valid
    await innerShadowLocator.getByRole('textbox', {name: 'Type inside nested shadow...'}).fill('TYpe inside nested shadow..');
});

test('test4: 3-level shadow dom handling', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');
    // await page.locator('level-one-element').locator('level-two-element').locator('level-three-element').getByTestId('deep-button').click();//valid
    await page.locator('level-one-element level-two-element level-three-element').getByTestId('deep-button').click();//valid
});

test('test5: Shadow DOM with Slots', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');
    await page.locator('#card-slots slot-container-element').getByRole('button', {name: 'Slotted Button'}).click();
    await page.pause();
});

test('test6: closed shadow dom', async({page})=>{

    await page.addInitScript(() => {

        const originalAttachShadow =
            Element.prototype.attachShadow;

        Element.prototype.attachShadow =
            function (options) {
                return originalAttachShadow.call(this, {
                    ...options,
                    mode: 'open'
                });
            };
    });

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');
    await page.locator('closed-shadow-element [data-testid="closed-btn"]').click();
    // await page.pause();
});

test('test7: Shadow DOM Todo List', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');
    const checkboxes: Locator[] = await page.locator('#todo-list [type="checkbox"]').all();
    for(let cb of checkboxes){
        await cb.click();
    }
});

test.only('testLast: Nested Shadow Dropdown', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');
    await page.locator('#framework-select').scrollIntoViewIfNeeded();
    await page.locator('#framework-select').selectOption({label: 'Playwright'});
    // await page.pause();
});
