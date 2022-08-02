const { test } = require('@playwright/test');
const { CRUDMethods } = require('../APIActions/CRUDMethods');
const {expect,assert} = require('chai');
const { CommonMethods } = require('../APIActions/CommonMethods');
const { DataHandler } = require('../TestData/Datahandler');
const { faker } = require('@faker-js/faker');
const datahandler = new DataHandler("testdata");



test('PUT METHOD -path Parameters - Updating User name & email data', async ({request}) => {
  const data = {
    
    "status":"active"
  }

  const repo_userLogin = datahandler.getdata().pathuser+datahandler.getdata().accesstoken+datahandler.getdata().auth.TOKEN
  const crudmethods = new CRUDMethods();
  const commonmethods = new CommonMethods();
  const response = await crudmethods.doPut(request,datahandler.getdata().baseURL + repo_userLogin,data) 
  expect(await response).to.not.empty;
  await commonmethods.getResponseHeaderValue(response, 'content-type') 
  await commonmethods.check_responsebody(response)
  expect(await response).to.be.ok
  

});  





 






