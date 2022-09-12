<<<<<<< HEAD
const { testDataHelperClass } = require("./testDataHelperClass"); 
var logindata={};
class dataHandler{ 
=======
const { testDataHelperClass } = require("./testDataHelperClass"); logindata={};
class DataHandler{ 
>>>>>>> 57f2d69ece3be3714b4fccbe50195e4064b09e96
    constructor(moduletype,testType){
    let testdatahelper=new testDataHelperClass();
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

module.exports={dataHandler}

