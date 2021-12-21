/// <reference types="cypress" />
const weblocator = require('../support/commands/map')
import data from '../fixtures/data'

describe('Test Google Maps', () => {
    beforeEach('Accept the user terms and navigate to maps page', () => {
        cy.log('-> Go to web page')
        cy.visit(Cypress.env('main_page'))

        cy.log('->Validate page open the use terms')
        cy.title().should('include', Cypress.env('title_user_term'))

        cy.log('->Accept the terms to be redirect to the maps page')
        cy.get(weblocator.acceptButton).click()

        cy.log('->Validate the title page')
        cy.title().should('include', Cypress.env('title_google_maps'))
    })

    it('Sucessfully search a valid district', () => {
        cy.searchLocation(data.district).then(() => {
            cy.waitFor(weblocator.successSearchTitle)
            cy.log('-> Validate the displayed location')
            cy.get(weblocator.successSearchTitle)
                .should('be.visible')
                .invoke('text')
                .then($value => {
                    expect($value).to.contains(data.district)
                })
        })

        cy.goToDirection().then($el => {
            cy.log('-> Validate the direction on the direction search box')
            expect($el.attr('aria-label')).to.contains(data.district)
        })
    })
})
