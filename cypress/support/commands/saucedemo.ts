declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in to the Saucedemo page.
       * @example cy.loginPage('standard_user', 'secret_sauce')
       */
      loginPage(username: string, password: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('loginPage', (username: string, password: string) => {
    const SAUCEDEMO_PAGE = {
        USERNAME_TEXTBOX: 'input[data-test=username]',
        PASSWORD_TEXTBOX: 'input[data-test=password]',
        LOGIN_BUTTON: 'input[data-test=login-button]'
    }

    cy.log('-> Type username')
    cy.get(SAUCEDEMO_PAGE.USERNAME_TEXTBOX).type(username)
    cy.log('-> Type the password')
    cy.get(SAUCEDEMO_PAGE.PASSWORD_TEXTBOX).type(password)
    cy.log('-> Click on login button')
    cy.get(SAUCEDEMO_PAGE.LOGIN_BUTTON).click()
})

export {}
