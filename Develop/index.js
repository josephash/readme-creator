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
    },
    {
        type: 'input',
        message: 'Contact Name: ',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Contact Email: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Github Page: ',
        name: 'github',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    let response = await inquirer.prompt(questions);
    console.log(response);
    let formattedResponse = [];
    formattedResponse.push(['title', response.title]);
    formattedResponse.push(['subtitle', 'Description']);
    formattedResponse.push(['text', response.description]);
    formattedResponse.push(['subtitle', 'Table of Contents']);
    formattedResponse.push(['listlink', 'Installation', '#Installation']);
    formattedResponse.push(['listlink', 'Usage', '#Usage']);
    formattedResponse.push(['listlink', 'Credits', '#Credits']);
    formattedResponse.push(['listlink', 'License', '#License']);
    formattedResponse.push(['listlink', 'Contact', '#Contact']);
    formattedResponse.push(['listlink', 'Github', '#Github']);
    formattedResponse.push(['break']);
    formattedResponse.push(['subtitle', 'Installation']);
    formattedResponse.push(['text', response.installation]);
    formattedResponse.push(['subtitle', 'Usage']);
    formattedResponse.push(['text', response.usage]);
    formattedResponse.push(['subtitle', 'Credits']);
    formattedResponse.push(['text', response.credits]);
    formattedResponse.push(['subtitle', 'License']);
    formattedResponse.concat(markdown.renderLicenseSection(response.license));
    formattedResponse.push(['subtitle', 'Contact']);
    formattedResponse.push(['list', response.name]);
    formattedResponse.push(['list', response.email]);
    formattedResponse.push(['subtitle', 'Github']);
    formattedResponse.push(['link', response.github, response.github]);
    console.log(formattedResponse);
    let readme = markdown.generateMarkdown(formattedResponse);
    console.log(readme);
    writeToFile('README.md', readme);
}

// Function call to initialize app
init();
