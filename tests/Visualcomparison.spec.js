const {test,expect} = require('@playwright/test');
const { testConfig } = require("../testData/testData");


let links=[];
let baseURL=testConfig.baseURL;

async function comparepage(filepath,page){
    try{
        await expect(await page.screenshot()).toMatchSnapshot([filepath]);
    }
    catch(err)
    {
        console.log(err);
    }}

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

test("@visual",async ({ page }) => {  
    const  link = await import("linkinator");
    const results = await link.check({
      path: baseURL,
      linksToSkip:testConfig.linksToSkip
       });
await results
console.log(results.links)
  let array=results.links
  for(let i=0;i<array.length;i++){  
  let jsonobj=array[i];
  if(jsonobj.state=="OK" && jsonobj.status==200){
    console.log("pushing the url : " +jsonobj.url)
    links.push(jsonobj.url)
  }  
  }
  console.log(links)
  console.log(links.length)
      let uniqueurls=[...new Set(links)]
      console.log(uniqueurls);
      console.log("after promise");
      let Screenshotpath2="VisualBaseScreenshots/";
      let length=baseURL.length
      try{
      for(let i=0 ;i<uniqueurls.length;i++){
      let str=uniqueurls[i];
      console.log(str);
    let filename=str.substring(length).replace(/[^a-zA-Z0-9]/g,'');
    if(filename=="")
    {
    filename=str.substring(8).replace(/[^a-zA-Z0-9]/g,'');  
    }
      console.log("Filename is :" +filename)
      let filepath2=Screenshotpath2+filename+".png";  
      console.log("Filepath is : " +filepath2) 
      await page.goto(str);
      await page.waitForLoadState('networkidle');
      await sleep(5000);
      await page.waitForLoadState('domcontentloaded');
      await comparepage(filepath2,page); 
    } } 
    catch(err){
        console.log(err);
    }   
  });


