class Login
{
    constructor(page)
    {
        // Define Locators/ WebElements

         this.txtUsername = page.locator("input[placeholder='admin@example.com']")
         this.txtPassword = page.locator("#pwField")
         this.btnLogin = page.locator(("button[type='submit']"))
    }

    // Action Methods define here 

    async setUsername(username)  // Declare Method
    {
        await this.txtUsername.fill(username)
    }

    async setPassword(password)  // Declare Method
    {
        await this.txtPassword.fill(password)
    }

    async SubmitBtn()  // Declare Method
    {
        this.btnLogin.click();
    }

}module.exports = {Login} // We can call the object from outside of this class 