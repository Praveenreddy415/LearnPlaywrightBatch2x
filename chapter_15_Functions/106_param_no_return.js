// 106_param_no_return.js
// This file explains a function with parameters and no return value.

// A function can accept input values called parameters.
// When the function does not explicitly return a value, it returns undefined.
// Such functions are often used to perform actions like logging, updating data, or modifying state.

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('Alice'); // Hello, Alice!

// The function has a parameter 'name' but no return statement.
// If we check the return value, it will be undefined.
const result = greet('Bob');
console.log('Return value:', result); // undefined

// Another example: a function that prints a message using parameters.
function showUserInfo(username, age) {
    console.log(`User: ${username}, Age: ${age}`);
}

showUserInfo('Charlie', 28); // User: Charlie, Age: 28

// A function with no return type is useful for side effects.
// Examples of side effects: console output, updating DOM, writing to a file, or changing variables.
