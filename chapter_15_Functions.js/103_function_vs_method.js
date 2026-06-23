// 02_function_vs_method.js
// Functions and methods are both blocks of reusable code, but they are used in different contexts.

// 1. Function: standalone reusable code not attached to an object.
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Hello, Alice!

// 2. Method: a function that belongs to an object.
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6

// 3. Arrow function as a function
const multiply = (x, y) => x * y;
console.log(multiply(4, 7)); // 28

// 4. Method calling another property in the same object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName()); // John Doe

// Summary:
// - A function is an independent block of code you call directly.
// - A method is a function stored as a property of an object and is called on that object.
// - Methods can use `this` to access other object data.
