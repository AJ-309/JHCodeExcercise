const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 800,
  defaultCommandTimeout: 4000,
  retries: {openMode: 2, runMode: 1},

  e2e: {
    setupNodeEvents(on, config) {
     
    },
baseUrl: "https://www.amazon.com"
  },
});
