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
        name: 'shapeColour',
        message: 'Enter the shape color (name [e.g. white]  or HEX colour code):',
      },
    ]);
  
    return userInput;
  };

// generate logo function
function generateLogo() {
    // base XML code for the SVG shape (size of logo)
    let svg = '<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg">';
    
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
    fs.writeFile(fileName, logoShape,
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