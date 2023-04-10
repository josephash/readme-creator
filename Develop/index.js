// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

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
        type: 'input',
        message: 'License: ',
        name: 'license',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
