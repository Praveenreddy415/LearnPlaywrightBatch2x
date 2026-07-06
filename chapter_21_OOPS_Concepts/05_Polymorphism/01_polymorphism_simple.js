// chapter_21_OOPS_Concepts/05_Polymorphism/01_polymorphism_simple.js

// Polymorphism means one thing can act in many ways.
// It is like a shape that can be used as a square, a rectangle, or a rhombus.
// In programming, different objects can use the same method name but do different work.
/*
Definition

Polymorphism means "one interface, many forms."

It allows the same method or function to behave differently depending on the object or data it is working with.

Real-life Example

Think of a person:

At home → acts as a parent.
At work → acts as an employee.
With friends → acts as a friend.

The same person behaves differently in different situations. This is similar to polymorphism.

Types of Polymorphism
1. Compile-time Polymorphism (Method Overloading)

This is achieved by having multiple methods with the same name but different parameters.

Note: JavaScript and TypeScript do not support true method overloading like Java or C#. In TypeScript, it is simulated using overload signatures.

2. Runtime Polymorphism (Method Overriding)

This happens when a child class overrides a method from the parent class.

*/
class Animal {
    speak() {
        console.log('Animal makes a sound.');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Cat says meow.');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog says woof.');
    }
}

const animals = [new Animal(), new Cat(), new Dog()];

animals.forEach((animal) => {
    animal.speak();
});

// In 5th-grade words:
// - Polymorphism is like a toy that can be different things.
// - The same word speak() means different sounds for different animals.
// - Cat speaks meow and Dog speaks woof.
// - This is useful because you can use the same action for many friends.
