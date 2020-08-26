const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('success!');
        }
    })
}

// function to initialize program
function init() {
    var inquirer = require('inquirer');
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a description of your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter installation instructions: ',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Enter usage information: ',
            name: 'information'
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines: ',
            name: 'guidelines'
        },
        {
            type: 'input',
            message: 'Enter test instructions: ',
            name: 'instructions'
        },
        {
            type: 'input',
            message: 'What is your GitHub username? ',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address? ',
            name: 'email'
        },
        {
            type: 'list',
            message: 'Which licence would you like to cover your application? ',
            name: 'license',
            choices: ['MIT', 'ISC', 'Apache 2.0', 'GNU General Public v3.0']
        }
        ])
        .then(answers => {
            // Short descriptions of each license are taken from choosealicense.com
            switch (answers.license) {
                case 'MIT':
                    answers.badge = '![MIT License](https://img.shields.io/badge/License-MIT-Green)';
                    answers.license = 'MIT License: A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
                    break;
                case 'ISC':
                    answers.badge = '![ISC License](https://img.shields.io/badge/License-ISC-Green)';
                    answers.license = 'ISC License: A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.'
                    break;
                case 'Apache 2.0':
                    answers.badge = '![ISC License](https://img.shields.io/badge/License-Apache-Green)';
                    answers.license = 'Apache 2.0 License: A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
                    break;
                case 'GNU General Public v3.0':
                    answers.badge = '![ISC License](https://img.shields.io/badge/License-GNUv3-Green)';
                    answers.license = 'GNU General Public License: Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.'
                    break;
            }
            if (!fs.existsSync('./product')) {
                fs.mkdirSync('./product')
            }
            writeToFile('product/README.md', answers)
        });
}

// function call to initialize program
init();
