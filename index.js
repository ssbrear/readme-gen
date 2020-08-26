const generateMarkdown = require('./utils/generateMarkdown');
const { write } = require('fs');

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    console.log(generateMarkdown(project));
}

let project = {};

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
            type: 'list',
            message: 'Which licence would you like to cover your application? ',
            name: 'licence',
            choices: ['MIT', 'GNU General Public License v3.0', 'Apache License 2.0', 'ISC License']
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
        }
        ])
        .then(answers => {
            project.title = answers.title;
        });
}

// function call to initialize program
init();
