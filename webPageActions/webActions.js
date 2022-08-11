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

    async enterText(locator, text)
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
    
    async pageRefresh()
    {
        await this.page.reload();
    }
    
    async pageBack()
    {
        await this.page.goBack()
    }

    async pageForward()
    {
        await this.page.goForward()
    }
   
    async checkBoxCheck(locator)
    {
        await this.page.locator(locator).check();
    }

    async checkBoxCheckIsChecked(locator)
    {
        await this.page.locator(locator).isChecked().toBeTruthy()
    }

    async checkBoxCheckUnChecked(locator)
    {
        await this.page.locator(locator).uncheck()
    }


}

module.exports={webActions}
