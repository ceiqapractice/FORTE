const { devices } = require('@playwright/test');
var date = new Date();
var ReportDate =date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours() ).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
const config = {
  testDir: './test/web',
  testMatch: '**spec.js',
  timeout: 8000 * 1000,
  expect: {
    timeout: 5000,
    toMatchSnapshot:{threshold:0.05}
  },
<<<<<<< HEAD
  //reporter: [ ['html', { outputFolder: './playwright-report/'+ ReportDate}]],
  //reporter: [ ['html', { outputFolder: './playwright-report/'}]],
=======
  ///reporter: [ ['html', { outputFolder: './playwright-report/'+ ReportDate}]],
  ///reporter: [ ['html', { outputFolder: './playwright-report/'}]],
>>>>>>> cf43134408f059852115441ab6e74b42ee5bfa3b
  reporter: [ ['experimental-allure-playwright']],
  projects: [
    {   
      use: {
        browserName:"firefox",
        headless:true,
        video: 'off'
      },
  
    },
  ],
};

module.exports = config;
