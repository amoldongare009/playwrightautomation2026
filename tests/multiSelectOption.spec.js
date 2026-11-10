import {test} from '@playwright/test'

test('Verify Multi Select Values', async({page})=>{

    await page.goto("https://amolujagare.com/practice/elements.html")

    const multiSelect = page.locator("#multiSel")
    // await multiSelect.selectOption([{label: 'text 2'}, {label: 'text 4'}]) // Select Multi values using Labels

    await multiSelect.selectOption([{index: 1}, {index: 2}])
    await page.pause()
    
    /* await page.goto("https://demoqa.com/select-menu")

    const dropdown1 = await page.locator("div[class='css-15lsz6c-indicatorContainer'] svg")
    await dropdown1.selectOption([{label: 'Green'}, {label: 'Red'}, {label: 'Blue'}])
    await page.pause()

    const dropdown2 = await page.locator("#cars")
    await page.pause()

    await dropdown2.selectOption({label: 'audi'})
    // await dropdown2.selectOption("Audi")
    await page.pause() */
})