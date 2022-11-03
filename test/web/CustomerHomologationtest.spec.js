const {test, expect}=require("@playwright/test");
const { log } = require("util");
const { webActions } = require("../../main/web/commonFunctions/webActions");
const { LoginPage } = require("../../main/web/pageFunctions/LoginPage");
const {AppFunctions} = require("../../main/web/commonFunctions/AppFunctions")
const {locatorFinder} = require("../../Helpers/locatorFinder")
const {CustomerHomologation}= require("../../main/web/pageFunctions/CustomerHomolgation");
const { dataHandler } = require("../../Helpers/dataHandler");

let topframe;
let webActionObj;
let page;

const DataHandlertest=new dataHandler("CustomerCreation","web");
const CustomerHomologationData=new dataHandler("CustomerHomologation","web");

test.beforeAll(async({browser}) => {  
    page=await browser.newPage();
    webActionObj =new webActions(page);
    const loginpage=new LoginPage(page);
    await webActionObj.navigateToURL();
    await loginpage.LoginToApps();
    topframe =page.frameLocator("//iframe[@title='Main Content']");
});
let CustomerNo;
test("@homologation Test 1 -> Creating Customer", async ({})=>
  {
    const AppFunctionsObj= new AppFunctions(topframe);
    await AppFunctionsObj.NavigatetoPage("Customers");
    let LocatorFinderObj= new locatorFinder("CommonPage",topframe);
    await AppFunctionsObj.ClickElement(await LocatorFinderObj.getelement("new"));
    await AppFunctionsObj.ClickElement(await LocatorFinderObj.getelement("ok"));
    await AppFunctionsObj.EnterText(await AppFunctionsObj.getinputfield("No."),DataHandlertest.logindata.CustomerNo);
    await AppFunctionsObj.ClickElement(await AppFunctionsObj.getinputfield("Name"));
    await webActionObj.sleep(5000);
    await AppFunctionsObj.ClickElement(await LocatorFinderObj.getelement("Yes"));
    await webActionObj.sleep(5000);
    await AppFunctionsObj.EnterText(await AppFunctionsObj.getinputfield("Name"),DataHandlertest.logindata.CustomerName);
    await AppFunctionsObj.EnterText(await AppFunctionsObj.getinputfield("Address"),DataHandlertest.logindata.CustomerAddress);
    await AppFunctionsObj.EnterText(await AppFunctionsObj.getinputfield("Phone No."),DataHandlertest.logindata.CustomerPhone);
    await AppFunctionsObj.EnterText(await AppFunctionsObj.getinputfield("Email"),DataHandlertest.logindata.CustomerEmail);
    await AppFunctionsObj.EnterText(await AppFunctionsObj.getinputfield("State"),DataHandlertest.logindata.CustomerState);
    CustomerNo= await topframe.locator(await AppFunctionsObj.getinputfield('No.')).inputValue();
    await webActionObj.sleep(5000);
    await AppFunctionsObj.ClickElement(await LocatorFinderObj.getelement("Back"))
    let commonpagelocator=new locatorFinder("CommonPage",topframe);
    await AppFunctionsObj.ClickElement(await commonpagelocator.getelement("CompanyLogo"));
}) 
  

test("@homologation Test 2 -> CustomerHomologation Wrong CustomerNo and Correct Item Code", async ()=>
{    
const AppFunctionsObj= new AppFunctions(topframe);
await AppFunctionsObj.NavigatetoPage("Customers");
await webActionObj.sleep(5000);
const CustomerHomologationObj=new CustomerHomologation(topframe);
await CustomerHomologationObj.NewCustomerHomologation();
let Homplogationpagelocators= new locatorFinder("CustomerHomologationPage",topframe);
await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationNo"),CustomerHomologationData.logindata.WrongCustomerNo);
await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationItemCategoryCode"),CustomerHomologationData.logindata.CorrectItemCategoryCode);
await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationExpirationDate"),CustomerHomologationData.logindata.ExpiryDate); 
console.log(await Homplogationpagelocators.getelement("CustomerNoErrorMsg"))
await webActionObj.sleep(5000);
await expect(await topframe.locator(await Homplogationpagelocators.getelement("CustomerNoErrorMsg")).count()).toEqual(1);
await AppFunctionsObj.ClickElement(await Homplogationpagelocators.getelement("HomologationBack"));
await webActionObj.sleep(5000);
if(await topframe.locator(await Homplogationpagelocators.getelement("Yes")).count()==1){
  await AppFunctionsObj.ClickElement(await Homplogationpagelocators.getelement("Yes"));
}
let commonpagelocator=new locatorFinder("CommonPage",topframe);
await AppFunctionsObj.ClickElement(await commonpagelocator.getelement("CompanyLogo"));
})

