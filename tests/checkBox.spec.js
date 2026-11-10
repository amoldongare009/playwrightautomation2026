import {test} from '@playwright/test'

test('Verify checkbox', async({page})=>{

    await page.goto("https://demoqa.com/checkbox")

    const checkBox = await page.locator("span[aria-label='Select Home']")
    // await checkBox.click() // Working fine
    
    await checkBox.check()

    await page.pause()
})