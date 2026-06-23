// 108_with_param_with_return.js
// This example explains a function that accepts parameters and returns a value.

// A function can receive one or more parameters, perform an operation, and return the result.
// The returned value can be used later in the code.

function multiply(a, b) {
    return a * b;
}

const product = multiply(6, 7);
console.log('Product:', product); // Product: 42

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const fullName = getFullName('John', 'Doe');
console.log('Full name:', fullName); // Full name: John Doe

function convertToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

console.log('32°F in Celsius:', convertToCelsius(32)); // 0
console.log('68°F in Celsius:', convertToCelsius(68)); // 20

// Summary:
// - The function takes parameters as input.
// - It uses those parameters to compute a result.
// - It returns the result with the return statement.
