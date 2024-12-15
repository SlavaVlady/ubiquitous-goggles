const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    video: true,
    screenshotOnRunFailure: true,
  },
});
