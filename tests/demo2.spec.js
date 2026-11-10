import {test} from '@playwright/test'

test('Open Facebook', async({page})=>{

    await page.goto("https://facebook.com");
    await page.pause();
})

test('Open Gmail', async({page})=>{

    await page.goto("https://gmail.com");
    await page.pause();
})

test('Open Google', async({page})=>{

    await page.goto("https://google.com");
    await page.pause();
})