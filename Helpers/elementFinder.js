const {test}=require("@playwright/test")
let testdatapath="./locators/"
const fs=require("fs")
const { testConfig } = require("../baseConfig")


    let att = {
        "a": [
            "id",
            "name",
            "class",
            "href",
            "normalize-space(descendant-or-self::text())"],
        "img": ["id", "class","name", "src", "alt"],
        "input": ["id", "class","name", "value", "src"],
        "button": [
                "id",
                "name",
                "value",
                "class",
                "normalize-space(descendant-or-self::text())",
            ],
    }

test('@FindElements',async({ page }) => {
    await page.goto(testConfig.elementFinderURL);
    let pagetitle=(await page.title()).toString().replace(/\s/g,"").replace(/[^a-zA-Z0-9]/g,''); 
    let elementsJson = {};
    for (let key in att){
        //loop through each tag in att and locate all the elements
        let attributes = att[key];
        let count = await page.locator(key).count();
        
        for (let i=0;i<count;i++){
            //loop through each of the found element locator to fetch required attributes
            const element = await page.locator(key).nth(i);

            //formulate keyvalue to use in json file
            //writing in the JSON label
            let textValue = await element.textContent();
            if(textValue == undefined || textValue == null || textValue == ''){
                //see if the textContent is empty then check allTextContents()
                textValue = await element.allTextContents();
            }

            if(textValue == undefined || textValue == null || textValue == ''){
                //next try name
                textValue = await element.getAttribute("name");
            }

            if(textValue == undefined || textValue == null || textValue == ''){
                //if none works, use key_count for now
                textValue = key+'_'+count
            }

            //santize textvalue to make it compatible with json key - removing all non-alphanumeric values with dash 
            textValue = textValue.replace(/\W+/g, '_')
            let keyvalue = pagetitle+'_'+textValue


            if(attributes instanceof Array){
                
                for(let attkey in attributes){
                    //loop through each of the given attributes and identify the locator for each.
                    let attribute = attributes[attkey];
                    let value = await element.getAttribute(attribute);
                    if(value != 'undefined' && value != null && value != '' ){
                        let selector = '';
                        if(attribute == 'id'){
                            selector = '#'+value
                        }
                        else if (attribute == 'class'){
                            selector = '.'+value
                        }
                        else{
                            selector = '//'+key+'[@'+ attribute+ '=\''+value+'\']'
                        }
                    
                        //once the selector is formulated, push it to the json
                        if(elementsJson[keyvalue] != undefined){
                            elementsJson[keyvalue].push(selector);
                        }
                        else{
                            elementsJson[keyvalue] = [selector];
                        }
                    }
                }
            }
            else{
                
                let value = await element.getAttribute(attributes);
                if(value != 'undefined' && value != null && value != '' ){
                    //Handling for string
                    let selector = '';
                        if(attributes == 'id'){
                            selector = '#'+value
                        }
                        else if (attributes == 'class'){
                            selector = '.'+value
                        }
                        else{
                            selector = '//'+key+'[@'+ attributes+ '=\''+value+'\']'
                        }
                    
                        //once the selector is formulated, push it to the json
                        if(elementsJson[keyvalue] != undefined){
                            elementsJson[keyvalue].push(selector);
                        }
                        else{
                            elementsJson[keyvalue] = [selector];
                        }
                    
                }
            }
        }

    }
//    let jsonString = JSON.stringify(elementsJson);
    let filepath=testdatapath + pagetitle +'_page_' + Date.now()+'.json';
    fs.writeFile(filepath,JSON.stringify(elementsJson,null,1),err =>{
        if(err){
            console.log(err)
        }
        else{
            console.log("File Written Successfully !")
        }
    })
})