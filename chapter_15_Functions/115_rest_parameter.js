// 115_rest_parameter.js
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
// Use the syntax ...name in the function definition.

function sum(...numbers) {
    return numbers.reduce((total, value) => total + value, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50

function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}!`;
}

console.log(greet('Hello', 'Alice', 'Bob', 'Charlie')); // Hello Alice, Bob, Charlie!

function createList(title, ...items) {
    return {
        title,
        items,
    };
}

const shoppingList = createList('Shopping', 'Milk', 'Bread', 'Eggs');
console.log(shoppingList);
// { title: 'Shopping', items: ['Milk', 'Bread', 'Eggs'] }

// Rest parameters only work for the last parameter in the function signature.
function buildMessage(prefix, ...values) {
    return `${prefix}: ${values.join(' - ')}`;
}

console.log(buildMessage('Values', 10, 20, 30)); // Values: 10 - 20 - 30

// Summary:
// - Use ... before the last parameter name to gather remaining arguments into an array.
// - Rest parameters are useful when the number of inputs is not fixed.
// - Rest parameters are different from the spread operator, although they use the same syntax.
