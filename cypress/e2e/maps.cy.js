/// <reference types="cypress" />
const weblocator = require('../support/commands/map')
const data = require('../fixtures/data.json')
const app = require('../fixtures/app.json')

describe('Test Google Maps', () => {
    beforeEach('Accept the user terms and navigate to maps page', () => {
        cy.log('-> Go to web page')
        cy.visit(Cypress.env('main_page'))

        cy.log('->Validate page open the use terms')
        cy.title().should('include', app.titleUserTerm)

        cy.log('->Accept the terms to be redirect to the maps page')
        cy.get('button').contains('Rejeitar tudo').click()

        cy.log('->Validate the title page')
        cy.title().should('include', app.titleGoogleMaps)
    })

    it('Sucessfully search a valid district', () => {
        cy.searchLocation(data.district).then(() => {
            cy.waitFor(weblocator.successSearchTitle)
            cy.log('-> Validate the displayed location')
            cy.title().should('eq', app.titleAfterSearch)
        })

        cy.goToDirection().then($el => {
            cy.log('-> Validate the direction on the direction search box')
            expect($el.attr('aria-label')).to.contains(data.district)
        })
    })
})
