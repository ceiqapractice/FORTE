const {test}=require("@playwright/test");
const { log } = require("util");
const { LoginPage } = require("../webPageObjects/webPageFunctions/LoginPage");
const { webActions } = require("../webPageActions/webActions");
const { DataHandler } = require("../TestData/Datahandler");
const { TestDataEtries } = require("../webPageObjects/webPageFunctions/TestDataEntries");


test("@Regression", async ({page})=>
  {
    const webActionObj =new webActions(page);
    const testDataEntriesObj=new TestDataEtries(page);
    await webActionObj.navigateToURL();
    await testDataEntriesObj.EnterData();

  })

  

test("@Regression2", async ({page})=>
{
  const webActionObj =new webActions(page);
  const testDataEntriesObj=new TestDataEtries(page);
 console.log("second ")

})
  