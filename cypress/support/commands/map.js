module.exports = {
    successSearchTitle: 'div.x3AX1-LfntMc-header-title-ij8cu'
}

const MAPS_PAGE = {
    searchBar: '#searchbox',
    searchButton: '#searchbox-searchbutton',
    directionIcon: 'button[data-value="Direções"]',
    directionSearchBox: '#directions-searchbox-1 input'
}

Cypress.Commands.add('searchLocation', location => {
    cy.log('-> Type the location to search')
    cy.get(MAPS_PAGE.searchBar).type(location)
    cy.log('-> Click on the search button')
    cy.get(MAPS_PAGE.searchButton).click()
})

Cypress.Commands.add('goToDirection', () => {
    cy.log('->Click on to direction icon')
    cy.get(MAPS_PAGE.directionIcon)
        .should('be.visible')
        .click({ force: true }, { waitForAnimations: true })

    cy.log('->Validate the direction search box direction')
    cy.get(MAPS_PAGE.directionSearchBox).should('be.visible')
})
