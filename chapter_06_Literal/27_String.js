// ============================================================
// STRINGS IN JAVASCRIPT
// ============================================================
// A string is a sequence of characters (text)
// Strings are created using quotes: "", '', or backticks ``
// Strings are IMMUTABLE (cannot be changed once created)
// ============================================================

// ---- Example 1: Creating Strings with Different Quotes ----
console.log("--- Example 1: String Creation ---");

const str1 = "Hello World";        // Double quotes
const str2 = 'Hello World';        // Single quotes
const str3 = `Hello World`;        // Backticks (template literal)

console.log("Double quotes:", str1);    // Hello World
console.log("Single quotes:", str2);    // Hello World
console.log("Backticks:", str3);        // Hello World

// All three are equivalent
console.log("str1 === str2:", str1 === str2);  // true

// ---- Example 2: String with Special Characters ----
console.log("\n--- Example 2: Special Characters ---");

// Escape sequences
const newline = "Hello\nWorld";     // \n = newline
const tab = "Name\tAge";            // \t = tab
const quote = "He said \"Hello\"";  // \" = double quote
const backslash = "Path: C:\\Users"; // \\ = backslash

console.log("Newline:");
console.log(newline);

console.log("\nTab:");
console.log(tab);

console.log("\nQuote inside string:", quote);
console.log("Backslash:", backslash);

// ---- Example 3: String Length ----
console.log("\n--- Example 3: String Length ---");

const message = "JavaScript";
console.log("Message:", message);
console.log("Length:", message.length);  // 10

const empty = "";
console.log("Empty string length:", empty.length);  // 0

// ---- Example 4: Accessing Individual Characters ----
console.log("\n--- Example 4: Accessing Characters ---");

const word = "Hello";
console.log("Word:", word);

// Using bracket notation (like array index)
console.log("Character at index 0:", word[0]);   // H
console.log("Character at index 1:", word[1]);   // e
console.log("Character at index 4:", word[4]);   // o

// Using charAt() method
console.log("charAt(0):", word.charAt(0));   // H
console.log("charAt(2):", word.charAt(2));   // l

// ---- Example 5: String Concatenation ----
console.log("\n--- Example 5: String Concatenation ---");

const firstName = "John";
const lastName = "Doe";

// Method 1: Using + operator
const fullName1 = firstName + " " + lastName;
console.log("Concatenated:", fullName1);  // John Doe

// Method 2: Using += operator
let result = "Hello";
result += " ";
result += "World";
console.log("Using +=:", result);  // Hello World

// Method 3: Using concat() method
const fullName2 = firstName.concat(" ", lastName);
console.log("Using concat():", fullName2);  // John Doe

// ---- Example 6: Template Literals (Modern Way) ----
console.log("\n--- Example 6: Template Literals ---");

const name = "Alice";
const age = 25;
const city = "New York";

// Template literal with ${} expressions
const intro = `My name is ${name}, I am ${age} years old, and I live in ${city}`;
console.log(intro);
// Output: My name is Alice, I am 25 years old, and I live in New York

// Arithmetic in template literals
const x = 10, y = 20;
const math = `${x} + ${y} = ${x + y}`;
console.log(math);  // 10 + 20 = 30

// Multi-line template literal
const multiline = `
    Line 1
    Line 2
    Line 3
`;
console.log("Multiline string:");
console.log(multiline);

// ---- Example 7: String Methods ----
console.log("\n--- Example 7: Common String Methods ---");

const text = "JavaScript";

// toUpperCase() - convert to uppercase
console.log("toUpperCase():", text.toUpperCase());  // JAVASCRIPT

// toLowerCase() - convert to lowercase
console.log("toLowerCase():", text.toLowerCase());  // javascript

// substring() - extract part of string
console.log("substring(0, 4):", text.substring(0, 4));  // Java

// slice() - similar to substring
console.log("slice(4, 10):", text.slice(4, 10));  // Script

// indexOf() - find position of character
console.log("indexOf('S'):", text.indexOf('S'));  // 4

// includes() - check if string contains text
console.log("includes('Java'):", text.includes('Java'));  // true
console.log("includes('Python'):", text.includes('Python'));  // false

// startsWith() - check if string starts with text
console.log("startsWith('Java'):", text.startsWith('Java'));  // true

// endsWith() - check if string ends with text
console.log("endsWith('Script'):", text.endsWith('Script'));  // true

