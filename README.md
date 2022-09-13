<!-- TABLE OF CONTENTS -->
<h2>
    <details open="open">
        <summary class="normal">Table of Contents</summary>
        <h5>
          <ol>
            <li>
              <a href="#about-forte">About FORTE</a>
            </li>
            <li>
              <a href="#forte-start">FORTE Start</a>
            </li>
            <li><a href="#execution">Execution</a></li>
			   <ul>
			   <li>
			   <a href="web">Web</a>
			   </li>
			   <li>
			   <a href="api">API</a>
			   </li>
			   </ul>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#docker">Docker</a></li>
          </ol>
        </h5>    
    </details>
</h2>

<!-- ABOUT THE PROJECT -->

## About FORTE
PLAYWRIGHT - JAVASCRIPT 

Playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API.
Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.
It allows testing Chromium, Firefox and WebKit with a single API. 

<h4>FORTE - FULLY OPTIMIZED RATIONAL TEST ENGINE</h4>

 * FORTE is designed for Web Application and REST API Automation Testing. 
 * FORTE - Playwright has its own test runner for end-to-end tests, we call it Playwright Test. 
 * By using JSON as Test Data Management for picking up the data's by mentioning the class name from the Test Class.
 * Web Scraping - FORTE Engine will find the Web Elements according to the given URL's & it will stored in a JSON file for DATA PROCESSING 
 * Logicial Identifier for the Locators matching inside the DOM, it will locate & works on the available 1ocators   
 * Common Functions are available for the entire functional flow Activity 
 * As, FORTE supports for API Testing the CRUD Methods for the REST API's & Validating the BODY
 * For Generating the Test Data for the CRUD Operations the Common Functions will be supported with FAKER ( RANDOM TEST DATA)
 

## FORTE Start

	INSTALLATION

		The easiest way to get started with FORTE- Playwright Test is to run the init command.
		# Run from your project's root directory
		npm init playwright@latest

		# Or create a new project
		npm init playwright@latest new-project
				
		This will create a Configuration file, optionally add examples, a GitHub Action workflow and a first test example.spec.js. 
		You can now jump directly to writing assertions section.
		
		Manually Adding Dependency 
		Add dependency and install browsers.
		npm i -D @playwright/test

		# install supported browsers
		npx playwright install

## Execution
## API 
  <h4>FORTE - Application Programming Interface </h4>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Configuration**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		
 * From the TestData Folder the API Modules will be decalred for eg., -> TestData->LoginPage->LoginPage.json
	 Inside the JSON file the "BASEURL","PATH PARAMETER","QUERY PARAMETER","TOKEN",etc .. will be configured 
		 
		 Config :
	      {
          "baseURL": "https://gorest.co.in/public-api/users/",
          "getUserListURL": "https://gorest.co.in/public/v2/users",
          "accesstoken": "?access-token=",
          "auth": {
            "TOKEN": "c4f17a80e91c5a9368535ff65f17bad328fc3191b4892dae81a60340bec89e5c"
            },
          "pathuser": "3396",
          "queryParameter": {
          "parameterURL": "&page=4&gender=Female&status=Active"
          },
          "count": 5,
          "updateuser": "2599"
        }
## TESTDATA 

* It will Pick the test values from the folder TestData 
* By Mentioning the Module Type and Test Type in the Data Handler it will pick up either WEB or API execution 
* Need to mention in every tests according to the module and test type 

test('API Testing', async ({request}) => {

  let DataHandlertest = new DataHandler("LoginPage", "API");
  // function 
  });
  or 
  
test('Web Testing', async ({page}) => {

  let DataHandlertest = new DataHandler("LoginPage", "WEB");
  // function 
  });

  The data will be picked from this folder structure for  eg.,-> APITestData -> LoginPage -> LoginPage.json.
  Then the Array of Data or string of data  will be retireved


## RUN 
# Single Test 
		 * By using the below command from the folder level of execution we can run through command line 
				-> npx playwright test filename with extension

				for eg.,npx  playwright test .\loginPage-POST.spec.js 
# Multiple Test : 
		 * The tags will be mentioned according to the type of testing in the package.json file. 
     The  same tags will declared in the test function 
      
      test('GET METHOD - Path Parameters -User Login with Token @smoke', async ({request}) => {
        // function
      }
		 Inside the Package.json file -> 
		 "scripts": {
			"fulltest" : "npx playwright test",
			"smoketest": "npx playwright  test --grep @smoke"
			}	
      In command line run with npx playwright test --grep @smoke

## Reports

After every test execution allure results folder will be generated in project root folder then run the below commands to generate the allure report

    npx allure generate ./allure-results --clean

Run the below command to open the allure report in the browser

    npx allure open ./allure-report

 - Overall Report
 ![Overall Report](https://user-images.githubusercontent.com/110914539/188542509-093f92b0-468b-4236-9d38-6e2d9fe63546.JPG)

 - Detailed Report
 ![Detailed Report](https://user-images.githubusercontent.com/110914539/188542617-c6fbf2a8-1ab2-459f-a784-621fd38c56fd.JPG)

 - Failed Report
 ![Failed Report](https://user-images.githubusercontent.com/110914539/188542809-b95d7289-b44e-4321-9485-3ee82683c5d9.JPG)


## Docker
**Local Execution**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Prerequisites**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Installation<br/>
                                                                                                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      Clone the repo using below URL
                                                                                                                  
    https://github.com/akshayp7/playwright-typescipt-playwright-test.git
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      Navigate to folder and install npm packages using:<br/>
 

    npm install

      

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Install Docker app<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Run the Docker app<br/>
     For running the tests on Docker container we have to first build a image from Dockerfile and then run the image to spawn container on which the test scripts will run.
     

  For building image from Docker run below command, where path to Dockerfile must be provided after --file tag and name of the image must be provided after -t tag.

    docker build . --file Dockerfile.focal -t crate

  Once the image is generated we can run the image to spawn container and run scrips using below command. In Below Command "playContainer" is name of the container created using "crate" image.

    docker run -it -d --name playContainer crate /bin/bash

 Execute the test script in "playContainer" , run the below command

    docker exec -it playContainer /bin/bash

Now docker container is ready, Run the test scripts using below commands,

    npx playwright test


**CI/CD Execution**<br/>

&nbsp; &nbsp;**FORTE** integrated with Github repository , after every commit to github master the **github action** will be triggered ,<br/>
&nbsp; &nbsp; &nbsp;**GitHub Action Workflow:**<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 1.Code Check out<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 2.Execute the docker file<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.1.Pull Microsoft playwright image<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.2.Create new directory<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.3. Copy and paste source code into new directory<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.4.Install npm and playwright<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.5.Run test cases<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.6.Generate Allure result<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 3.Copy allure results from docker container<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 4. Publish Allure results as artifacts <br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 5. Publish Allure results to Github pages<br/>

 ![Flow](https://user-images.githubusercontent.com/110914539/188542865-f601154e-652d-4ced-9a8b-b790216658bb.JPG)