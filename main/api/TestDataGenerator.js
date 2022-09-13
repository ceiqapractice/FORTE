const { request } = require("playwright");
const { faker } = require('@faker-js/faker');
const fs=require("fs")

const { DataHandler } = require('../TestData/Datahandler');

class TestDataGenerator{

async generateUserData(noOfUsers, generateInvalidData){
    
    let json = '';
    for (let i= 0; i <noOfUsers; i++) {
        let data = {
            "name": faker.lorem.sentence(),
            "email": generateEmailData(generateInvalidData,false),
            "gender": faker.helpers.arrayElement(['Female', 'Male']),
            "status":faker.helpers.arrayElement(['active', 'inactive'])    
        }
        
        if(i==0)
            json += '[';
        
        if(i < noOfUsers-1 && noOfUsers > 1){
            json += JSON.stringify(data) + ',';
        } else {
            json += JSON.stringify(data) + ']';
        }
    }

    const filePath = '../TestData/APITestData/LoginPage/LoginPageGeneratedData.json';
    var fs = require('fs');
    fs.writeFileSync(filePath, json, 'utf8',function (err, data) {
        if(err) console.log('error', err);
    });
   return filePath;
}

async generateEmailData(generateInvalidData,returnJson){
    let DataHandlertest = new DataHandler("LoginPage", "API");
 
    const email = (generateInvalidData) ? faker.helpers.arrayElement([DataHandlertest.getdata().InvalidEmailAddress]) : faker.internet.email()
    if(returnJson)
    //console.log(returnJson)
        return {"email": email};
    else 
        return email;
}
}

module.exports={TestDataGenerator}