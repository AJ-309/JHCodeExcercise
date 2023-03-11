class addToCart{
    open(){
        cy.visit('/')
    }
    searchBox(){
        cy.get('input#twotabsearchtextbox').type('Ashwagandha')
    }
    clickSearchButton(){
        cy.get('input#nav-search-submit-button').click()
    }
    searchResultsText(){
        cy.get('.a-color-state.a-text-bold').should('contain','Ashwagandha')
    }
    firstSearchResult(){
        cy.get('.a-link-normal.a-text-normal').first().click()
    }
    pdpTitle(){
        cy.get('#productTitle').should('contain','Ashwagandha')
    }
    submitAddToCartButton(){
        cy.get('#add-to-cart-button').click()
    }
    successfulAlert(){
        cy.get('.a-box.a-alert-inline').should('contain','Added to Cart')
    }
   }
   export default addToCart;