import {test} from '@playwright/test'

test('Valid login test', async({page})=>{

    await page.goto("https://amolujagare.com/stockmaster/")

    const txtUsername = page.locator("input[placeholder='admin@example.com']");
    await txtUsername.fill('amolujagare@gmail.com');

    const txtPassword = page.locator("#pwField");
    await txtPassword.fill('admin123');

    const btnLogin = page.locator("button[type='submit']");
    await btnLogin.click();

    const clkCustomerLink = page.locator("a[href='customers.php']");
    await clkCustomerLink.click();

    const btnAddCustomer = page.locator(".btn-topbar.btn-add");
    await btnAddCustomer.click();

    await page.pause();
})