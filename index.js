// required modules
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')

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
        name: 'textColour',
        message: 'Enter the text color (name [e.g. black] or HEX colour code):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'logoColour',
        message: 'Enter the shape color (name [e.g. white]  or HEX colour code):',
      },
    ]);
  
    return userInput;
  };

// generate file
function generateSVG(userInput) {
  const svgOptions = {
    size: '400x400',
    text: userInput.text,
    color: userInput.textColour,
    
  };

  const logo = create(svgOptions);
  fs.writeFileSync('logo.svg', logo.data);
}


// run app
async function init() {
    const userInput = await getUserInput();
    generateSVG(userInput);
    console.log('Generated logo.svg');
  }
  
init();