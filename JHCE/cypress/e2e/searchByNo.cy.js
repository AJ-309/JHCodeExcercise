import searchByNo from "./pageObjects/searchByNo_POM";

describe('Search query functionality test', () => {
  const searchByNoPage = new searchByNo();

  it('Verify user is able to search product by asin on amazon.com', () => {
    //Visit the amazon Website
    searchByNoPage.open();
    //Search the query by text
    searchByNoPage.searchBox();
    //Submit the search query
    searchByNoPage.clickSearchButton();
    //Search results displays the unique 1 product with specific ASIN
    searchByNoPage.searchResultsText();
    })
  })