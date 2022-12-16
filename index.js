// TODO: Include packages needed for this application
// 'fs', 'path', 'inquirer', './utils/generateMarkdown'
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description for your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'contributing',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'how to run test',
        name: 'test',
    },
    {
        type: 'checkbox',
        message: 'license',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
    },
];

// TODO: Create a function to write README file
// Function to write README file using the user input
function writeToFile(fileName, data) { }

// fs write function to create the README.md file
// path package can be used to create the file path

// TODO: Create a function to initialize app
function init() {

    // call inquirer prompt method for questions
    // inside .then callback
    // call generateMarkdown passing answer object as input argument
    // call writeFile passing file name and the returned value from generateMarkdown function as input arguments



    const inquirer = require('inquirer');
    const fs = require('fs');

    inquirer
        .prompt(questions)
        .then((data) => {
            fs.writeFile(README.md, JSON.stringify(generateMarkdown), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });


}

// Function call to initialize app
init();






