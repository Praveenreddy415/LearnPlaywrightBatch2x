// == vs === in JavaScript
// ========================
// ==  (Loose Equality)  → compares VALUE only, converts types
// === (Strict Equality) → compares VALUE + TYPE, no conversion

// -----------------------------------------------
// Example 1: Number vs String
// -----------------------------------------------
console.log(5 == "5");   // true  → "5" is converted to number 5
console.log(5 === "5");  // false → number vs string → not same type

// -----------------------------------------------
// Example 2: Number vs Boolean
// -----------------------------------------------
console.log(1 == true);   // true  → true is converted to 1
console.log(1 === true);  // false → number vs boolean

console.log(0 == false);  // true  → false is converted to 0
console.log(0 === false); // false → number vs boolean

// -----------------------------------------------
// Example 3: null and undefined
// -----------------------------------------------
console.log(null == undefined);   // true  → special JS rule
console.log(null === undefined);  // false → different types

// -----------------------------------------------
// Example 4: Same type and value
// -----------------------------------------------
console.log(10 == 10);    // true
console.log(10 === 10);   // true  → same value AND same type

// -----------------------------------------------
// Summary Table
// -----------------------------------------------
// Expression         ==       ===
// 5   == "5"        true     false
// 1   == true       true     false
// 0   == false      true     false
// null == undefined true     false
// 10  == 10         true     true

// -----------------------------------------------
// Best Practice
// -----------------------------------------------
// Always use === (strict equality) in real projects
// It avoids unexpected results caused by type conversion

let userInput = "5";
let expected = 5;

if (userInput == expected) {
    console.log("== passed");   // runs (bad practice)
}

if (userInput === expected) {
    console.log("=== passed");  // does NOT run (correct behavior)
} else {
    console.log("Types are different! Use === carefully.");
}
