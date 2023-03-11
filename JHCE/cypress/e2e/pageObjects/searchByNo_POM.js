class searchByNo{
    open(){
        cy.visit('/')
    }
    searchBox(){
        cy.get('input#twotabsearchtextbox').type('B00QSJUSKE')
    }
    clickSearchButton(){
        cy.get('input#nav-search-submit-button').click()
    }
    searchResultsText(){
         cy.get('.a-section').then( (x) =>{
            let searchResultsText=x.text()
            expect(searchResultsText).contains("1"),
            cy.url().should('contain','B00QSJUSKE')
         }
    )}
}
export default searchByNo;