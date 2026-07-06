// chapter_21_OOPS_Concepts/04_Inheritance/03_super_keyword.js

// The super keyword lets a child class call the parent class constructor or methods.
// It is like asking your parent for something they already know how to do.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Bird extends Animal {
    constructor(name, wingSpan) {
        super(name); // call parent constructor to set the name
        this.wingSpan = wingSpan;
    }

    speak() {
        super.speak(); // call the parent method
        console.log(`${this.name} chirps with a wing span of ${this.wingSpan} cm.`);
    }
}

const myBird = new Bird('Tweety', 25);
myBird.speak();

// In simple words:
// - super(name) calls the parent class constructor.
// - super.speak() calls the parent class method.
// - This lets the child reuse parent behavior and add its own details.
