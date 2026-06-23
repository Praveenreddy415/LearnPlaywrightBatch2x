// 120_Higherorderfunction.js
// Higher-order functions (HOFs) are functions that can take other functions
// as arguments and/or return functions. They are a core concept in functional
// programming and are widely used in JavaScript (e.g., array methods).

// 1. HOF example: function that accepts a function (callback)
const numbers = [1, 2, 3, 4, 5];

// map is a built-in higher-order function: it accepts a callback
const doubled = numbers.map(function (n) {
    return n * 2;
});
console.log('Doubled (callback):', doubled); // [2,4,6,8,10]

// Using arrow function callback
const squared = numbers.map(n => n * n);
console.log('Squared (arrow callback):', squared); // [1,4,9,16,25]

// 2. HOF example: function that returns a function
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
console.log('add5(10):', add5(10)); // 15

const add10 = makeAdder(10);
console.log('add10(7):', add10(7)); // 17

// 3. HOF for composition: return a new function that composes two functions
function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
}

const double = n => n * 2;
const increment = n => n + 1;
const doubleThenIncrement = compose(increment, double);
console.log('doubleThenIncrement(3):', doubleThenIncrement(3)); // (3*2)+1 = 7

// 4. Common use: creating configurable utilities
function repeat(n, fn) {
    for (let i = 0; i < n; i++) fn(i);
}

repeat(3, i => console.log('repeat index:', i));

// 5. Practical example: logging wrapper (decorator-like HOF)
function withLogging(fn) {
    return function (...args) {
        console.log('Calling with args:', args);
        const result = fn(...args);
        console.log('Result:', result);
        return result;
    };
}

const sum = (a, b) => a + b;
const loggedSum = withLogging(sum);
loggedSum(4, 5); // logs args and result

// Summary:
// - Higher-order functions take functions as arguments and/or return functions.
// - They enable abstraction, composition, and reusable utilities.
// - Built-in array methods (map, filter, reduce) are examples of HOFs.
