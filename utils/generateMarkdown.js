function generateMarkdown(data) {
    return `# ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

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