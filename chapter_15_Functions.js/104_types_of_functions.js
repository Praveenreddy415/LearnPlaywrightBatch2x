// 104_types_of_functions.js
// Simple examples of common function types in JavaScript.

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Hello, Alice!

// 2. Function Expression (anonymous function assigned to a variable)
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8

// 3. Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 6)); // 24

// 4. Anonymous Function passed as a callback
const numbers = [1, 2, 3];
numbers.forEach(function (number) {
    console.log('Number:', number);
});

// 5. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log('This runs immediately when defined.');
})();

// 6. Generator Function (uses function* and yield)
function* idGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = idGenerator();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

// Summary:
// - Function declaration: named and hoisted.
// - Function expression: function stored in a variable.
// - Arrow function: shorter syntax, no separate this.
// - Anonymous callback: used inline for event handlers or array methods.
// - IIFE: runs immediately after it is defined.
// - Generator: produces a sequence of values on demand.
