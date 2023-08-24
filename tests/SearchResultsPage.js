const { expect } = require('chai');

class SearchResultsPage {

    constructor(page) {
        this.page = page;
    }

    async verifySearchResultOpened() {
        await this.page.waitForSelector('.search-result-page-header');
        const headerElement = await this.page.$('.search-result-page-header');
        expect(headerElement).toBeTruthy('Search result page header is displayed.');
    }

    async verifySearchResultNotOpened() {
        const unexpectedElement = await this.page.$('.unexpected-element');
        expect(unexpectedElement).toBeFalsy('Unexpected element is not displayed.');
    }

    async openSearchResult(index) {
        try {
            const searchResults = await page.$$('.search-result'); 
            if (index < 0 || index >= searchResults.length) {
                throw new Error('Invalid index');
            }
            await searchResults[index].click();
            await page.waitForNavigation();
        } catch (error) {
            console.error('Error opening search result:', error.message);
        }
    }
    
    async verifySearchResultOpened() {
        await this.page.waitForSelector('.results-header');
        const headerElement = await this.page.$('.results-header');
        expect(headerElement).to.exist;
    }

    async getFirstSearchResultTitle() {
        try {
            await this.page.waitForSelector('.search-result p a', { timeout: 5000 });
            const firstResultTitleElement = await this.page.$('.search-result p a');
    
            if (firstResultTitleElement) {
                const firstResultTitle = await firstResultTitleElement.innerText();
                return firstResultTitle;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error:', error.message);
            return null; 
        }
    }

}

module.exports = SearchResultsPage;
