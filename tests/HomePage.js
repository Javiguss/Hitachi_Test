class HomePage {

    constructor(page) {
            this.page = page;
        }


    async navigateToSite() {
                await this.page.goto('https://global.hitachi-solutions.com/');
            }

    async verifySearchResultsDisplayed() {
        await this.page.waitForSelector('.search-results');
        const results = await this.page.$$('.search-results');
        expect(results.length).toBeGreaterThan(0, 'Search results are displayed.');
    }
}

module.exports = HomePage;
