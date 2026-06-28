// String includes() and startsWith() examples

const message = "JavaScript string methods are useful.";

// includes() checks if a substring exists anywhere in the string
const hasStringMethods = message.includes("string methods");
console.log("includes('string methods'):", hasStringMethods); // true

const hasPython = message.includes("Python");
console.log("includes('Python'):", hasPython); // false

// startsWith() checks if the string begins with the given substring
const startsWithJavaScript = message.startsWith("JavaScript");
console.log("startsWith('JavaScript'):", startsWithJavaScript); // true

const startsWithMethods = message.startsWith("methods");
console.log("startsWith('methods'):", startsWithMethods); // false

// startsWith() can also accept a position index
const startsWithString = message.startsWith("string", 11);
console.log("startsWith('string', 11):", startsWithString); // true

// if the search text is empty, includes() returns true, startsWith() returns true
console.log("includes(''):", message.includes("")); // true
console.log("startsWith(''):", message.startsWith("")); // true
