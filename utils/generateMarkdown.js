// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
## Description\n
${data.description}\n
## Table of Contents\n
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Testing](#testing)
* [Credits](#credits)
* [License](#license)\n
## Installation
${data.installation}\n
## Usage
${data.information}\n
## Contributions
${data.guidelines}\n
## Testing
${data.instructions}\n
## Credits
GitHub Username: ${data.username}
Email: ${data.email}\n
## License
${data.license}`
}

module.exports = generateMarkdown;
