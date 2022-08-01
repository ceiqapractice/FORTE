const {test, selectors}=require("@playwright/test");
const { log } = require("util");
const { LoginPage } = require("../pageObjects/pageFunctions/LoginPage");
const { DataHandler } = require("../testData/Datahandler");
const { webActions } = require("../webActions/webActions");


test("@allelements", async ({page})=>
  {
    const webActionObj =new webActions(page);
    const loginPageObj=new LoginPage(page);
    console.log("Regression exmaple1");
    await webActionObj.navigateToURL();
    const allElements=document.body.getElementsByTagName("*")
    console.log(allElements.length);
})