#### JHCodeExcercise

### Cypress E2E tests for JH Code Excerice
This project includes 3 E2E tests for ecommorce website Amzon.com

### Introduction to Cypress
Cypress framework is a JavaScript-based end-to-end testing framework built on Mocha – a feature-rich JavaScript test framework running on and in the browser, making asynchronous testing simple and convenient. Cypress and Javascript is used for this project.

### Test Design Approach
Since these are E2E tests, all tests starts from amazon homepage and not considering only particular functionality on specific page. Because of time limit, this project includes all 3 tests for guest user. Page object model is used to construct all these tests.

### Test Setup
## Installations(Pre-reuisites)

Install node.js and cypress
1. Node.js
Step 1: Download Node.js Installer. In a web browser, navigate to https://nodejs.org/en/download/
Step 2: Install Node.js and NPM from Browser. Once the installer finishes downloading, launch it. ...
Step 3: Verify Installation.
2. Cypress
Using NPM
Step 1: To install Cypress using the npm (Node package manager) navigate to the project directory and execute the following command: npm init
Step 2: Once done, run the command below to install Cypress.
Step 3: Verify Installation.

## Run tests
1. To run all tests, open terminal in VS code(any IDE), excute following command
npx cypress run
2. To run all tests individually, open terminal in VS code(any IDE), excute following command
npx cypress open and then run each test

I have default settings for tests : default timeout set to 4000ms and retries: 1 in run mode. These tests can run on CI.
