// 29_backtick_singlequote_doublequote.js
// Simple examples for single quote, double quote, and backtick

// 1) Single quote string
const singleQuoteText = 'I am learning JavaScript';
console.log('Single quote:', singleQuoteText);

// 2) Double quote string
const doubleQuoteText = "Playwright is useful for testing";
console.log('Double quote:', doubleQuoteText);

// 3) Backtick string (template literal)
const firstName = 'Praveen';
const tool = 'Playwright';
const backtickText = `My name is ${firstName} and I use ${tool}`;
console.log('Backtick:', backtickText);

// Multi-line text is easy with backticks
const multiLine = `Line 1: Hello
Line 2: Welcome
Line 3: Keep practicing`;
console.log('Multi-line with backtick:\n' + multiLine);

// Difference summary
console.log('\nDifference:');
console.log('1) Single quote and double quote are mostly the same for normal strings.');
console.log('2) Backtick supports variable interpolation using ${} (template literals).');
console.log('3) Backtick supports multi-line strings directly without \\n.');

// Quick comparison examples
const name = 'Praveen';
const singleOrDouble = 'Hello ' + name; // concatenation needed
const backtickVersion = `Hello ${name}`; // interpolation

console.log('Concatenation (single/double):', singleOrDouble);
console.log('Interpolation (backtick):', backtickVersion);
