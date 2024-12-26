
module.exports = {
    e2e: {
      baseUrl: 'https://qauto2.forstudy.space', 
      username: 'guest',
      password: 'welcome2qauto',
      email: 'test_vs@mailinator.com',
      authPassword: 'neUfLyN25ATtyMP',
      video: true,
      screenshotOnRunFailure: true,
      setupNodeEvents(on, config) {
      },
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
  };