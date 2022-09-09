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

## About Forte
PLAYWRIGHT - JAVASCRIPT 

playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API.
Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.
It allows testing Chromium, Firefox and WebKit with a single API. 

FORTE - FULLY OPTIMIZED RATIONAL TEST ENGINE

 * FORTE is a framework for Web and API Automation Testing. 
 * FORTE- Playwright has its own test runner for end-to-end tests, we call it Playwright Test. 
 * By using JSON as Test Data Management by automaticlly picking up the data's by mentioning the class name from the Action Classes.
 * Scraping the DOM to get the Locators FORTE Engine will find the Elements according to the given data &  it will stored in a JSON file for DATA PROCESSING 
 * There is a Logicial Identifier for the Locators from the DOM, it will Picik-up the available 1ocators from the DOM 
 * Common Functions are available for the entire functional flow Activity 
 * As, FORTE supports for API Testing the CRUD Methods for the REST API's & Validating the BODY
 * For Generating the Test Data for the CRUD Operations the Common Functions will be supported with FAKER ( RANDOM TEST DATA) 
 

## FORTE Start


## Execution

## Reports

After every test execution allure results folder will be generated in project root folder then run the below commands to generate the allure report

    npx allure generate ./allure-results --clean

Run the below command to open the allure report in the browser

    npx allure open ./allure-report

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