test("@homologation Test 3 -> CustomerHomologation Correct CustomerNo and Correct Item Code", async ()=>
  {     
  const AppFunctionsObj= new AppFunctions(topframe);
  await AppFunctionsObj.NavigatetoPage("Customers");
  await webActionObj.sleep(5000);
  const CustomerHomologationObj=new CustomerHomologation(topframe);
  await CustomerHomologationObj.NewCustomerHomologation();
  let Homplogationpagelocators= new locatorFinder("CustomerHomologationPage",topframe);
  await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationNo"),DataHandlertest.logindata.CustomerNo);
  await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationItemCategoryCode"),CustomerHomologationData.logindata.CorrectItemCategoryCode);
  await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationExpirationDate"),CustomerHomologationData.logindata.ExpiryDate); 
  await webActionObj.sleep(7000);
  await expect(await topframe.locator(await Homplogationpagelocators.getelement("OverallErrorMessage")).count()).toEqual(0);
  await AppFunctionsObj.ClickElement(await Homplogationpagelocators.getelement("HomologationBack"));
  await webActionObj.sleep(5000);
  if(await topframe.locator(await Homplogationpagelocators.getelement("Yes")).count()==1){
    await AppFunctionsObj.ClickElement(await Homplogationpagelocators.getelement("Yes"));
  }
  let commonpagelocator=new locatorFinder("CommonPage",topframe);
  await AppFunctionsObj.ClickElement(await commonpagelocator.getelement("CompanyLogo"));
})

test("@homologation Test 4 -> CustomerHomologation Correct CustomerNo and Wrong Item Code", async ()=>
{     
const AppFunctionsObj= new AppFunctions(topframe);
await AppFunctionsObj.NavigatetoPage("Customers");
await webActionObj.sleep(5000);
const CustomerHomologationObj=new CustomerHomologation(topframe);
await CustomerHomologationObj.NewCustomerHomologation();
let Homplogationpagelocators= new locatorFinder("CustomerHomologationPage",topframe);
await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationNo"),DataHandlertest.logindata.CustomerNo);
await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationItemCategoryCode"),CustomerHomologationData.logindata.WrongItemCategoryCode);
await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationExpirationDate"),CustomerHomologationData.logindata.ExpiryDate); 
console.log(await Homplogationpagelocators.getelement("ItemCategoryCodeErrorMsg"));
await webActionObj.sleep(5000);
await expect(await topframe.locator(await Homplogationpagelocators.getelement("ItemCategoryCodeErrorMsg")).count()).toEqual(1);
await AppFunctionsObj.ClickElement(await Homplogationpagelocators.getelement("HomologationBack"));
await webActionObj.sleep(5000);
if(await topframe.locator(await Homplogationpagelocators.getelement("Yes")).count()==1){
  await AppFunctionsObj.ClickElement(await Homplogationpagelocators.getelement("Yes"));
}
let commonpagelocator=new locatorFinder("CommonPage",topframe);
await AppFunctionsObj.ClickElement(await commonpagelocator.getelement("CompanyLogo"));

})

test("@homologation Test 5 -> CustomerHomologation Wrong CustomerNo and Wrong Item Code", async ()=>
{     
const AppFunctionsObj= new AppFunctions(topframe);
await AppFunctionsObj.NavigatetoPage("Customers");
await webActionObj.sleep(5000);
const CustomerHomologationObj=new CustomerHomologation(topframe);
await CustomerHomologationObj.NewCustomerHomologation();
let Homplogationpagelocators= new locatorFinder("CustomerHomologationPage",topframe);
await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationNo"),CustomerHomologationData.logindata.WrongCustomerNo);
await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationItemCategoryCode"),CustomerHomologationData.logindata.WrongItemCategoryCode);
await AppFunctionsObj.EnterText(await Homplogationpagelocators.getelement("HomologationExpirationDate"),CustomerHomologationData.logindata.ExpiryDate); 
await webActionObj.sleep(5000);
await expect(await topframe.locator(await Homplogationpagelocators.getelement("CustomerNoErrorMsg")).count()).toEqual(1);
await expect(await topframe.locator(await Homplogationpagelocators.getelement("ItemCategoryCodeErrorMsg")).count()).toEqual(1);
await AppFunctionsObj.ClickElement(await Homplogationpagelocators.getelement("HomologationBack"));
await webActionObj.sleep(5000);
if(await topframe.locator(await Homplogationpagelocators.getelement("Yes")).count()==1){
  await AppFunctionsObj.ClickElement(await Homplogationpagelocators.getelement("Yes"));
}
let commonpagelocator=new locatorFinder("CommonPage",topframe);
await AppFunctionsObj.ClickElement(await commonpagelocator.getelement("CompanyLogo"));
})
