// my-awesome-reporter.js
// @ts-check

const { error } = require("console");
const fs=require("fs")
const path=require("path");
const { threadId } = require("worker_threads");
let passedcount=0;
let failedcount=0;
let resultsobj={};
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class MyReporter {  
    onBegin(config, suite) {
      this.config = config;
    this.suite = suite;
      console.log(`Starting the run with ${suite.allTests().length} tests`);
    }
  
    onTestBegin(test) {
      console.log(`Starting test ${test.title}`);
    }
  
    onTestEnd(test, result) {
      console.log(`Finished test ${test.title}: ${result.status}`);
      if(result.status=="passed"){
        passedcount=passedcount+1
      }
      else if(result.status=="failed"){
        failedcount=failedcount+1
      }
      console.log("Passecount : "+passedcount)
      console.log("Failed count is :"+failedcount)
      resultsobj["Passedcount"]=passedcount
      resultsobj["Failedcount"]=failedcount
      const jsonstring=JSON.stringify(resultsobj)
      fs.writeFileSync("./result.json",jsonstring)
    }
  
onEnd(result) {
      console.log(`Finished the run: ${result.status}`);
      // let passedCount = 0;
      // let failedcount=0;
      // let filepath="./results.json"
      // let resultsobj={};
      // const projectSuites = this.suite.suites;
      // projectSuites.forEach((project) => {
      //   project.allTests().forEach((test) => {
      //     test.results.forEach((result) => {
      //       if(result.status=="passed"){
      //         passedCount = passedCount + 1;}
      //       else if(result.status=="failed"){
      //         failedcount=failedcount+1
      //       }            
      //       })})})
      // const Totalcount=passedCount+failedcount
      // resultsobj["Passedcount"]=passedCount
      // resultsobj["Failedcount"]=failedcount
      // resultsobj["Totalcount"]=Totalcount
      // const Passpercentage=passedCount/Totalcount*100
      // const Failpercentage=failedcount/Totalcount*100
      // resultsobj["Passpercentage"]=Passpercentage.toFixed(2)
      // resultsobj["Failpercentage"]=Failpercentage.toFixed(2)
      // const jsonstring=JSON.stringify(resultsobj)
      // console.log(passedCount)
      // fs.writeFileSync("./result.json",jsonstring)
      // const mailer = require("./mailer");
      // mailer.mailSend()
      // sleep(30000)
      // console.log("After 30 seconds")
    }
  }
  
  module.exports = MyReporter;