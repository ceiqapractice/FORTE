const { LocatorFinder } = require("../../Helpers/LocatorFinder");
const { DataHandler } = require("../../TestData/Datahandler");
const { testConfig } = require("../../TestData/webTestData/testData");
const { webActions } = require("../../webPageActions/webActions");


class TestDataEtries{
    constructor(page) 
    {
        this.page = page;
        this.webActionsObj=new webActions(page);
    }
     
    async EnterData()
    {
        let DataHandlertest=new DataHandler("LoginPage");
        let locatorFinder = new LocatorFinder("LoginPageElements",this.page);
        await this.webActionsObj.enterText(await locatorFinder.locators.FIRSTNAME,DataHandlertest.getdata().Username);

        }
}
module.exports={TestDataEtries}