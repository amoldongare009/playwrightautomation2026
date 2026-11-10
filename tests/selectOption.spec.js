import {test} from '@playwright/test'

test.beforeEach('Login', async({page})=>{

    await page.goto("https://playground.bondaracademy.com/pages")

})

test('Verify Date Picker', async ({page})=> {

    // const btnform = page.getByLabel('button', {label: 'Forms'})
    const btnform = page.getByText('Forms')
    await btnform.click()

    // const btnDatepicker = page.getByLabel('button', {label: 'Datepicker'})
    const btnDatepicker = page.getByText('Datepicker')
    await btnDatepicker.click()

    const btnFormPicker = page.getByText('Form Picker')
    await btnFormPicker.click()


    await page.pause()
})
