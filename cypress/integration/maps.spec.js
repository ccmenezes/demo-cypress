/// <reference types="cypress" />

describe('Maps', () => {
    const acceptButton = 'form button'
    const successSearchTitle = 'div.x3AX1-LfntMc-header-title-ij8cu'
    const district = 'Matosinhos'

    beforeEach(() => {
        cy.log('-> Go to web page')
        cy.visit(Cypress.env('main_page'))

        cy.log('->Validate page open the use terms')
        cy.title().should('include', 'Antes de continuar para o Google Maps')

        cy.log('->Accept the terms to be redirect to the maps page')
        cy.get(acceptButton).click()

        cy.log('->Validate the title page')
        cy.title().should('include', 'Google Maps')
    })

    it('Search a valid district', () => {
        const searchBar = '#searchbox'
        const searchButton = '#searchbox-searchbutton'
        const directionIcon = 'button[data-value="Direções"]'
        const directionSearchBox = '#directions-searchbox-1 input'

        cy.log('->Search for Matosinhos')
        cy.get(searchBar).type(district)
        cy.get(searchButton)
            .click()
            .then(() => {
                cy.get(successSearchTitle)
                    .should('be.visible')
                    .invoke('text')
                    .then($value => {
                        expect($value).to.contains(district)
                    })
            })

        cy.log('->Click on to direction icon')
        cy.get(directionIcon)
            .should('be.visible')
            .click({ force: true }, { waitForAnimations: true })

        cy.log('->Validate the direction search box direction')
        cy.get(directionSearchBox)
            .should('be.visible')
            .then($el => {
                expect($el.attr('aria-label')).to.contains(district)
            })
    })

    it('With commands', () => {
        cy.searchLocation(district).then(() => {
            cy.waitFor(successSearchTitle)
            cy.log('-> Validate the displayed location')
            cy.get(successSearchTitle)
                .should('be.visible')
                .invoke('text')
                .then($value => {
                    expect($value).to.contains(district)
                })
        })

        cy.goToDirection().then($el => {
            cy.log('-> Validate the direction on the direction search box')
            expect($el.attr('aria-label')).to.contains(district)
        })
    })
})
