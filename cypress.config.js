const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://qauto.forstudy.space',
    video: true,
    screenshotOnRunFailure: true,
  },
  env: {
    username: 'guest',
    password: 'welcome2qauto',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },
});
