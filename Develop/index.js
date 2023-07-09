// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'App title: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Install guide: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage guide: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Credits: ',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'License: ',
        name: 'license',
        choices: ['MIT', 'GPL', 'None'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
    let response = await inquirer.prompt(questions);
    console.log(response);
    console.log(markdown.generateMarkdown(response));
}

// Function call to initialize app
init();
