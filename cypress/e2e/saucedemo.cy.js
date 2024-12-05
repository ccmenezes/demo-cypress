/// <reference types="cypress" />
const data = require('../fixtures/data.json')
const app = require('../fixtures/app.json')

describe('Test login Saucedemo page', () => {
    beforeEach(() => {
        cy.log('-> Go to web page')
        cy.visit(Cypress.env('main_page'), {failOnStatusCode: false})
        cy.log('->Validate the title page')
        cy.title().should('include', app.titleLoginPage)
    })

    it('Should show error message for error user' , ()=> {
        cy.loginPage(data.error_user, data.error_password)
        cy.log('-> Throw an error message.')
        cy.get('div.error-message-container').should('eq', app.loginErrorMessage)
    })

    it('Should sucessfully login with correct credentials', () => {
        cy.loginPage(data.standard_user, data.password)
        cy.log('-> Validate afer success login be redirect to products page.')
        cy.url().should('include', '/inventory.html')
    })
})
