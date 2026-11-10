class AddCustomer
{
    constructor(page)
    {
        this.clickAddCustomer = page.locator(".btn-topbar.btn-add")
    }

    async addNewCustomer()
    {
        this.clickAddCustomer.click();
    }
}module.exports = {AddCustomer}
