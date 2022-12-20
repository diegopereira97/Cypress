const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '58i68x',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress\e2e\features\*.feature",
    baseUrl: "https://verz.com.br/fgts/",
    chromeWebSecurity: false

  },
});
