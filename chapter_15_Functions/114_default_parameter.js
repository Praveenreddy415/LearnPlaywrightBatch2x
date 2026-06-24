// 114_default_parameter.js
// Default parameter function example in JavaScript.
// A default parameter value is used when no argument or undefined is passed.

function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Hello, Alice!
console.log(greet()); // Hello, Guest!
console.log(greet(undefined)); // Hello, Guest!

function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5, 3)); // 15
console.log(multiply(5)); // 10 (b is 2 by default)

function buildMessage(message = 'Welcome', user = 'User') {
    return `${message}, ${user}!`;
}

console.log(buildMessage('Hello', 'John')); // Hello, John!
console.log(buildMessage('Hi')); // Hi, User!
console.log(buildMessage()); // Welcome, User!

// Default parameters make functions easier to call and reduce the need for manual checks.
// They are evaluated when the function is called, so you can use expressions too.
function createPoint(x = 0, y = 0) {
    return { x, y };
}

console.log(createPoint(5, 7)); // { x: 5, y: 7 }
console.log(createPoint(3)); // { x: 3, y: 0 }
console.log(createPoint()); // { x: 0, y: 0 }
