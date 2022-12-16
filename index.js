// TODO: Include packages needed for this application
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
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'How can other developers contribute to your project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'How can we run a test?',
        name: 'test',
        default: "npm run test"
    },
    {
        type: 'list',
        message: 'Which type of license would you like?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
    },
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then((data) => {
            fs.writeFileSync("README.md", generateMarkdown({ ...data }), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });

}

// Function call to initialize app
init();






