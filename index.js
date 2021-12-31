// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
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


  ])
};
    //Credits- Enter Name, if name is entered then ask for github username
    //Please provide a description of your project
    //What was used during this project?
    //How to Install
    //License

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions();