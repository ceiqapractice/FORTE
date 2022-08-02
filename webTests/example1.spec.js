const {test}=require("@playwright/test");
const { log } = require("util");
const { LoginPage } = require("../webPageObjects/webPageFunctions/LoginPage");
const { DataHandler } = require("../webTestData/Datahandler");
const { webActions } = require("../webPageActions/webActions");


test("@Regression", async ({page})=>
  {
    const webActionObj =new webActions(page);
    const loginPageObj=new LoginPage(page);
    console.log("Regression Example1");
    await webActionObj.navigateToURL();
    console.log("Page navigation");
    await loginPageObj.LoginToApps();
  })

  test("@Smoke", async ({page})=>
  {
    const webActionObj =new webActions(page);
    const loginPageObj=new LoginPage(page);
    console.log("Smoke Example1");
    await webActionObj.navigateToURL();
    console.log("Page navigation");
    await loginPageObj.LoginToApps();
  })