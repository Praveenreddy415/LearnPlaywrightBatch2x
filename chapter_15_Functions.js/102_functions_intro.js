// 01_functions_intro.js
// What is a function in JavaScript?
// A function is a reusable block of code that performs a specific task.
// Functions help organize logic, avoid repetition, and make code easier to understand.

// 1. Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Hello, Alice!

// 2. Function with multiple parameters
function add(a, b) {
    return a + b;
}

console.log(add(5, 7)); // 12

// 3. Function expression
const multiply = function (x, y) {
    return x * y;
};

console.log(multiply(4, 6)); // 24

// 4. Arrow function
const square = n => n * n;
console.log(square(5)); // 25

// 5. Function with default parameter values
function say(message = 'Hello!') {
    console.log(message);
}

say(); // Hello!
say('Hi there!'); // Hi there!

// 6. Function that uses another function
function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(10, 3, add)); // 13
console.log(calculate(10, 3, multiply)); // 30

// 7. Function with early return and validation
function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Cannot divide by zero
