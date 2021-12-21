module.exports = {
    searchBar: '#searchbox',
    searchButton: '#searchbox-searchbutton',
    successSearchTitle: 'div.x3AX1-LfntMc-header-title-ij8cu',
    directionIcon: 'button[data-value="Direções"]',
    directionSearchBox: '#directions-searchbox-1 input',
    acceptButton: 'form button'
}

const weblocator = require('./map')

Cypress.Commands.add('searchLocation', location => {
    cy.get(weblocator.searchBar).type(location)
    cy.get(weblocator.searchButton).click()
})

Cypress.Commands.add('goToDirection', () => {
    cy.log('->Click on to direction icon')
    cy.get(weblocator.directionIcon)
        .should('be.visible')
        .click({ force: true }, { waitForAnimations: true })

    cy.log('->Validate the direction search box direction')
    cy.get(weblocator.directionSearchBox).should('be.visible')
})
