import {test} from '@playwright/test'

test('Verify Dropdown list', async({page})=>{

    await page.goto("https://blazedemo.com/")

    const dropdownList1 = page.locator("select[name='fromPort']")
    // await dropdownList1.selectOption({index: 2}) // Selection using index
    await dropdownList1.selectOption({label: 'Mexico City'}) // Selection using Label
    await page.pause()

    const dropdownList2 = page.locator("select[name='toPort']")
    await dropdownList2.selectOption("London") // Selection using Value/ Text
    await page.pause()
})