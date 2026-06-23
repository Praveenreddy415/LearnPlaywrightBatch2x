// 110_function_expression.js
// Function Expression example in JavaScript
// A function expression defines a function inside a variable or constant.
// Unlike function declarations, function expressions are not hoisted in the same way.

const greet = function (name) {
    return `Hello, ${name}!`;
};

console.log(greet('Alice')); // Hello, Alice!

// Function expressions can be anonymous or named.
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 7)); // 12

// Function expressions are often used for callbacks.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function (number) {
    return number * 2;
});
console.log(doubled); // [2, 4, 6, 8]

// A named function expression can help with debugging.
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};
console.log(factorial(5)); // 120

// Summary:
// - A function expression assigns a function to a variable.
// - It can be anonymous or named.
// - It is useful for callbacks and keeping functions local.
// - It is evaluated at runtime, so it is not available before the expression is defined.
