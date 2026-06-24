// 107_no_param_with_return.js
// This file explains a function with no parameters that returns a value.

// A function can return a value without accepting any input parameters.
// Such functions are useful when the result depends on internal logic or fixed values.

function getCurrentYear() {
    return new Date().getFullYear();
}

const year = getCurrentYear();
console.log('Current year:', year); // e.g. Current year: 2026

// Another example: a function that returns a fixed welcome message.
function getWelcomeMessage() {
    return 'Welcome to JavaScript functions!';
}

const message = getWelcomeMessage();
console.log(message); // Welcome to JavaScript functions!

// Example with internal calculation and no parameters.
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

console.log('Random number:', getRandomNumber());

// Summary:
// - The function has no parameters.
// - It performs internal work or uses fixed values.
// - It returns a value using the return statement.
