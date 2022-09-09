const { test } = require('@playwright/test');
const { CRUDMethods } = require('../../main/api/CRUDMethods');
const {expect,assert} = require('chai');
const { CommonMethods } = require('../../main/api/CommonMethods');
const { DataHandler } = require('../../Helpers/Datahandler');
const {TestDataGenerator} = require('../../main/api/TestDataGenerator');




test('PUT METHOD -path Parameters - Updating User name & email data', async ({request}) => {
 
  let DataHandlertest = new DataHandler("LoginPage", "API");
  for (let i = 0; i < DataHandlertest.getdata().count; i++) {
  const repo_userLogin = DataHandlertest.getdata().pathuser+DataHandlertest.getdata().accesstoken+DataHandlertest.getdata().auth.TOKEN
  
  const data = {
    
    "status":"active"
  }

  const crudmethods = new CRUDMethods();
  const commonmethods = new CommonMethods();
  const response = await crudmethods.doPut(request,DataHandlertest.getdata().baseURL + repo_userLogin,data) 
  expect(await response).to.not.empty;
  await commonmethods.getResponseHeaderValue(response, 'content-type') 
  await commonmethods.check_responsebody(response)
  expect(await response).to.be.ok
  
  }
});  


test.only('PUT METHOD -path Parameters - Updating User name & email data - Single User', async ({request}) => {
 
  let DataHandlertest = new DataHandler("LoginPage", "API");

  const testDataGenerator = new TestDataGenerator();
  const testData = await testDataGenerator.generateEmailData(true,true);
  const repo_userLogin = DataHandlertest.getdata().updateuser+DataHandlertest.getdata().accesstoken+DataHandlertest.getdata().auth.TOKEN
  
  const crudmethods = new CRUDMethods();
  const commonmethods = new CommonMethods();
  const response = await crudmethods.doPut(request,DataHandlertest.getdata().baseURL + repo_userLogin,testData) 
  expect(await response).to.not.empty;
  await commonmethods.getResponseHeaderValue(response, 'content-type') 
  await commonmethods.check_responsebody(response)
  expect(await response).to.be.ok
  
  
});  





 



 






