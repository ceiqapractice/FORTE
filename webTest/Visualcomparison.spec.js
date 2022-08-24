const fs =require("fs");
const path=require("path")
const {test,expect} = require('@playwright/test');



let links=[];
//const foldertobetested="08102022";
//let baseURL="https://www.ceiamerica.com/"

async function comparepage(filepath,page){
    try{
        await expect(await page.screenshot({fullPage:true})).toMatchSnapshot([filepath]);
    }
    catch(err){
      console.log(err);
    }}

test('Visual comparison of all pages',async ({ page }) => {  
    const link = await import("linkinator");
    const results = await link.check({
      path: baseURL,
      //:["https://www.facebook.com","https://twitter.com","https://www.linkedin.com","https://www.ceiamerica.com/wp","https://share.hsforms.com/","https://js.hs-scripts.com/","https://fonts.googleapis.com/","https://www.googletagmanager.com/"]
    });
await results
  let array1=results.links
  for(let i=0;i<array1.length;i++){  
  let jsonobj=array1[i];
  if(jsonobj.state=="OK" && jsonobj.status==200  && !(jsonobj.url.endsWith(".png") || jsonobj.url.endsWith(".svg") )){
    links.push(jsonobj.url)
  }  
  }
  let uniqueurls=[...new Set(links)];
  let length1=baseURL.length;
  try{
      for(let i=0 ;i<uniqueurls.length;i++){
      let str=uniqueurls[i];          
      await page.goto(str);
      await page.waitForLoadState('networkidle');
      await page.waitForLoadState('domcontentloaded');
      let filename1=str.substring(length1).replace(/[^a-zA-Z0-9]/g,'');
      if(filename1=="")
      {
        filename1=str.substring(8).replace(/[^a-zA-Z0-9]/g,'');  
      }
      let filename2=filename1+"-win32.png";
      let screenshtplace="Visualcomparisonscreenshots/"+foldertobetested+"/"+filename2;
      let screenshotdest="tests/visualcomparison.spec.js-snapshots/"+filename2;
      if(fs.existsSync(path.join(process.cwd(),screenshtplace))){
        await fs.copyFileSync(screenshtplace,screenshotdest);
        await comparepage(filename1+".png",page);
      }
      else{        
      await page.screenshot({path:path.join(process.cwd(),screenshtplace),fullPage:true});
      }
    }}
  catch(err){
        console.log(err);
  }});


