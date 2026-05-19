// ============================================================
// HOISTING WITH VAR
// ============================================================
// Hoisting: JavaScript moves variable DECLARATIONS to the top
// of their scope before code runs.
// With 'var' → declaration is hoisted and initialized to undefined.
// With 'let'/'const' → declaration is hoisted but NOT initialized
//                      (Temporal Dead Zone - TDZ).
// ============================================================

// ---- Example 1: Accessing var before declaration ----
console.log("--- Example 1: var before declaration ---");

console.log(city); // undefined (not an error!)
var city = "New York";
console.log(city); // New York

// JS internally treats the above code as:
// var city;           ← hoisted to top, set to undefined
// console.log(city);  ← undefined
// city = "New York";  ← assignment stays here
// console.log(city);  ← "New York"

// ---- Example 2: var inside a function (function scope) ----
console.log("\n--- Example 2: var hoisted inside function ---");

function greet() {
    console.log(message); // undefined (hoisted within function)
    var message = "Hello!";
    console.log(message); // Hello!
}
greet();

// ---- Example 3: var is NOT block-scoped (leaks out of if/for) ----
console.log("\n--- Example 3: var leaks out of block ---");

if (true) {
    var score = 100; // declared inside block, but hoisted to function/global scope
}
console.log(score); // 100 (accessible outside the if block!)

// ---- Example 4: var in a loop ----
console.log("\n--- Example 4: var in a for loop ---");

for (var i = 0; i < 3; i++) {
    // i is hoisted to the enclosing function/global scope
}
console.log("i after loop:", i); // 3 (still accessible!)

// ---- Example 5: Function declaration vs var hoisting ----
console.log("\n--- Example 5: Function declaration is fully hoisted ---");

sayHi(); // Works! Function declarations are fully hoisted (body included)

function sayHi() {
    console.log("Hi there!");
}

// But a function stored in a var is NOT fully hoisted:
// sayBye(); // TypeError: sayBye is not a function
var sayBye = function () {
    console.log("Bye!");
};
sayBye(); // Works here (after assignment)
