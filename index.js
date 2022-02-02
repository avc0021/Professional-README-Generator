// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the name of your project? (Required)',
        },
        {
          type: 'input',
          name: 'name',
          message: 'Who contributed to the project? (Required)',
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username (Required)',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project (Required)',
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you use while making this project? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'install',
          message: 'Provide the required steps needed to install and run application. (Required)',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Describe intended use of your project.',
        },
        {
          type: 'checkbox',
          name: 'license',
          message: 'Which license was used for this project?',
          choices: ['MIT', 'Apache', 'GNU GPLv2', 'ISC', 'N/A'],
        },
        {
          type: 'input',
          name: 'tests',
          message: 'Provide test(s) for application.',
          default: false
        }
        
  ])
}

// TODO: Create a function to write README file
const writeFile = questionsInfo => {
  fs.writeFile('./dist/README.md', questionsInfo, err => {
    if(err) {
      console.error(err)
      return;
    }
   });
};

// TODO: Create a function to initialize app
function init() {
        questions()
        .then(data => {
          return data
        })
        .then(data => {
          return generateMarkdown(data)
        })
        .then(readmeInfo => {
          return writeFile(questionsInfo)
        })
  }

// // Function call to initialize app
 init();
