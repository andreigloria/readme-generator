function licenseBadge(license) {
    if (license !== "None") {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ''
  }
  function licenseLink(license) {
    if (license !== "None") {
      return (
        `[License](#license)`
      )
    }
    return ''
  }
  function licenseSection(license) {
    if (license !== "None") {
      return (
        `## License
    This project is licensed under the ${license} license.`
      )
    }
    return ''
  }

function generateMarkdown(data) {
    return `# ${data.title}
    ${licenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * ${licenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}
    ${licenseSection(data.license)}

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    If you have any questions about the repo, open an issue or contact me @ 
    Email: ${data.email}
    Github: [${data.github}](https://github.com/${data.github}/)
  `;
  }
  module.exports = generateMarkdown;