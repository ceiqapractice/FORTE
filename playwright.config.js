const { devices } = require('@playwright/test');
var date = new Date();
var ReportDate =date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours() ).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
const config = {
  testDir: './tests',
  testMatch: '**/*.spec.js',
  timeout: 8000 * 1000,
  expect: {
    timeout: 5000,
    toMatchSnapshot:{threshold:0.05}
  },
  reporter: [ ['html', { outputFolder: './playwright_report/'+ ReportDate}]],
  projects: [
    {   
      use: {
        browserName:"chromium",
        headless:false,
      },
  
    },
  ],
};

module.exports = config;
