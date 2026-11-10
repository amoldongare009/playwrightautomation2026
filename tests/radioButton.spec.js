import {test} from '@playwright/test'

test('Verify Radio Button', async({page})=>{

    await page.goto("https://amolujagare.com/practice/elements.html")

    const btnRadio = page.locator("div[class='radio-group'] label:nth-child(2)")
    
    await btnRadio.check()

    // await btnRadio.click() // Working fine

    await page.pause()

})