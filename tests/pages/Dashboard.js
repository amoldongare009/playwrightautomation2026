class Dashboard
{
    constructor(page)
    {
        this.linkCustomer = page.locator("a[href='customers.php']")
    }

    clickOnCustomerLink()
    {
        this.linkCustomer.click()
    }
}module.exports = {Dashboard}