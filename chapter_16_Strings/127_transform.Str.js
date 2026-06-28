let str = "  Hello, World! ";
let upperCaseStr = str.toUpperCase(); // Converts to "HELLO WORLD"
console.log(upperCaseStr); // "HELLO WORLD"

const lowerCaseStr = str.toLowerCase(); // Converts to "hello world"
console.log(lowerCaseStr); // "hello world"

const trimmedStr = str.trim(); // Removes leading and trailing whitespace
console.log(trimmedStr); // "Hello, World!"

const startTrimmedStr = str.trimStart(); // Removes leading whitespace
console.log(startTrimmedStr); // "Hello, World! "

const endTrimmedStr = str.trimEnd(); // Removes trailing whitespace
console.log(endTrimmedStr); // "  Hello, World!"