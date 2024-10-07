const { defineConfig } = require('cypress')

module.exports = defineConfig({
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 15000,
    requestTimeout: 10000,
    responseTimeout: 30000,
    pageLoadTimeout: 60000,
    execTimeout: 60000,
    taskTimeout: 60000,
    reporter: 'mochawesome',
    video: false,
    e2e: {
        setupNodeEvents(on, config) {}
    }
})
