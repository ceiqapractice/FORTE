const { devices } = require('@playwright/test');
const config = {
  testDir: './tests',
  timeout: 80 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: [ ['html', { outputFolder: 'my-report' }] ],
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
