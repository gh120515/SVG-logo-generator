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
        <
        circle cx="50%" cy="50%" r="100"
        fill="${this.colour}
        />
        `
    }
};

class Square extends Shape {
    render() {
        return `
        <
        rect x="50" height="200" width="200"
        fill="${this.colour}
        />
        `
    }
};

class Triangle extends Shape {
    render() {
        return `
        <
        polygon points="100 0, 0 ,0 50, 100"
        fill="${this.colour}
        />
        `
    }
};

// export shapes to index.js
module.exports = {Circle, Square, Triangle}