const { test, expect } = require('@playwright/test');
const HomePage = require('./HomePage');
const SearchResultsPage = require('./SearchResultsPage');
const ApiUtils = require('./apiUtils');

test('TC-1 - User can successfully navigate to the site', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToSite();
});

test('TC-2 - User can successfully search for keywords', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToSite();

  await page.click('#open-global-search');
  const searchInputSelector = '#global-site-search';
  await page.waitForSelector(searchInputSelector);
  await page.fill('#site-search-keyword', 'Innovation');
  await page.press('#site-search-keyword', 'Enter');

  // TC-2 extra: Wait for the search results to appear
  const searchResultsSelector = '.search-results'; 
  await page.waitForSelector(searchResultsSelector);

  // TC-2 extra: Verify that the search results are displayed
  const searchResults = await page.$$(searchResultsSelector);
  expect(searchResults.length).toBeGreaterThan(0, 'Search results are displayed.');
  
});

test('TC-3 - User can successfully open returned search results', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToSite();

  // search for keywords'
  await page.click('#open-global-search');
  const searchInputSelector = '#global-site-search';
  await page.waitForSelector(searchInputSelector);
  await page.fill('#site-search-keyword', 'Innovation');
  await page.press('#site-search-keyword', 'Enter');

  
  /// TC-3 - User can successfully open returned search results
  const searchResultsPage = new SearchResultsPage(page);
  await searchResultsPage.openSearchResult(0);
  await searchResultsPage.verifySearchResultOpened();
  await searchResultsPage.getFirstSearchResultTitle();
  const firstResultTitle = await searchResultsPage.getFirstSearchResultTitle();

  /// TC-3 Extra: Return the first search result title
  console.log('First search result title:', firstResultTitle); 

});

test('TC-4 - Search using public REST API', async () => {
    const apiUtils = new ApiUtils();
    const userId = 1;

    try {
        const posts = await apiUtils.getPostsByUser(userId);

        expect(posts.length).toBeGreaterThan(0, 'Expected at least one result');

        console.log('API response:', posts);
    } catch (error) {
        console.error('API test failed:', error.message);
        throw error;
    }
});
