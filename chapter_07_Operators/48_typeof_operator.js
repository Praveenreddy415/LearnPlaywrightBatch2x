// typeof Operator in JavaScript
// ==============================
// typeof returns a STRING that indicates the data type
// Syntax: typeof value

// -----------------------------------------------
// 1. Basic Data Types
// -----------------------------------------------
console.log("--- Basic Data Types ---");

console.log(typeof 42);              // "number"
console.log(typeof 3.14);            // "number"
console.log(typeof "hello");         // "string"
console.log(typeof true);            // "boolean"
console.log(typeof false);           // "boolean"
console.log(typeof undefined);       // "undefined"

// -----------------------------------------------
// 2. Objects and Arrays
// -----------------------------------------------
console.log("--- Objects and Arrays ---");

let obj = { name: "John" };
console.log(typeof obj);             // "object"

let arr = [1, 2, 3];
console.log(typeof arr);             // "object"  ← arrays are objects!

let nullValue = null;
console.log(typeof nullValue);       // "object"  ← historic JS bug!

// -----------------------------------------------
// 3. Functions
// -----------------------------------------------
console.log("--- Functions ---");

function myFunction() {
    return "Hello";
}
console.log(typeof myFunction);      // "function"

let arrow = () => "Arrow function";
console.log(typeof arrow);           // "function"

// -----------------------------------------------
// 4. Variables with Different Values
// -----------------------------------------------
console.log("--- Variable Values ---");

let x = 10;
console.log(typeof x);               // "number"

x = "string";
console.log(typeof x);               // "string"  ← type changed!

x = true;
console.log(typeof x);               // "boolean" ← type changed again!

// -----------------------------------------------
// 5. Practical Example: Type Checking
// -----------------------------------------------
console.log("--- Type Checking ---");

function printInfo(value) {
    let type = typeof value;

    if (type === "string") {
        console.log("String length:", value.length);
    } else if (type === "number") {
        console.log("Number doubled:", value * 2);
    } else if (type === "boolean") {
        console.log("Boolean not:", !value);
    } else {
        console.log("Type:", type);
    }
}

printInfo("hello");     // String length: 5
printInfo(10);          // Number doubled: 20
printInfo(true);        // Boolean not: false

// -----------------------------------------------
// 6. Common typeof Results
// -----------------------------------------------
console.log("--- All typeof Results ---");

let demo = {};
console.log(typeof 100);             // "number"
console.log(typeof "text");          // "string"
console.log(typeof true);            // "boolean"
console.log(typeof Symbol());        // "symbol"
console.log(typeof 10n);             // "bigint"
console.log(typeof {});             // "object"
console.log(typeof []);             // "object"
console.log(typeof null);            // "object" (BUG)
console.log(typeof undefined);       // "undefined"
console.log(typeof function () { }); // "function"

// -----------------------------------------------
// 7. Important Gotchas
// -----------------------------------------------
console.log("--- Gotchas ---");

// Array is object, not "array"
console.log(typeof [1, 2, 3]);       // "object"

// null is object (historic bug - cannot be changed)
console.log(typeof null);            // "object" ← NOT null!

// NaN is number type (even though it means "Not a Number")
console.log(typeof NaN);             // "number"

// undefined variable
console.log(typeof nonExistent);     // "undefined" ← no error!

// -----------------------------------------------
// 8. Real-world Use Case: Input Validation
// -----------------------------------------------
console.log("--- Input Validation ---");

function add(a, b) {
    // Check if both are numbers
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return "Error: both inputs must be numbers";
    }
}

console.log(add(5, 10));          // 15
console.log(add(5, "10"));        // Error: both inputs must be numbers
console.log(add("5", 10));        // Error: both inputs must be numbers

// -----------------------------------------------
// 9. Checking for Existence
// -----------------------------------------------
console.log("--- Existence Checks ---");

let user = null;

// Safe way to check - won't throw error
if (typeof user === "undefined") {
    console.log("User not defined");
} else if (user === null) {
    console.log("User is null");
}

// -----------------------------------------------
// Summary
// -----------------------------------------------
// typeof returns a STRING indicating data type:
// ✓ "number"      → 42, 3.14, NaN
// ✓ "string"      → "hello"
// ✓ "boolean"     → true, false
// ✓ "object"      → {}, [], null
// ✓ "function"    → function() {}, () => {}
// ✓ "undefined"   → undefined
// ✓ "symbol"      → Symbol()
// ✓ "bigint"      → 10n
//
// GOTCHAS:
// ✗ typeof null     → "object" (not "null")
// ✗ typeof []       → "object" (not "array")
// ✗ typeof NaN      → "number" (not "NaN")
