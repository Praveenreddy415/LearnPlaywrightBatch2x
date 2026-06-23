// 111_arrow_function.js
// Arrow functions provide a shorter syntax for writing functions in JavaScript.
// They are especially useful for simple functions and callbacks.

// 1. Basic arrow function
const greet = name => `Hello, ${name}!`;
console.log(greet('Alice')); // Hello, Alice!

// 2. Arrow function with multiple parameters
const add = (a, b) => a + b;
console.log(add(5, 7)); // 12

// 3. Arrow function with a block body
const multiply = (x, y) => {
    const result = x * y;
    return result;
};
console.log(multiply(4, 6)); // 24

// 4. Arrow function as a callback
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8]

// 5. Arrow function with no parameters
const sayHello = () => 'Hello!';
console.log(sayHello()); // Hello!

// Summary:
// - Arrow functions use => after the parameter list.
// - If the body is a single expression, the value is returned automatically.
// - They are concise and ideal for small functions.
// - Arrow functions do not have their own "this" binding.
