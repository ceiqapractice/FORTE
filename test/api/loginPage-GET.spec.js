const { test } = require('@playwright/test');
const { CRUDMethods } = require('../../main/api/CRUDMethods');
const {expect,assert} = require('chai');
const { CommonMethods } = require('../../main/api/CommonMethods');
const { dataHandler } = require('../../Helpers/dataHandler');




test('GET METHOD - Path Parameters -User Login with Token', async ({request}) => {

  let DataHandlertest = new dataHandler("LoginPage", "API");
  for (let i = 0; i < DataHandlertest.getdata().count; i++) {
  const repo_userLogin = DataHandlertest.getdata().accesstoken+DataHandlertest.getdata().auth.TOKEN

  const crudmethods = new CRUDMethods();
  const response = await crudmethods.doGet(request,DataHandlertest.getdata().baseURL + repo_userLogin)
  expect(await response).to.not.empty;
  expect(await response).to.be.ok
  console.log(await response.json());
  }
 
});

test('GET METHOD - Path Parameters -Getting User data from List', async ({request}) => {
  
  
  let DataHandlertest = new dataHandler("LoginPage", "API");
  for (let i = 0; i < DataHandlertest.getdata().count; i++) {
  const repo_userLogin = DataHandlertest.getdata().accesstoken+DataHandlertest.getdata().auth.TOKEN

  const crudmethods = new CRUDMethods();
  const response = await crudmethods.doGet(request,DataHandlertest.getdata().getUserListURL)
  expect(await response).to.not.empty;
  expect(await response).to.be.ok
  console.log(await response.json());
  }

});

test('GET METHOD -path Parameters - Get User by using ID', async ({request}) => {
  
  let DataHandlertest = new dataHandler("LoginPage", "API");
  for (let i = 0; i < DataHandlertest.getdata().count; i++) {
  const repo_userLogin = DataHandlertest.getdata().pathuser+DataHandlertest.getdata().accesstoken+DataHandlertest.getdata().auth.TOKEN

  const crudmethods = new CRUDMethods();
  const commonmethods = new CommonMethods();
  const response = await crudmethods.doGet(request,DataHandlertest.getdata().baseURL + repo_userLogin) 
  expect(await response).to.not.empty;
  console.log(await response.json());

  const ID = await commonmethods.extract_ID(await response.json());
  console.log(ID);
 // expect(3396).to.be.equals(DataHandlertest.getdata().pathuser); 
  expect(await response).to.be.ok
  }
});  
