const { devices } = require('@playwright/test');
const config = {
  testDir: './tests',
  testMatch: '**/*.spec.js',
  timeout: 80 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: [ ['html', { outputFolder: './playwright_report/'+ Date.now()}]],
  projects: [
    {   
      use: {
        browserName:"firefox",
        headless:true
      },
    },
  ],
};

module.exports = config;
