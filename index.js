// required modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes')
// file to export logo into
const file = './logo.svg';

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
        name: 'shapeColour',
        message: 'Enter the shape color (name [e.g. white]  or HEX colour code):',
      },
    ]);
  
    return userInput;
  };

// generate logo function
function generateLogo() {
    
    // function to set logo components, based on shape chosen
    let logoShape = function(answer) {
        // create new objects from imported Shapes classes
        if (answer.shape === 'circle') {
            let userShape = new Circle (
                answer.text,
                answer.textColour,
                answer.shapeColour
            )
            return userShape.render();
        }

        if (answer.shape === 'square') {
            let userShape = new Square (
                answer.text,
                answer.textColour,
                answer.shapeColour
            )
            return userShape.render();
        }

        if (answer.shape === 'triangle') {
            let userShape = new Triangle (
                answer.text,
                answer.textColour,
                answer.shapeColour
            )
            return userShape.render();
        }
    }

    // write to file using fs
    fs.writeFile(file, logoShape,
        err => {
            if(err) {
                console.log(err)
            }
            console.log('Your logo is ready!')
        })
};


// run app
async function init() {
    const userInput = await getUserInput();
    // generate logo based on user input
    generateLogo(userInput);
  }
  
init();