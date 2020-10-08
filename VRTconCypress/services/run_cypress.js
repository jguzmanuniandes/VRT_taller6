const cypress = require("cypress");

let runCypress = async () => {
    return (await cypress.run({spec: "cypress/integration/palette/get_palette.spec.js"}))
}

module.exports = runCypress