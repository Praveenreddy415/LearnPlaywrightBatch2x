// Pre Decrement (--a) in JavaScript
// ==================================
// Pre Decrement → --a
// Decreases value by 1 BEFORE using the current value
// Returns the NEW value (after decrementing)

// -----------------------------------------------
// 1. Basic Pre Decrement
// -----------------------------------------------
console.log("--- Pre Decrement Basics ---");

let a = 5;
console.log(--a);  // 4  ← decrements FIRST, then returns NEW value (4)
console.log(a);    // 4  ← a is now 4

// Step by step:
// Line 1: --a decrements to 4, then returns 4
// Line 2: a is 4

// -----------------------------------------------
// 2. Pre Decrement vs Post Decrement
// -----------------------------------------------
console.log("--- Pre Decrement (--a) vs Post Decrement (a--) ---");

// PRE DECREMENT
let x = 10;
let result1 = --x;   // x = 9 first, then result1 = 9
console.log("Pre:    result =", result1, ", x =", x);   // result = 9, x = 9

// POST DECREMENT
let y = 10;
let result2 = y--;   // result2 = 10 (old), then y = 9
console.log("Post:   result =", result2, ", y =", y);   // result = 10, y = 9

// KEY DIFFERENCE: Pre returns 9, Post returns 10!

// -----------------------------------------------
// 3. Real-world Example: Countdown
// -----------------------------------------------
console.log("--- Countdown with Pre Decrement ---");

let count = 5;
console.log("Countdown starts:");
while (count > 0) {
    console.log("Time:", --count);  // 4, 3, 2, 1, 0
}
console.log("Blastoff!");

// -----------------------------------------------
// 4. Pre Decrement in For Loop
// -----------------------------------------------
console.log("--- For Loop with Pre Decrement ---");

for (let i = 5; i >= 1; --i) {
    console.log("Count down:", i);
}
// Output: 5, 4, 3, 2, 1

// -----------------------------------------------
// 5. Array Access with Pre Decrement
// -----------------------------------------------
console.log("--- Array with Pre Decrement ---");

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let index = fruits.length - 1;  // Start from last index (3)

console.log("Last to First:");
console.log(fruits[index]);      // Orange  (index 3)
console.log(fruits[--index]);    // Mango   ← decrement to 2, access index 2
console.log(fruits[--index]);    // Banana  ← decrement to 1, access index 1
console.log(fruits[--index]);    // Apple   ← decrement to 0, access index 0
console.log("Final index:", index);  // Final index: 0

// -----------------------------------------------
// 6. Queue/Stack with Pre Decrement
// -----------------------------------------------
console.log("--- Stack Pop with Pre Decrement ---");

let stack = ["task1", "task2", "task3"];
let stackIndex = stack.length;  // 3

while (stackIndex > 0) {
    console.log("Popping:", stack[--stackIndex]);  // access, then decrement
}
// Output: task3, task2, task1

// -----------------------------------------------
// 7. Pre vs Post Decrement Comparison
// -----------------------------------------------
console.log("--- Pre vs Post Summary ---");

let m = 5, n = 5;

console.log("Pre:  result =", --m, ", value =", m);   // result = 4, value = 4
console.log("Post: result =", n--, ", value =", n);   // result = 5, value = 4

// -----------------------------------------------
// 8. Real-world: Decrement with Conditions
// -----------------------------------------------
console.log("--- Decrement in Conditions ---");

let attempts = 3;

while (--attempts >= 0) {
    console.log("Attempts remaining:", attempts);  // 2, 1, 0
}

// -----------------------------------------------
// Summary
// -----------------------------------------------
// --a  → DECREMENT first, then RETURN new value
// a--  → RETURN old value, then decrement
//
// In loops: both work the same (i-- vs --i)
// In assignments: --a returns the decremented value
//                 a-- returns the original value before decrement
//
// Use cases:
//   - Countdowns (--a is natural here)
//   - Backward array access
//   - Stack/Queue operations
