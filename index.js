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
            console.log(answers);
            writeToFile('product/README.md', answers)
        });
}

// function call to initialize program
init();
