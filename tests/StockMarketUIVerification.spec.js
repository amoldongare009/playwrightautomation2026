import {test, expert} from '@playwright/test'
import {Login} from './pages/Login'
import {Dashboard} from './pages/Dashboard'
import {AddCustomer} from './pages/AddCustomer'

test('Add Customer Workflow', async({page})=> {

await page.goto("https://amolujagare.com/stockmaster/index.php")

const login = new Login(page) // Create Object/ Instance of Login Class

await login.setUsername('amolujagare@gmail.com') // Calling the method and Passing the argument
await login.setPassword('admin123')  // Calling the method and Passing the argument
await login.SubmitBtn()

const dashoard = new Dashboard(page)
await dashoard.clickOnCustomerLink()

const addCustomer = new AddCustomer(page)
await addCustomer.addNewCustomer()

await page.pause()
})