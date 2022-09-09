const { TestDataHelper } = require("./testDataHelperclass");
var logindata={};
class DataHandler{ 
    constructor(moduletype,testType){
    let testdatahelper=new TestDataHelper();
    console.log("mod -> " + moduletype);
    console.log("testtype-> " + testType);
    const dataset=testdatahelper.jsonreader(moduletype,testType);
    if(Object.keys(dataset).length > 0)
    {    
    let array=Object.keys(dataset);
    for (let index = 0; index < array.length; index++) {
        let fieldname=array[index];
        let value=dataset[fieldname];
        logindata[fieldname]=value;
    }
    }
    else{
        console.log("Data files are not present for this " +moduletype+ " module");
    }
    }

getdata(){
    return logindata;
}
}

module.exports={DataHandler}

