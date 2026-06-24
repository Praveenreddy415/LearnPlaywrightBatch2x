// 01_strings_intro.js
// Strings are like words or sentences in code.
// They are made of letters, numbers, and symbols inside quotes.
// Think of a string as a sentence written on a piece of paper.

// 1. Create strings with single quotes
const name = 'Alice';
console.log('Name:', name);

// 2. Create strings with double quotes
const greeting = "Hello, world!";
console.log('Greeting:', greeting);

// 3. Combine strings using + (like putting two words together)
const message = 'Hello, ' + name + '!';
console.log('Message:', message);

// 4. Strings have a length (how many characters they have)
const phrase = 'JavaScript is fun';
console.log('Phrase length:', phrase.length); // 17

// 5. Get one character from a string by position
console.log('First letter:', phrase[0]); // J
console.log('Last letter:', phrase[phrase.length - 1]); // n

// 6. Change case of a string
console.log('Uppercase:', phrase.toUpperCase());
console.log('Lowercase:', phrase.toLowerCase());

// 7. Use template literals to build strings easily
const age = 10;
const about = `My name is ${name} and I am ${age} years old.`;
console.log(about);

// 8. Find where a word appears in a string
const sentence = 'I like apples and bananas.';
console.log('Index of apples:', sentence.indexOf('apples')); // 7

// 9. Use slice to get part of a string
console.log('First 5 letters:', sentence.slice(0, 5)); // I lik

// 5th grade friendly recap:
// - A string is text inside quotes.
// - Strings can be joined together like pieces of a sentence.
// - You can count letters, change uppercase/lowercase, and find words.
