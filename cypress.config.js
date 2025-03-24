const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "tests/**/*.cy.{js,jsx,ts,tsx}", // Cambiar el patrón para usar la carpeta "tests"
  },
});