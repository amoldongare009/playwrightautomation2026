import {test} from '@playwright/test'

test('Valid login and add customer test', async({page})=>{

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

    const txtFullName = page.locator("#f_name");
    await txtFullName.fill('John Doe');

    const txtEmail = page.locator("#f_email");
    await txtEmail.fill('john1@company.com');

    const txtPhone = page.locator("#f_phone");
    await txtPhone.fill('+91 99757 09708');

    const txtCompany = page.locator("#f_company");
    await txtCompany.fill('Acme Corp');

    const txtCreditLimit = page.locator("#f_credit");
    await txtCreditLimit.fill('5000');

    const txtCity = page.locator("input[name='city']");
    await txtCity.fill('Pune');

    const txtCountry = page.locator("input[name='country']");
    await txtCountry.fill('India');

    const selStatus = page.locator("select[name='status']");
    await selStatus.selectOption('active');

    const txtAddress = page.locator("input[name='address']");
    await txtAddress.fill('123 MG Road, Camp');

    const txtNotes = page.locator("textarea[name='notes']");
    await txtNotes.fill('VIP Customer, priority support requested.');

    const btnSubmit = page.locator("button[type='submit']");
    await btnSubmit.click();

    await page.pause();
})