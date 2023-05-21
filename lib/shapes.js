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
        <text x="50%" y="60%" font-size="60" text-anchor="middle" 
        fill="${this.textColour}">${this.text}</text>
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
        <rect height="200" width="200"
        fill="${this.shapeColour}" />
        <text x="100" y="120" font-size="60" text-anchor="middle" 
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
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="50 15, 100 100, 0 100" x="50%" y="50%"
        fill="${this.shapeColour}" />
        <text x="50%" y="70%" font-size="125%" text-anchor="middle" 
        fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    }
};

// export shapes to index.js
module.exports = {Circle, Square, Triangle}