// chapter_21_OOPS_Concepts/04_Inheritance/01_inheritance_simple.js

// Inheritance is like a parent and child in a family.
// The child gets some things from the parent, like hair color or a family name.
// In programming, a child class gets properties and actions from a parent class.

// Simple example using JavaScript classes:
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} says woof!`);
    }
}

const myDog = new Dog('Buddy');
myDog.eat(); // Buddy is eating.
myDog.bark(); // Buddy says woof!

// In 5th-grade words:
// - Animal is the parent class.
// - Dog is the child class.
// - Dog gets the eat() behavior from Animal.
// - Dog also has its own action, bark().
// - This is inheritance: the child reuses parent code.
