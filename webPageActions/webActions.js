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

    async selectOptionByText(locator, option)
    {
        const dropdown=this.page.locator(locator);
        await dropdown.selectOption(option);
    }
    
    async selectOptionByIndex(locator, index)
    {
        const dropdown=this.page.locator(locator);
        await dropdown.selectOption(index);
    }

    

}

module.exports={webActions}
