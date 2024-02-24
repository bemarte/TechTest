const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  viewportWidth: 1600,
  viewportHeight: 960,
  chromeWebSecurity: false,
  scrollBehavior: false,
  defaultCommandTimeout: 60000,
  requestTimeout: 90000,
  responseTimeout: 90000,
  pageLoadTimeout: 90000,
  video:false,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  screenshotsFolder: "cypress/results/screenshots",
  videosFolder: "cypress/results/videos",
  videoUploadOnPasses: true,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;

    },
    env:{
      allure: true,
      allureResultsPath: 'cypress/allure-results',
      allureAttachRequests:true,
      screenshotOnRunFailure: true, //necessário para ter o screenshot no teste que falhar

    },
    baseUrl: "https://automationexercise.com/",
    excludeSpecPattern: "*.description.js",
    experimentalRunAllSpecs: true,
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    experimentalOriginDependencies: true,
    experimentalSessionAndOrigin : true,
  },
});
