// Define classes for logo shapes
class Shape {
    // details to be determined by user input
    constructor(text, textColour, shapeColour) {
        this.text = text,
        this.textColour = textColour,
        this.shapeColour = shapeColour
    }
};

// extend class Shapes to create new shapes (Circle, Square, Triangle)
class Circle extends Shape {
    render() {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="100" 
        fill="${this.shapeColour}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" 
        fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
};

class Square extends Shape {
    render() {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="50" height="200" width="200"
        fill="${this.shapeColour}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" 
        fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    }
};

class Triangle extends Shape {
    render() {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100 0, 0 ,0 50, 100"
        fill="${this.shapeColour}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" 
        fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    }
};

// export shapes to index.js
module.exports = {Circle, Square, Triangle}