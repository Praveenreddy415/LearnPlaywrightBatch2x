// Ternary Operator in JavaScript
// ================================
// The ternary operator is a SHORT form of if/else
// It takes 3 parts → that's why it's called "ternary"

// Syntax:
// condition ? valueIfTrue : valueIfFalse

// -----------------------------------------------
// Example 1: Basic if/else vs Ternary
// -----------------------------------------------

let age = 20;

// Using if/else
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Same thing using Ternary ✓
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);   // Adult

// -----------------------------------------------
// Example 2: Even or Odd
// -----------------------------------------------
let num = 7;
let type = num % 2 === 0 ? "Even" : "Odd";
console.log(type);   // Odd

// -----------------------------------------------
// Example 3: Pass or Fail
// -----------------------------------------------
let marks = 45;
let status = marks >= 50 ? "Pass" : "Fail";
console.log(status);  // Fail

// -----------------------------------------------
// Example 4: Assign a default value
// -----------------------------------------------
let username = "";
let displayName = username ? username : "Guest";
console.log(displayName);  // Guest  (username is empty → falsy)

// -----------------------------------------------
// Example 5: Nested Ternary (use carefully)
// -----------------------------------------------
let score = 72;

let grade = score >= 90 ? "A"
    : score >= 75 ? "B"
        : score >= 50 ? "C"
            : "F";

console.log(grade);  // C

// -----------------------------------------------
// Ternary vs if/else — When to use which?
// -----------------------------------------------
// Use Ternary → simple one-line condition, assigning a value
// Use if/else → complex logic, multiple statements
