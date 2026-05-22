// ============================================================
// LITERALS IN JAVASCRIPT
// ============================================================
// A literal is a fixed VALUE written directly in your code
// Examples: 42, "hello", true, [1,2,3], {name: "Bob"}
// NOT a variable — the actual value itself
// ============================================================

// ---- Example 1: STRING LITERALS ----
console.log("--- Example 1: String Literals ---");

// String literals can use single or double quotes
const name1 = "Alice";           // Double quotes
const name2 = 'Bob';             // Single quotes
const sentence = "Hello, World!"; // String literal

console.log(name1);      // Alice
console.log(name2);      // Bob
console.log(sentence);   // Hello, World!

// ---- Example 2: NUMERIC LITERALS ----
console.log("\n--- Example 2: Numeric Literals ---");

const integer = 42;           // Integer literal
const decimal = 3.14;         // Decimal literal
const negative = -10;         // Negative literal
const scientific = 1.5e3;     // Scientific notation (1500)
const hexadecimal = 0xFF;     // Hex literal (255)

console.log("Integer:", integer);           // 42
console.log("Decimal:", decimal);           // 3.14
console.log("Negative:", negative);         // -10
console.log("Scientific:", scientific);     // 1500
console.log("Hex:", hexadecimal);           // 255

// ---- Example 3: BOOLEAN LITERALS ----
console.log("\n--- Example 3: Boolean Literals ---");

const isActive = true;      // Boolean literal true
const isDeleted = false;    // Boolean literal false
const isEmpty = true;       // Boolean literal

console.log("isActive:", isActive);     // true
console.log("isDeleted:", isDeleted);   // false
console.log("isEmpty:", isEmpty);       // true

// ---- Example 4: ARRAY LITERALS ----
console.log("\n--- Example 4: Array Literals ---");

const fruits = ["apple", "banana", "cherry"]; // Array literal
const numbers = [1, 2, 3, 4, 5];             // Number array literal
const mixed = [10, "hello", true, null];     // Mixed types
const empty = [];                            // Empty array literal

console.log("Fruits:", fruits);       // ["apple", "banana", "cherry"]
console.log("Numbers:", numbers);     // [1, 2, 3, 4, 5]
console.log("Mixed:", mixed);         // [10, "hello", true, null]
console.log("Empty:", empty);         // []
console.log("First fruit:", fruits[0]); // apple

// ---- Example 5: OBJECT LITERALS ----
console.log("\n--- Example 5: Object Literals ---");

const person = {
    name: "John",      // String literal value
    age: 30,           // Number literal value
    isStudent: false   // Boolean literal value
};

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2023
};

const empty_obj = {}; // Empty object literal

console.log("Person:", person);
console.log("Person name:", person.name);
console.log("Car:", car);
console.log("Empty object:", empty_obj);

// ---- Example 6: TEMPLATE LITERALS (Backticks) ----
console.log("\n--- Example 6: Template Literals ---");

const firstName = "Alice";
const age = 25;

// Template literal with expressions
const message = `Hello, my name is ${firstName} and I am ${age} years old`;
console.log(message); // Hello, my name is Alice and I am 25 years old

// Multi-line template literal
const multiline = `
This is a multi-line
string using backticks
Very convenient!
`;
console.log(multiline);

// ---- Example 7: NULL and UNDEFINED LITERALS ----
console.log("\n--- Example 7: null and undefined Literals ---");

let value1 = null;      // null literal (intentional nothing)
let value2;             // undefined (default for uninitialized)
let value3 = undefined; // undefined literal (explicitly set)

console.log("null value:", value1);        // null
console.log("undefined (uninitialized):", value2); // undefined
console.log("undefined literal:", value3);  // undefined
console.log("typeof null:", typeof value1);     // "object" (quirk)
console.log("typeof undefined:", typeof value2); // "undefined"

