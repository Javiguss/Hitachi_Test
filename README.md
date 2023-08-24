# Hitachi_Test
Test for QA Engineer position
This Repo contains a test framework based on Playwright, Chai and RestAPI, written in JavaScript.

Creating a test file "testSuite.spec.js" where the following test cases are listed according to the Acceptance Criteria for the test adding positive and negative tests in the scenarios

TC-1 - User can successfully navigate to the site

TC-2 - User can successfully search for keywords

TC-3 - User can successfully open returned search results

TC-4 - Search using public REST API

Additionally all dependencies have been added in the "package-lock.json" file.

Note: for TC-4:Plus(optional), since a specific API for these tests was not specified in the criteria, it was decided to select an OpenAPI in order to demonstrate knowledge of RestAPI management and its use at the test level .

After running the project, these are the results, shown as a report due to an additional functionality that playwrite has for these cases:

To run : npx playwright test testSuite.spec.js;
To show the reports: npx playwright show-report
