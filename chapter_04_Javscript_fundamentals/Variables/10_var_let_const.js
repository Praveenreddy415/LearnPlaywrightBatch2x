// ============================================
// var, let, const IN JAVASCRIPT
// ============================================

/*
JavaScript has THREE ways to declare variables:

| Keyword | Scope         | Redeclare | Reassign | Hoisted |
|---------|---------------|-----------|----------|---------|
| var     | Function      | ✅ Yes    | ✅ Yes   | ✅ Yes  |
| let     | Block         | ❌ No     | ✅ Yes   | ❌ No   |
| const   | Block         | ❌ No     | ❌ No    | ❌ No   |
*/

// ============================================
// 1. VAR
// ============================================

console.log("===== VAR =====\n");

/*
var:
- Function-scoped (not limited to blocks like if/for)
- Can be REDECLARED in the same scope
- Can be REASSIGNED
- Gets HOISTED to the top of its function (but value is undefined)
- Older way — avoid using var in modern JavaScript
*/

// Basic declaration
var name = "John";
console.log("name:", name); // John

// Reassign ✅
name = "Alice";
console.log("After reassign:", name); // Alice

// Redeclare ✅ (No error)
var name = "Bob";
console.log("After redeclare:", name); // Bob

// Function scope example
function testVar() {
    var city = "New York";
    console.log("Inside function:", city); // New York
}
testVar();
// console.log(city); // ❌ Error: city is not defined outside function

// var LEAKS out of blocks (if, for, while)
if (true) {
    var leakyVar = "I leak outside the block!";
}
console.log("var block leak:", leakyVar); // ✅ Accessible — this is a problem!

// var hoisting example
console.log("Before declaration:", hoistedVar); // undefined (not an error!)
var hoistedVar = "I was hoisted";
console.log("After declaration:", hoistedVar); // I was hoisted


// ============================================
// 2. LET
// ============================================

console.log("\n===== LET =====\n");

/*
let:
- Block-scoped (limited to the block {})
- CANNOT be redeclared in the same scope
- CAN be reassigned
- NOT hoisted (Temporal Dead Zone — accessing before declaration causes error)
- RECOMMENDED for variables that change
*/

// Basic declaration
let age = 25;
console.log("age:", age); // 25

// Reassign ✅
age = 30;
console.log("After reassign:", age); // 30

// Redeclare ❌ (UNCOMMENT to see error)
// let age = 35; // SyntaxError: Identifier 'age' has already been declared

// Block scope — stays inside the block
if (true) {
    let blockAge = 40;
    console.log("Inside block:", blockAge); // 40
}
// console.log(blockAge); // ❌ ReferenceError: blockAge is not defined

// let in a for loop — each iteration has its own scope
for (let i = 0; i < 3; i++) {
    console.log("Loop i:", i); // 0, 1, 2
}
// console.log(i); // ❌ Error — i does not exist outside loop

// Practical example: counter
let score = 0;
score += 10;
score += 20;
console.log("Final score:", score); // 30


// ============================================
// 3. CONST
// ============================================

console.log("\n===== CONST =====\n");

/*
const:
- Block-scoped (same as let)
- CANNOT be redeclared
- CANNOT be reassigned
- Must be INITIALIZED at declaration
- RECOMMENDED for values that should not change
- Objects/Arrays declared with const can still be mutated (content changed)
*/

// Basic declaration
const PI = 3.14159;
console.log("PI:", PI); // 3.14159

// Reassign ❌ (UNCOMMENT to see error)
// PI = 3.14; // TypeError: Assignment to constant variable

// Redeclare ❌ (UNCOMMENT to see error)
// const PI = 3; // SyntaxError

// Must be initialized ❌ (UNCOMMENT to see error)
// const x; // SyntaxError: Missing initializer in const declaration

// Block scope — same as let
if (true) {
    const blockConst = "I am block scoped";
    console.log("Inside block:", blockConst);
}
// console.log(blockConst); // ❌ Error

// Practical use — fixed values
const MAX_USERS = 100;
const MIN_AGE = 18;
const API_URL = "https://api.example.com";
console.log("MAX_USERS:", MAX_USERS);
console.log("MIN_AGE:", MIN_AGE);
console.log("API_URL:", API_URL);

// const with OBJECTS — reference is fixed, but content can change ✅
const person = { name: "John", age: 25 };
console.log("Before:", person);

person.name = "Alice"; // ✅ Allowed — mutating the object
person.age = 30;       // ✅ Allowed
console.log("After mutation:", person);

// person = { name: "Bob" }; // ❌ Error — cannot reassign the reference

// const with ARRAYS — same rule as objects
const fruits = ["Apple", "Banana"];
fruits.push("Orange"); // ✅ Allowed — mutating the array
console.log("Fruits:", fruits); // ["Apple", "Banana", "Orange"]

// fruits = ["Mango"]; // ❌ Error — cannot reassign


// ============================================
// SIDE-BY-SIDE COMPARISON
// ============================================

console.log("\n===== COMPARISON =====\n");

// var
var x = 10;
var x = 20;   // ✅ Redeclare OK
x = 30;       // ✅ Reassign OK
console.log("var x:", x); // 30

// let
let y = 10;
// let y = 20; // ❌ Cannot redeclare
y = 30;       // ✅ Reassign OK
console.log("let y:", y); // 30

// const
const z = 10;
// const z = 20; // ❌ Cannot redeclare
// z = 30;       // ❌ Cannot reassign
console.log("const z:", z); // 10


// ============================================
// WHEN TO USE WHICH
// ============================================

console.log("\n===== WHEN TO USE =====\n");

/*
✅ Use const  → when the value NEVER changes
   const TAX_RATE = 0.18;
   const API_KEY = "xyz123";

✅ Use let    → when the value WILL change
   let totalPrice = 0;
   let userName = "";

❌ Avoid var  → it causes scope bugs and confusion
   (only used in old JavaScript code)
*/

// Real-world example
const TAX_RATE = 0.18;      // never changes
let cartTotal = 0;           // will change as items are added

cartTotal += 500;            // item 1
cartTotal += 300;            // item 2

const taxAmount = cartTotal * TAX_RATE;  // calculated once
const finalTotal = cartTotal + taxAmount;

console.log("Cart Total:  ₹" + cartTotal);
console.log("Tax (18%):   ₹" + taxAmount);
console.log("Final Total: ₹" + finalTotal);


// ============================================
// SUMMARY
// ============================================

/*
┌─────────────────────────────────────────────────────┐
│           var vs let vs const SUMMARY               │
├──────────┬────────────┬───────────┬─────────────────┤
│ Keyword  │ Scope      │ Redeclare │ Reassign        │
├──────────┼────────────┼───────────┼─────────────────┤
│ var      │ Function   │ ✅ Yes    │ ✅ Yes          │
│ let      │ Block      │ ❌ No     │ ✅ Yes          │
│ const    │ Block      │ ❌ No     │ ❌ No           │
└──────────┴────────────┴───────────┴─────────────────┘

RULE OF THUMB:
  → Default to const
  → Use let if the value needs to change
  → Never use var
*/

console.log("\n✅ var, let, const explained successfully!");
