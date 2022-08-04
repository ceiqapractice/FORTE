const {test}=require("@playwright/test");
const { log } = require("util");
const { LoginPage } = require("../webPageObjects/webPageFunctions/LoginPage");
const { webActions } = require("../webPageActions/webActions");
const { DataHandler } = require("../TestData/Datahandler");


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
    console.log("Smoke test allure report1");
    await webActionObj.navigateToURL();
    console.log("Page navigation");
    await loginPageObj.LoginToApps();
  })