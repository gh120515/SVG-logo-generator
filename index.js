// required modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes')
const util = require('util');

// user prompts
const questions = ([
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

 // function to set logo components, based on shape chosen
 function logoShape(answer) {
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
};

// fs to write SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,
        err => {
            if(err) {
                console.log(err)
            }
            console.log('Your logo is ready!')
        }
    )};


// util package to use await on iquirer prompts & SVG file creation
const createFile = util.promisify(writeToFile)
// run app
async function init() {
    // try & catch to log error on failure
    try {
    // initiate the inquirer module
    const answers = await inquirer.prompt(questions);
    // generate the SVG logo file
    const generate = logoShape(answers)
    await createFile('logo.svg', generate);
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();