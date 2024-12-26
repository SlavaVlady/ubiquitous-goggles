module.exports = {
  e2e: {
    baseUrl: 'https://qauto.forstudy.space', 
    username: 'guest',
    password: 'welcome2qauto',
    email: 'test1734889756918vs@mailinator.com',
    authPassword: 'Test1234!',
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


  