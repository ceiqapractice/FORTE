const { TestDataHelper } = require("./testDataHelperclass");
const fs=require("fs")
const path=require("path")
//var webTestdatapath="./webPageObjects/"
//let webpageLocatorsBasePath = webTestdatapath +  "webPageLocators/";
let webpageLocatorsBasePath = "./locators/";

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
        if (allLocators instanceof Array) {
            for (let i = 0; i < allLocators.length; i++) {
                const count = await this.page.locator(allLocators[i]).count();
                // console.log(count)
                if (count > 0) {
                    availableLocator = allLocators[i];
                    break;
                }
            }
        } else {
            let loc = await this.page.locator(allLocators);
            if (loc !== 'undefined'){
                //assuming that the locator is a string; not another json object
                availableLocator = allLocators;
            }   
        }
        return availableLocator;
    }
}
module.exports={LocatorFinder}