// ===== CONST EXPLANATION =====
// const stands for "constant" - a variable that CANNOT be reassigned
// Once you assign a value to const, you can't change it

// ===== BASIC EXAMPLE =====
const PI = 3.14159;
console.log(PI); // Output: 3.14159

// Try to reassign - THIS WILL CAUSE ERROR
// const PI = 3.14; // TypeError: Assignment to constant variable

// ===== WHY USE CONST? =====
// Use const for values that should NOT change
const MAX_USERS = 100;
const WEBSITE_NAME = "My Blog";
const STUDENT_ID = 12345;

console.log(MAX_USERS);      // 100
console.log(WEBSITE_NAME);   // My Blog
console.log(STUDENT_ID);     // 12345

// ===== SIMPLE REAL-WORLD EXAMPLES =====

// Example 1: Store a person's details
const personName = "John";
const personAge = 25;
const personCity = "New York";

console.log(personName);  // John
console.log(personAge);   // 25
console.log(personCity);  // New York

// Example 2: Store configuration settings
const appVersion = "1.0.0";
const debugMode = true;
const timeoutValue = 5000;

console.log(appVersion);   // 1.0.0
console.log(debugMode);    // true
console.log(timeoutValue); // 5000

// ===== CONST WITH OBJECTS (CAN MODIFY PROPERTIES) =====
// You CANNOT reassign const, but you CAN modify object properties
const user = { name: "Alice", age: 30 };
console.log(user); // { name: 'Alice', age: 30 }

// ✓ This works - modifying property
user.age = 31;
console.log(user); // { name: 'Alice', age: 31 }

// ✗ This WON'T work - reassigning the variable
// user = { name: "Bob", age: 25 }; // TypeError: Assignment to constant variable

// ===== CONST WITH ARRAYS (CAN MODIFY ELEMENTS) =====
// Similar to objects, you can modify array elements
const numbers = [1, 2, 3];
console.log(numbers); // [1, 2, 3]

// ✓ This works - modifying element
numbers[0] = 10;
console.log(numbers); // [10, 2, 3]

// ✓ This works - adding element
numbers.push(4);
console.log(numbers); // [10, 2, 3, 4]

// ✗ This WON'T work - reassigning the variable
// numbers = [5, 6, 7]; // TypeError: Assignment to constant variable

// ===== KEY POINTS ABOUT CONST =====
/*
1. CANNOT be reassigned (will throw error)
2. MUST be initialized when declared
3. Block-scoped (like let)
4. Object/Array contents CAN be modified
5. Best practice: Use const by default
*/

// ===== COMPARISON: const vs let vs var =====

// const - NO reassignment, block-scoped, must initialize
const fixedValue = 100;

// let - CAN reassign, block-scoped, optional initialization
let changeableValue = 100;
changeableValue = 200; // ✓ Works

// var - CAN reassign, function-scoped, optional initialization
var oldValue = 100;
oldValue = 200; // ✓ Works

console.log("=== Final Example ===");
const productName = "Laptop";
const productPrice = 999;
const isAvailable = true;

console.log(`Product: ${productName}`);
console.log(`Price: $${productPrice}`);
console.log(`Available: ${isAvailable}`);
