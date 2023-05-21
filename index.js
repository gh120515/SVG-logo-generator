// required modules
const inquirer = require('inquirer');
const fs = require('fs');
// const { create } = require('svg-captcha');

// user prompts
async function getUserInput() {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo;',
        validate: (input) => {
            console.log('Invalid input - please enter up to three characters only.')
            return input.length > 0 && input.length <= 3;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (name [e.g. black] or HEX colour code):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square', 'star', 'box3d', 'folder', 'note', 'signature', 'house'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (name [e.g. white]  or HEX colour code):',
      },
    ]);
  
    return userInput;
  };

// generate file

// run app
getUserInput();