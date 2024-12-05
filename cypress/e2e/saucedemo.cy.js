/// <reference types="cypress" />
const data = require('../fixtures/data.json')
const app = require('../fixtures/app.json')

describe('Test login Saucedemo page', () => {
    beforeEach( ()=> {
        cy.log('-> Go to web page')
        cy.visit(Cypress.env('main_page'))
        cy.log('->Validate the title page')
        cy.title().should('include', app.titleLoginPage)
    })

    // it('Sucessfully login with standard user', ()=> {
    //     cy.log('-> Type username')
    //     cy.get('[data-test=username]').type(data.standard_user)
    //     cy.log('-> Type the password')
    //     cy.get('[data-test=password]').type(data.password)
    //     cy.log('-> Click on login button')
    //     cy.get('[data-test=login-button]').click()
    //     cy.url().should('include', '/inventory.html')
    // })

    it('Sucessfully login', ()=> {
        console.log(data.standard_user, data.password);
        
        cy.loginPage(data.standard_user, data.password)
        cy.log('-> Validate afer success login be redirect to products page.')
        cy.url().should('include', '/inventory.html')
    })

})
