const { DataHandler } = require("../../webTestData/Datahandler");
const { testConfig } = require("../../webTestData/testData");
const { webActions } = require("../../webPageActions/webActions");
const { LoginPageElements } = require("../webPageLocators/LoginPageElements");

//Login page functionality test
class LoginPage{
    constructor(page) 
    {
        this.page = page;
        this.webActionsObj=new webActions(page);
    }
     
    async LoginToApps()
    {
       
        let DataHandlertest=new DataHandler("LoginPage");
        console.log(DataHandlertest.getdata().Username)
        console.log(DataHandlertest.getdata().Password)
        console.log(DataHandlertest.getdata().test)
        await this.webActionsObj.enterElementText(LoginPageElements.EMAIL_EDITBOX_ID,DataHandlertest.getdata().Username);
        await this.webActionsObj.enterElementText(LoginPageElements.PASSWORD_EDITBOX_ID,DataHandlertest.getdata().Password);
        await this.webActionsObj.clickElement(LoginPageElements.SUBMIT_BUTTON_ID); 
    }
}
module.exports={LoginPage}