const { devices } = require('@playwright/test');
const config = {
  testDir: './tests',
  timeout: 80 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: [ ['html', { open: 'always' }] ],
  projects: [
    {   
      use: {
        browserName:"chromium",
        headless:true
      },
    },
  ],
};

module.exports = config;
