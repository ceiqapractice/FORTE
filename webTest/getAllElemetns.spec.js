// import { xPath } from "playwright-dompath";

const { test, selectors } = require("@playwright/test");
const { xPath } = require("playwright-dompath");
const { timeout } = require("../playwright.config");
const domToPlaywright = require('dom-to-playwright').default;



test("@allelements test", async ({ page }) => {

  //await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  await page.goto("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
  //await page.goto("https://www.orangehrm.com/");
 
  const inputs = await page.$$('input')
  // console.log(typeof inputs);
  // console.log('*********');
   for(var p of inputs)
   {
    console.log(await p.getAttribute('id'));
   }
  // console.log('*********');
  // console.log("Hi");

  // await page.waitForSelector("form", { timeout: 5000 })
  // const repos = await page.$("form")
  // // const allUrls = await Promise.all(repos.map(async (repo, i) => {
  // //     return await repo.innerHTML() 
  // //    }))
  // console.log(await repos.innerHTML());
})
