import { chromium, defineConfig, devices } from '@playwright/test';

export default defineConfig({

  timeout: 30 * 10000, // Set auto wait to Over all tests

  expect:{
      timeout: 50000, // set auto wait to indiviual test
  },

  testDir: './tests',

  reporter: 'html',
  use: {
      browserName: 'chromium',
      headless: false,  // By default headless mode is ON, we have to set as False. 
      //Headless >> Run the script in the backend
      screenshot: 'only-on-failure',
      video: 'retain-on-first-failure'
  },
});
