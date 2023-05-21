// import Shapes objects
const { Circle, Square, Triangle } = require('./shapes.js');

// testing suite for each shapes
// constructor(text, textColour, shapeColour)
// test for:
// text = 'ABC'
// textColour = 'blue'
// shapeColour = 'red'

// Circle
describe('Circle test', () => {
    it('Test for rendering a Circle', () => {
        const shape = new Circle('ABC', 'blue', 'red');
        expect(shape.render()).toEqual(`
        <svg version="1.1"
        width="200" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="100" 
        fill="red" />
        <text x="50%" y="60%" font-size="60" text-anchor="middle" 
        fill="blue">ABC</text>
        </svg>
        `
        )
    })
})

// Square
describe('Square test', () => {
    it('Test for rendering a Square', () => {
        const shape = new Square('ABC', 'blue', 'red');
        expect(shape.render()).toEqual(`
        <svg version="1.1"
        width="200" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect height="200" width="200"
        fill="red" />
        <text x="100" y="120" font-size="60" text-anchor="middle" 
        fill="blue">ABC</text>
        </svg>
        `
        )
    })
})

// Triangle
describe('Triangle test', () => {
    it('Test for rendering a Triangle', () => {
        const shape = new Triangle('ABC', 'blue', 'red');
        expect(shape.render()).toEqual(`
        <svg version="1.1"
        width="200" height="200"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="50 15, 100 100, 0 100" x="50%" y="50%"
        fill="red" />
        <text x="50%" y="70%" font-size="125%" text-anchor="middle" 
        fill="blue">ABC</text>
        </svg>
        `
        )
    })
})