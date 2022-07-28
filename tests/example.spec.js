const {test}=require("@playwright/test");
const { log } = require("util");
const { LoginPage } = require("../pageObjects/pageFunctions/LoginPage");
const { DataHandler } = require("../testData/Datahandler");
const { webActions } = require("../webActions/webActions");


test("Login to the application", async ({page})=>
  {
    const webActionObj =new webActions(page);
    const loginPageObj=new LoginPage(page);
    await webActionObj.navigateToURL();
    console.log("Page navigation");
    await loginPageObj.LoginToApps();
  })