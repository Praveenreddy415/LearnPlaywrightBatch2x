// Constructor and `this` keyword - simple example
// Constructor: a special function that runs when you create a new object from a class.
// `this` means "this object" — the new thing created from the class.

class Person {
    constructor(name, age) {
        // `this` refers to the new Person instance being created
        this.name = name;
        this.age = age;
    }

    // a normal method that uses `this` to read properties
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }

    // method that updates the object's property using `this`
    haveBirthday() {
        this.age += 1;
        console.log(`${this.name} had a birthday and is now ${this.age}.`);
    }
}

// Create new objects (instances) using the constructor
const aisha = new Person('Aisha', 10);
const ravi = new Person('Ravi', 12);

// Use their methods
aisha.introduce(); // Hi, I'm Aisha and I'm 10 years old.
ravi.introduce();  // Hi, I'm Ravi and I'm 12 years old.

// `this` refers to the specific instance, so changing one doesn't change the other
aisha.haveBirthday(); // Aisha had a birthday and is now 11.
ravi.introduce();     // still 12

// Quick note for learners:
// - The constructor runs once when you call `new Person(...)`.
// - Inside the constructor and inside methods, `this` points to that instance.
// - Don't use arrow functions for methods when you need `this` to refer to the instance.