// ---- Example 8: String Trimming and Replacement ----
console.log("\n--- Example 8: Trimming and Replacement ---");

const messy = "   Hello World   ";
console.log("Original:", `'${messy}'`);
console.log("trim():", `'${messy.trim()}'`);  // Remove spaces

const sentence = "I love JavaScript";
const replaced = sentence.replace("JavaScript", "Python");
console.log("Original:", sentence);
console.log("replace():", replaced);  // I love Python

// Replace all occurrences (using replaceAll)
const repeated = "cat cat cat";
console.log("replaceAll():", repeated.replaceAll("cat", "dog"));  // dog dog dog

// ---- Example 9: String Splitting and Joining ----
console.log("\n--- Example 9: Split and Join ---");

// split() - convert string to array
const csv = "apple,banana,cherry";
const fruits = csv.split(",");
console.log("split(','):", fruits);  // ['apple', 'banana', 'cherry']

// Join array back to string
const joined = fruits.join(" | ");
console.log("join(' | '):", joined);  // apple | banana | cherry

// Split by spaces
const words = "Hello World JavaScript".split(" ");
console.log("Words:", words);  // ['Hello', 'World', 'JavaScript']

// ---- Example 10: String Comparison ----
console.log("\n--- Example 10: String Comparison ---");

const str_a = "apple";
const str_b = "apple";
const str_c = "Apple";

console.log("'apple' === 'apple':", str_a === str_b);    // true
console.log("'apple' === 'Apple':", str_a === str_c);    // false (case-sensitive)
console.log("'apple' == 'apple':", str_a == str_b);      // true

// Alphabetical comparison
console.log("'apple' < 'banana':", "apple" < "banana");  // true
console.log("'zebra' > 'apple':", "zebra" > "apple");    // true

// ---- Example 11: String Immutability ----
console.log("\n--- Example 11: String Immutability ---");

let original = "Hello";
console.log("Original string:", original);

// Strings cannot be changed (immutable)
// original[0] = "J"; // This won't work

// But we can create a new string
const modified = "J" + original.slice(1);
console.log("Modified string:", modified);  // Jello
console.log("Original still:", original);   // Hello (unchanged)

// ---- Example 12: Real-world String Examples ----
console.log("\n--- Example 12: Real-world Examples ---");

// Email validation simple check
const email = "user@example.com";
console.log("Contains '@':", email.includes("@"));     // true
console.log("Contains '.':", email.includes("."));     // true

// URL processing
const url = "https://www.google.com/search?q=javascript";
console.log("URL:", url);
console.log("Starts with https:", url.startsWith("https"));  // true
console.log("Length:", url.length);

// User greeting
const user = "Alice";
const greeting = `Welcome back, ${user}! You have 5 new messages.`;
console.log(greeting);

// ---- Example 13: String Methods Chaining ----
console.log("\n--- Example 13: Method Chaining ---");

const input = "  hello world  ";

// Chain multiple methods
const result2 = input
    .trim()                    // Remove spaces
    .toUpperCase()            // Convert to uppercase
    .replace("WORLD", "JAVASCRIPT");

console.log("Chained result:", result2);  // HELLO JAVASCRIPT

// ---- Example 14: String Repetition ----
console.log("\n--- Example 14: String Repetition ---");

const dash = "-".repeat(10);
console.log(dash);  // ----------

const star = "⭐".repeat(5);
console.log(star);  // ⭐⭐⭐⭐⭐

// Useful for formatting
console.log("Name".padEnd(20, "."));  // Name................
console.log("Score".padStart(10, " "));  //      Score

// ---- Summary ----
console.log("\n--- SUMMARY: String Operations ---");
console.log(`
STRING CREATION:
• "double quotes"
• 'single quotes'
• \`template literals with \${expressions}\`

STRING LENGTH:
• str.length

ACCESSING CHARACTERS:
• str[0], str[1], ...
• str.charAt(0)

STRING METHODS:
• toUpperCase(), toLowerCase()
• slice(), substring()
• indexOf(), includes()
• startsWith(), endsWith()
• trim(), replace(), replaceAll()
• split(), join()
• repeat(), padStart(), padEnd()

IMPORTANT:
✓ Strings are IMMUTABLE (cannot be changed)
✓ Use === for comparison (case-sensitive)
✓ Use template literals for complex strings
✓ Methods return NEW strings (don't modify original)
`);
