import addToCart from "./pageObjects/addToCart_POM";

describe('Add to cart functionality test', () => {
  const addToCartPage = new addToCart();

  it('Verify user is able to add product to cart on amazon.com', () => {
    //Visit the amazon Website
    addToCartPage.open();
    //Search the query by text
    addToCartPage.searchBox();
    //Submit the search query
    addToCartPage.clickSearchButton();
;    //Search results are displayed for applied search query
    addToCartPage.searchResultsText();
    //Click on first product from search results
    addToCartPage.firstSearchResult();
    //Correct PDP is displayed
    addToCartPage.pdpTitle();
    //Add to cart
    addToCartPage.submitAddToCartButton();
    //Product is added successfully to cart
    addToCartPage.successfulAlert(), { timeout: 10000 };
})
})