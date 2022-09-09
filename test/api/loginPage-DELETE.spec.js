const { test } = require('@playwright/test');
const { CRUDMethods } = require('../../main/api/CRUDMethods');
const {expect,assert} = require('chai');
const { CommonMethods } = require('../../main/api/CommonMethods');
const { DataHandler } = require('../../Helpers/Datahandler');



test('DELETE METHOD -path Parameters - Deleting User', async ({request}) => {
  const data = {
    
    "status":"active"
  }

  let DataHandlertest = new DataHandler("LoginPage", "API");
  const repo_userLogin = DataHandlertest.getdata().pathuser+DataHandlertest.getdata().accesstoken+DataHandlertest.getdata().auth.TOKEN
  const crudmethods = new CRUDMethods();
  const commonmethods = new CommonMethods();
  const response = await crudmethods.doDelete(request,DataHandlertest.getdata().baseURL + repo_userLogin,data) 
  expect(await response).to.not.empty;
  await commonmethods.getResponseHeaderValue(response, 'content-type') 
  const respJson =  await commonmethods.get_responsepayload(response)
  expect(await respJson.data).to.be.null
  expect(await response).to.be.ok
  

});  





 






 






