const { selectors } = require("@playwright/test");
const { testConfig } = require("../testData/testData");

class webActions
{
    constructor(page) 
    {
        this.page = page;
    }
    async navigateToURL() 
    {
        await this.page.goto(testConfig.dev);
     }

     async clickElement(locator) 
     {  
        await this.page.click(locator);
    }

    async enterElementText(locator, text)
    {
        await this.page.fill(locator, text);
    } 

    async getAllElements()
    { 
        await this.page.Wait
        
    }

}

module.exports={webActions}
