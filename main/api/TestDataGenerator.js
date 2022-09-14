const { request } = require("playwright");
const { faker } = require('@faker-js/faker');
const fs=require("fs")

const { dataHandler } = require('../../Helpers/dataHandler');

class TestDataGenerator{

    async generateUserData(noOfUsers, generateInvalidData){
    
        let json = '';
        for (let i= 0; i <noOfUsers; i++) {
            let data = {
                "name": faker.lorem.sentence(),
                "email": await this.generateEmailData(generateInvalidData,false),
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
    
        const filePath = './testData/APITestData/LoginPage/LoginPageGeneratedData.json';
        var fs = require('fs');
        fs.writeFileSync(filePath, json, 'utf8',function (err, data) {
            if(err) console.log('error', err);
        });
       return filePath;
    }
    
    async generateEmailData(generateInvalidData,returnJson){
        let DataHandlertest = new dataHandler("EmailTest", "API");
        //let testDataHelper = new TestDataHelper();
        //const emailData = await testDataHelper.loadobject("../TestData/APITestData/LoginPage/EmailTestData.json");
     
        const email = (generateInvalidData) ? faker.helpers.arrayElement(await DataHandlertest.getdata().InvalidEmailAddress) : faker.internet.email()
        console.log("EMail Generation ->"+ email);
        if(returnJson)
        //console.log(returnJson)
            return {"email": email};
        else 
            return email;
    }
    }
module.exports={TestDataGenerator}