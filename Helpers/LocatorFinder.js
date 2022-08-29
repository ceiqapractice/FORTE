const { testConfiguration } = require("../TestData/webTestData/Config");
const { TestDataHelper } = require("../Helpers/TestDataHelperclass");
const fs=require("fs")
const path=require("path")
var webTestdatapath="./TestData/webTestData/"
let webpageLocatorsBasePath = webTestdatapath +  "webPageLocators/";

class LocatorFinder{

    constructor(fileName,page){
        this.page = page;
        let testDataHelper = new TestDataHelper();
        let filePath = webpageLocatorsBasePath + fileName+ ".json";
        let elements = testDataHelper.loadobject(filePath);
        let returnObject = {};
        for (var key in elements) {
            var allLocators = elements[key];
            //console.log(allLocators);
            let availableLocator = this.getavailableLocator(allLocators);
            returnObject[key] = availableLocator;
        }
        this.locators = returnObject;
    }

    async getavailableLocator(allLocators) {
        
        let availableLocator;
        if (allLocators.str instanceof Array) {
            for (let i = 0; i < allLocators.length; i++) {
                const count = await this.page.locator(allLocators[i]).count();
                // console.log(count)
                if (count > 0) {
                    availableLocator = allLocators[i];
                    break;
                }
            }
        } else if (await this.page.locator(allLocators).count() > 0){
            //assuming that the locator is a string; not another json object
            availableLocator = allLocators;
        }
        return availableLocator;
    }


}
module.exports={LocatorFinder}