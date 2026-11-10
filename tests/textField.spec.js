import{test} from '@playwright/test'

test('Validate Facebook Login', async({page})=>{

    await page.goto("https://www.facebook.com/")
    const txtUsername = await page.locator("#_R_c9l6neappb6amH1_")
    await txtUsername.fill("amoldongare89@gmail.com")

    const txtPassword = await page.locator("#_R_cdl6neappb6amH1_")
    await txtPassword.fill("Test123")

    const btnLogin = await page.locator("span[class='x1lliihq x1plvlek xryxfnj x1n2onr6 xyejjpt x15dsfln x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1sfkdl8 xurcqga x3vd66c xhqx0jl xtk6v10 x1yc453h xudqn12 x3x7a5m'] span[class='x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft']")
    await btnLogin.click()

    await page.pause()

})