const webLocators = {
    searchBar : '#searchbox',
    searchButton : '#searchbox-searchbutton',
    district : 'Matosinhos',
    successSearchTitle : 'div.x3AX1-LfntMc-header-title-ij8cu' ,
    directionIcon : 'button[data-value="Direções"]',
    directionSearchBox : '#directions-searchbox-1 input'
}


Cypress.Commands.add('searchLocation', location=> {
    cy.get(webLocators.searchBar).type(location)
    cy.get(webLocators.searchButton).click()
})

Cypress.Commands.add('goToDirection', ()=> {
    cy.log('->Click on to direction icon')
    cy.get(webLocators.directionIcon).should('be.visible').click({force:true}, {waitForAnimations:true})

    cy.log('->Validate the direction search box direction')
    cy.get(webLocators.directionSearchBox).should('be.visible')
})