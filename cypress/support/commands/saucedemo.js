Cypress.Commands.add('loginPage', (username, password)=>{
    const SAUCEDEMO_PAGE = {
        USERNAME_TEXTBOX :  '[data-test=username]',
        PASSWORD_TEXTBOX :'[data-test=password]',
        LOGIN_BUTTON : '[data-test=login-button]'
    }
    
    cy.log('-> Type username')
    cy.get(SAUCEDEMO_PAGE.USERNAME_TEXTBOX).type(username)
    cy.log('-> Type the password')
    cy.get(SAUCEDEMO_PAGE.PASSWORD_TEXTBOX).type(password)
    cy.log('-> Click on login button')
    cy.get(SAUCEDEMO_PAGE.LOGIN_BUTTON).click()
})
