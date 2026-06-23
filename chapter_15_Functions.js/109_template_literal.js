// 109_template_literal.js
// Template literals provide an easy way to create strings with embedded expressions.
// They use backticks (`) instead of quotes and support interpolation with ${ }.

const name = 'Alice';
const age = 25;

const message = `Hello, ${name}! You are ${age} years old.`;
console.log(message); // Hello, Alice! You are 25 years old.

// Template literals can include expressions directly.
const x = 10;
const y = 20;
const sumMessage = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(sumMessage); // The sum of 10 and 20 is 30.

// Template literals can span multiple lines without concatenation.
const multiLine = `This is line one.
This is line two.
This is line three.`;
console.log(multiLine);

// Use template literals for HTML fragments or formatted text.
const user = {
    firstName: 'John',
    lastName: 'Doe',
    score: 95,
};

const userCard = `Name: ${user.firstName} ${user.lastName}\nScore: ${user.score}`;
console.log(userCard);

// Summary:
// - Use backticks (`) to create a template literal.
// - Use ${expression} to insert values or expressions.
// - Multi-line strings are easier with template literals.
