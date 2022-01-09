// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the name of your project? (Required)',
          validate: projectName => {
            if (projectName) {
              return true;
            } else {
            console.log('You need to enter a project name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'name',
          message: 'Who contributed to the project? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
            console.log('Please enter credits.');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username (Required)',
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
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
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'install',
          message: 'Provide the required steps needed to install and run application. (Required)',
          validate: installInput => {
            if (installInput) {
              return true;
            } else {
              console.log('Please provide install instructions to proceed.');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Describe intended use of your project.',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Enter description to proceed.');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'license',
          message: 'Which license was used for this project?',
          choices: ['MIT', 'Apache', 'GNU GPLv2', 'ISC', 'N/A'],
          validate: licenseInput => {
            if (licenseInput) {
              return true
            } else {
              console.log('Please select a license to continue.')
            }
          }
        },
        {
          type: 'input',
          name: 'tests',
          message: 'Provide test(s) for application.',
          default: false
        }
        
  ])
};

// TODO: Create a function to write README file
const writeFile = questions => {
  return new Promise((resolve, reject) => {
  fs.writeFile('README.md', questions, err => {
    if(err) {
      console.error(err)
      return 
    }

    resolve({
      ok: true,
      message: 'File created!'
    });
   });
  });
};

// TODO: Create a function to initialize app
// function init = () => {
//        questions()
//        .then(generateMarkdown)
//        .catch(err => console.log(err));
//  };

// // Function call to initialize app
// init();
questions()
  .then(writeFile)
  .then(generateMarkdown)
  .catch(err => console.log(err));