const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// #!/usr/env node
// console.log('hello');

const readMe = [ 
    {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
    {
    type: 'input',
    name: 'title',
    message: "What is your Project's name?",
  },
    {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
  },
    {
    type: 'list',
    name: 'license',
    message: 'What kind of license does your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
    {
    type: 'input',
    name: 'installation',
    message: 'What command should I run to install dependencies?',
    default: "npm i -y",
  },
    {
    type: 'input',
    name: 'tests',
    message: 'What command should I run to start tests',
    default: "npm tests",
  },
    {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
    {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },

//     {
//         title: "ReadMe Generator"
//         description: "This is a README Generator using a command-line application"
//         installation: "N/A"
//         usage: "N/A"
//         license: "MIT License"
//         contributing: "N/A"
//         tests: "N/A"
//         questions: "N/A"
// 
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
// function to initialize program
function init() {
    inquirer.prompt(readMe).then((inquirerResponses) => {
        console.log('creating README');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
        //... spread operator 
    });
}
// function call to initialize program
init();
