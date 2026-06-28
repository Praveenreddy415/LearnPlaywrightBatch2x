// Array join() example
// join() combines all items in an array into a single string.

const words = ["JavaScript", "is", "fun"];

// Default separator is comma
const commaJoined = words.join();
console.log("Default join():", commaJoined); // JavaScript,is,fun

// Use a space separator to make a normal sentence
const spaceJoined = words.join(" ");
console.log("join(' '):", spaceJoined); // JavaScript is fun

// Use a dash separator to make a slug-style string
const dashJoined = words.join("-");
console.log("join('-'):", dashJoined); // JavaScript-is-fun

// Use an empty string to glue everything together
const gluedTogether = words.join("");
console.log("join(''):", gluedTogether); // JavaScriptisfun

// join() also works with mixed arrays
const mixed = [1, 2, 3, "apples"];
console.log("Mixed array join:", mixed.join(" | ")); // 1 | 2 | 3 | apples

// Summary:
// - join() turns an array into one string.
// - The argument is the separator between items.
// - If you omit the separator, arrays are joined with commas.
