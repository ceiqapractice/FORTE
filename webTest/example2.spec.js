const {test}=require("@playwright/test");
const { log } = require("util");
const { LoginPage } = require("../webPageObjects/webPageFunctions/LoginPage");
const { webActions } = require("../webPageActions/webActions");
const { DataHandler } = require("../testData/Datahandler");


test("@Regression", async ({page})=>
  {
    const webActionObj =new webActions(page);
    const loginPageObj=new LoginPage(page);
    console.log("Regression Example2");
    await webActionObj.navigateToURL();
    console.log("Page navigation");
    await loginPageObj.LoginToApps();
  })

  test("@Smoke", async ({page})=>
  {
    const webActionObj =new webActions(page);
    const loginPageObj=new LoginPage(page);
    console.log("Smoke Example2");
    await webActionObj.navigateToURL();
    console.log("Page navigation");
    await loginPageObj.LoginToApps();
  })