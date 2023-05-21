// import Shapes objects
const { Circle, Square, Triangle } = require('./shapes.js');

// testing suite for each shapes
// constructor(text, textColour, shapeColour)
// test for:
// text = 'ABC'
// textColour = 'blue'
// shapeColour = 'red'

// Circle (test for red background)
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
        fill="undefined">ABC</text>
        </svg>
        `
        )
    })
})