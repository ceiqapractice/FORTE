// import { xPath } from "playwright-dompath";

const { test, selectors } = require("@playwright/test");
const { xPath } = require("playwright-dompath")
const domToPlaywright = require('dom-to-playwright').default;


test("@allelements", async ({ page }) => {
   //await page.goto("https://parabank.parasoft.com/parabank/index.htm");
   //await page.goto("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
   await page.goto("https://www.udemy.com/");
  
   await page.waitForSelector('*')
//   const inputs = await page.$$("input");
//   console.log(inputs.length);
//   for(let input of inputs) {
//     let res = await xPath(input);
//     console.log(res);
//   }
//   // inputs.forEach(input => xPath(input).then(res => console.log(res)))
// })
await page.waitForSelector("*",{timeout:15000})
const allelements=await page.$$("*");

const allelementsInnerHTML=await Promise.all(allelements.map(async(repo,i)=>{
  return await repo.innerHTML();

}))
var ele=[];
let canCollect=false;
let countInput=0;
for(var elem of allelementsInnerHTML)
{
  if(elem.startsWith("<" + "input"))
  {
    canCollect=true;
    countInput=countInput+1
  }
  if(canCollect)
  {
    if (elem.startsWith("<" + "input") || elem.endsWith("</" + "input"))
    ele.push(elem)
  }
  if (elem.startsWith("</" + "input")) {
    canCollect = false ;
}
}
console.log(countInput)
console.log(ele);
console.log(ele.length);
})