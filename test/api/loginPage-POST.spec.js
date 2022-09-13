const { test } = require('@playwright/test');
const { CRUDMethods } = require('../../main/api/CRUDMethods');
const {expect,assert} = require('chai');
const { CommonMethods } = require('../../main/api/CommonMethods');
const { dataHandler } = require('../../Helpers/dataHandler');
const {TestDataGenerator} = require('../../main/api/TestDataGenerator');
const {testDataHelperClass} = require("../../Helpers/testDataHelperClass");


test('POST METHOD -path Parameters - Posting User name & email data', async ({
  request
}) => {

  let DataHandlertest = new dataHandler("LoginPage", "API");

  const noOfUsers = await DataHandlertest.getdata().count;
  const testDataGenerator = new TestDataGenerator();
  const testDataFile = await testDataGenerator.generateUserData(noOfUsers, true);

  let testDataHelper = new testDataHelperClass();
  const testData = await testDataHelper.loadobject(testDataFile);

  for (let i = 0; i < DataHandlertest.getdata().count; i++) {
    const repo_userLogin = DataHandlertest.getdata().accesstoken + DataHandlertest.getdata().auth.TOKEN
    const crudmethods = new CRUDMethods();
    const commonmethods = new CommonMethods();
    const response = await crudmethods.doPost(request, DataHandlertest.getdata().baseURL + repo_userLogin, testData[i])
    expect(await response).to.not.empty;
    const respJson = await commonmethods.get_responsepayload(response)
    await commonmethods.getResponseHeaderValue(response, 'content-type')
    // expect(await respJson.data).to.deep.include(data)
    //expect(await respJson.data.gender).to.be.eq(data.gender)
    expect(await response).to.be.ok
    console.log(respJson)
  }

});
