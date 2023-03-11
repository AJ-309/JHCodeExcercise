class searchByQuery{
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
        cy.get('.a-section').then( (x) =>{
            let searchResultsText=x.text()
            expect(searchResultsText).contains("Ashwagandha"),
        cy.url().should('contain','Ashwagandha')
        }
    )}
}
export default searchByQuery;