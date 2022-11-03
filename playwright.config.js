const { devices } = require('@playwright/test');
var date = new Date();
var ReportDate =date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours() ).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
const config = {
  testDir: './test/web',
  testMatch: '**spec.js',
  timeout: 100 * 1000,
  fullyParallel: false,
  expect: {
    timeout: 30000,
    toMatchSnapshot:{threshold:0.05}
  },
  // retries:2,
  //reporter: [ ['html', { outputFolder: './playwright-report/'+ ReportDate}]],
 //reporter: [ ['html', { outputFolder: './playwright-report/'}]],
 reporter: [['allure-playwright'],['./My-Reporter.js']],
  //globalTeardown:require.resolve("./mailer.js"), 
  projects: [
    {   
      name : 'chromium',
      use: {
        browserName:"chromium",
        headless:false,
        video: 'off'
      }
      },
      {
        name : 'webkit',
        use: {
          browserName:"webkit",
          headless:true,
          video: 'off'
        }
        },
          
  //       {
  //         name : 'firefox',
  //         use: {
  //           browserName:"firefox",
  //           headless:true,
  //           video: 'off'
  //         }
  //         },
      
  ],
};

module.exports = config;
