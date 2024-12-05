![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![json](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

# Cypress

This project is a demo for testing Cypress capabilities and creating a repository with a portable configuration.

## How to start

### _Prequirements_

- [Nodejs](https://nodejs.org/en/download/package-manager)
- [Git](https://git-scm.com/downloads/linux)

#### How to download the project

Download the project using the command below.

```
git clone https://github.com/ccmenezes/cypress.git
cd cypress
```

- Inside the project execute the command `npm install`

It's ready to work.

---

### Achievements

- Well structured test frameword.
- Code formatter.
- Continuous integration with Github Actions.
- Mochawesome report.

### How to execute the tests

The available scripts are at the package.json at the scripts node.

- cy:open -> Open the cypress test runner.
- cy:run:chrome -> Perform all tests in the headless mode at Chrome browser.
- cy:run:firefox -> Perform all tests in the headless mode at Firefox browser.

At the terminal type:

```
npm run cy:open
```
