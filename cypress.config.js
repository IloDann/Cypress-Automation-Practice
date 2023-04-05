const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)
  if (!fs.existsSync(pathToConfigFile)) {
    console.log('No custom config file found.');
    return {};
  }

  return fs.readJson(pathToConfigFile)
}


module.exports = defineConfig({
  
  projectId: "ktxh9s",
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    
    // implement node event listeners here
  },
  specPattern : "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
  baseUrl : "https://rahulshettyacademy.com/AutomationPractice/",
  experimentalStudio: true
  
},
});
