const { DataHandler } = require("../../../Helpers/dataHandler");
const { LocatorFinder } = require("../../../Helpers/locatorFinder");
const { webActions } = require("../commonFunctions/webActions");

//Login page functionality test
class LoginPage{
    constructor(page) 
    {
        this.page = page;
        this.webActionsObj=new webActions(page);
    }  
    async LoginToApps()
    {
        let DataHandlertest=new DataHandler("LoginPage","web");
        let LocatorFinderObj= new LocatorFinder("Formv10byColorlibpage",this.page);
        console.log("test");
        console.log(LocatorFinderObj.locators.Formv10byColorlib_first_name);
        console.log(DataHandlertest.getdata().Username);
        await this.webActionsObj.enterText(await LocatorFinderObj.locators.Formv10byColorlib_first_name,DataHandlertest.getdata().Username);
        await this.webActionsObj.enterText(await LocatorFinderObj.locators.Formv10byColorlib_last_name,DataHandlertest.getdata().Username);
        await this.webActionsObj.enterText(await LocatorFinderObj.locators.Formv10byColorlib_company,DataHandlertest.getdata().Username);
       // await this.webActionsObj.enterText(LoginElements.LetCodewithKoushik_email,DataHandlertest.getdata().Username);
       // await this.webActionsObj.enterText(LoginElements.LetCodewithKoushik_password,DataHandlertest.getdata().Password);
       //await this.webActionsObj.clickElement(LoginElements.LetCodewithKoushik_LoginBtn);    
    }
}
module.exports={LoginPage}