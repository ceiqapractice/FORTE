const { devices } = require('@playwright/test');
const config = {
  testDir: './tests',
  timeout: 80 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  projects: [
    {   
      use: {
        browserName:"chromium",
        headless:false
      },
    },
  ],
};

module.exports = config;
