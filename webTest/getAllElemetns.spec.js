// import { xPath } from "playwright-dompath";

const { test, selectors } = require("@playwright/test");
const { xPath } = require("playwright-dompath");
const { timeout } = require("../playwright.config");
const domToPlaywright = require('dom-to-playwright').default;



test("@allelements", async ({ page }) => {

  //await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  await page.goto("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
  //await page.goto('https://letcode.in/elements');
  
  await page.waitForSelector("form", { timeout: 5000 })
        const repos = await page.$$("form");
        const allUrls = await Promise.all(repos.map(async (repo, i) => {
            return await repo.innerHTML()
        }))
        console.log(allUrls);
      })