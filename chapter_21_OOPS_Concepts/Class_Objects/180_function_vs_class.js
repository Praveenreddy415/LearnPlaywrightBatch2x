/*
Function vs Class (simple explanation)

Think of a Function like a single tool that does one job.
Think of a Class like a blueprint used to make many similar toys (objects).

Comparison Table:
Feature                  | Function                            | Class
------------------------ | ----------------------------------- | ---------------------------------
Definition               | A block of code that performs a job | A blueprint for creating objects
Syntax                   | `function name(){}`                 | `class Name { constructor(){} }`
Creates instances        | Can (with constructor function + `new`) | Yes (with `new` and constructor)
Usage                   | Simple tasks, utilities             | Modeling objects with state+behavior
Can use `new`           | Yes (if function used as constructor)| Yes (classes require `new`)
`this` behavior         | Depends on how called                | Inside methods `this` is instance
Prototype methods       | Use function.prototype               | Defined inside class body (non-enum)

Examples below show both styles.
*/

// Simple function (utility)
function add(a, b) {
    return a + b;
}
console.log('add(2,3) ->', add(2, 3)); // 5

// Constructor function (older pattern)
function PersonFunc(name, age) {
    this.name = name;
    this.age = age;
}
PersonFunc.prototype.introduce = function () {
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + ".");
};
const p1 = new PersonFunc('Aisha', 10);
p1.introduce(); // Hi, I'm Aisha and I'm 10.

// ES6 Class (modern, clearer syntax)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age}.`);
    }
}
const p2 = new PersonClass('Ravi', 12);
p2.introduce(); // Hello, I'm Ravi and I'm 12.

// Key notes for learners:
// - Classes are mostly syntax sugar over prototype-based objects.
// - Use functions for small utilities; use classes when you model things with state and behavior.
// - Calling a class without `new` will throw an error; a function can be called with or without `new` (but behavior differs).