// ---- Example 8: REGULAR EXPRESSION LITERALS ----
console.log("\n--- Example 8: Regular Expression Literals ---");

const pattern1 = /hello/;           // Simple regex literal
const pattern2 = /[0-9]+/;          // Regex for numbers
const pattern3 = /\b\w+\b/g;        // Word pattern with flags
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email pattern

console.log("Pattern 1:", pattern1);
console.log("Pattern 2:", pattern2);
console.log("Pattern 3:", pattern3);

// Using regex with string methods
const text = "hello world";
console.log("Match 'hello':", text.match(/hello/));  // Found
console.log("Match 'xyz':", text.match(/xyz/));      // null (not found)

// ---- Example 9: COMPLEX NESTED LITERALS ----
console.log("\n--- Example 9: Complex Nested Literals ---");

const company = {
    name: "TechCorp",
    founded: 2010,
    employees: [
        { name: "Alice", role: "Manager" },
        { name: "Bob", role: "Developer" },
        { name: "Charlie", role: "Designer" }
    ],
    isPublic: true,
    locations: ["New York", "London", "Tokyo"]
};

console.log("Company:", company);
console.log("First employee:", company.employees[0]);
console.log("First location:", company.locations[0]);

// ---- Example 10: COMPARING LITERALS vs VARIABLES ----
console.log("\n--- Example 10: Literal vs Variable ---");

// LITERALS - the actual values
console.log(42);              // Literal 42
console.log("Hello");         // Literal "Hello"
console.log(true);            // Literal true
console.log([1, 2, 3]);       // Literal array
console.log({ x: 10 });         // Literal object

// VARIABLES - reference to values
const myNumber = 42;          // Variable containing literal 42
const myString = "Hello";     // Variable containing literal "Hello"
const myArray = [1, 2, 3];    // Variable containing literal array

console.log(myNumber);        // 42 (from variable)
console.log(myString);        // Hello (from variable)
console.log(myArray);         // [1, 2, 3] (from variable)

// ---- Example 11: PRACTICAL EXAMPLES ----
console.log("\n--- Example 11: Real-world Literals ---");

// API Response with various literals
const apiResponse = {
    status: 200,                    // Number literal
    success: true,                  // Boolean literal
    message: "User created",        // String literal
    user: {
        id: 1,
        email: "user@example.com",
        createdAt: "2024-05-21",
        isVerified: false,
        roles: ["user", "moderator"]
    },
    data: null                      // null literal
};

console.log("API Response:", apiResponse);
console.log("Status:", apiResponse.status);        // 200
console.log("Success:", apiResponse.success);      // true
console.log("User roles:", apiResponse.user.roles); // ["user", "moderator"]

// ---- Example 12: SHORTHAND OBJECT LITERALS ----
console.log("\n--- Example 12: Shorthand Object Literals ---");

const productName = "Laptop";
const productPrice = 999;
const inStock = true;

// Shorthand property syntax (ES6+)
const product = {
    productName,  // Same as productName: productName
    productPrice, // Same as productPrice: productPrice
    inStock       // Same as inStock: inStock
};

console.log("Product:", product);

// ---- Summary ----
console.log("\n--- SUMMARY: Types of Literals ---");
console.log(`
1. STRING LITERALS
   "hello" or 'hello'
   Template literals: \`hello \${name}\`

2. NUMBER LITERALS
   42, 3.14, -10, 0xFF (hex), 1.5e3 (scientific)

3. BOOLEAN LITERALS
   true, false

4. ARRAY LITERALS
   [1, 2, 3], ["a", "b"], []

5. OBJECT LITERALS
   {name: "John", age: 30}, {}

6. NULL LITERAL
   null (intentional nothing)

7. UNDEFINED LITERAL
   undefined

8. REGEX LITERALS
   /pattern/, /[0-9]+/g

KEY POINT: A literal is the ACTUAL VALUE written in code,
not a variable that holds a value.
`);
