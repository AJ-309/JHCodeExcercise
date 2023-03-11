import searchByQuery from "./pageObjects/searchByQuery_POM";

describe('Search query functionality test', () => {
    const searchQueryPage = new searchByQuery();

    it('Verify user is able to search product by name on amazon.com', () => {
        //Visit the amazon Website
        searchQueryPage.open();
        //Search the query by text
        searchQueryPage.searchBox();
        //Submit the search query
        searchQueryPage.clickSearchButton();
        //Search results are displayed for applied search query
        searchQueryPage.searchResultsText();
      })
    })

        
 
