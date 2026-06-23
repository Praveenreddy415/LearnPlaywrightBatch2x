// 121_pure_function.js
// Pure function explanation and examples
// Simple explanation (5th grade):
// - A pure function is like a magic machine that gives the same toy
//   every time if you put in the same ingredients.
// - It doesn't change anything outside the machine (no surprises).
// - If you give it the same inputs, you always get the same output.
// A pure function always returns the same result given the same inputs
// and has no observable side effects (doesn't modify external state).

// Pure function: adds two numbers
function add(a, b) {
    return a + b;
}
console.log('add(2,3):', add(2, 3)); // 5

// Pure function: returns a new array without mutating the input
function addItem(items, newItem) {
    return [...items, newItem];
}
const list = [1, 2, 3];
const newList = addItem(list, 4);
console.log('original list:', list); // [1,2,3]
console.log('new list:', newList); // [1,2,3,4]

// Impure function examples (have side effects or depend on external state)
let counter = 0;
function increment() {
    // Mutates external variable -> impure
    counter += 1;
    return counter;
}
console.log('increment():', increment());
console.log('increment():', increment());

function getRandom() {
    // Depends on external source Math.random() -> impure
    return Math.random();
}
console.log('getRandom():', getRandom());

function pushItem(items, val) {
    // Mutates the passed array -> impure
    items.push(val);
    return items;
}
const arr = [10, 20];
console.log('pushItem result:', pushItem(arr, 30));
console.log('array after pushItem (mutated):', arr);

// Why prefer pure functions?
// - Easier to test (deterministic)
// - Easier to reason about and debug
// - Facilitate functional programming patterns like memoization

// Quick memoization example for a pure function
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}
const slowAdd = (a, b) => {
    // pretend this is expensive
    return a + b;
};
const fastAdd = memoize(slowAdd);
console.log('fastAdd(2,3):', fastAdd(2, 3));
console.log('fastAdd(2,3) cached:', fastAdd(2, 3));
