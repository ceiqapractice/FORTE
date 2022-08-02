const { selectors } = require("@playwright/test");
const { testConfig } = require("../TestData/webTestData/testData");


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
}

module.exports={webActions}
