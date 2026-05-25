// Pre Increment (++a) in JavaScript
// ==================================
// Pre Increment → ++a
// Increases value by 1 BEFORE using the current value
// Returns the NEW value (after incrementing)

// -----------------------------------------------
// 1. Basic Pre Increment
// -----------------------------------------------
console.log("--- Pre Increment Basics ---");

let a = 5;
console.log(++a);  // 6  ← increments FIRST, then returns NEW value (6)
console.log(a);    // 6  ← a is now 6

// Step by step:
// Line 1: ++a increments to 6, then returns 6
// Line 2: a is 6

// -----------------------------------------------
// 2. Pre Increment vs Post Increment
// -----------------------------------------------
console.log("--- Pre Increment (++a) vs Post Increment (a++) ---");

// PRE INCREMENT
let x = 10;
let result1 = ++x;   // x = 11 first, then result1 = 11
console.log("Pre:    result =", result1, ", x =", x);   // result = 11, x = 11

// POST INCREMENT
let y = 10;
let result2 = y++;   // result2 = 10 (old), then y = 11
console.log("Post:   result =", result2, ", y =", y);   // result = 10, y = 11

// KEY DIFFERENCE: Pre returns 11, Post returns 10!

// -----------------------------------------------
// 3. Real-world Example: ID Generator
// -----------------------------------------------
console.log("--- ID Generator with Pre Increment ---");

let id = 0;
let userId1 = ++id;  // id becomes 1, returns 1
let userId2 = ++id;  // id becomes 2, returns 2
let userId3 = ++id;  // id becomes 3, returns 3

console.log("User 1 ID:", userId1);  // 1
console.log("User 2 ID:", userId2);  // 2
console.log("User 3 ID:", userId3);  // 3
console.log("Next ID:", id);         // 3

// -----------------------------------------------
// 4. Pre Increment in For Loop
// -----------------------------------------------
console.log("--- For Loop with Pre Increment ---");

for (let i = 1; i <= 3; i++) {
    console.log("Number:", i);
}
// Output: 1, 2, 3
// Note: i++ and ++i work the SAME in for loops!

// -----------------------------------------------
// 5. Array Access with Pre Increment
// -----------------------------------------------
console.log("--- Array with Pre Increment ---");

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let index = 0;

console.log(fruits[++index]);  // "Banana"  ← increment first to 1, access index 1
console.log(fruits[++index]);  // "Mango"   ← increment to 2, access index 2
console.log(fruits[++index]);  // "Orange"  ← increment to 3, access index 3
console.log("Final index:", index);  // Final index: 3

// -----------------------------------------------
// 6. Pre Decrement (--)
// -----------------------------------------------
console.log("--- Pre Decrement (--a) ---");

let m = 5;
console.log(--m);  // 4  ← decrements FIRST to 4, then returns 4
console.log(m);    // 4  ← m is now 4

// -----------------------------------------------
// 7. Countdown with Pre Decrement
// -----------------------------------------------
console.log("--- Countdown Example ---");

let count = 3;
console.log("Starting countdown...");
while (count > 0) {
    console.log("Time remaining:", --count);  // 2, 1, 0
}

// -----------------------------------------------
// 8. Pre vs Post in Real Code
// -----------------------------------------------
console.log("--- Practical Comparison ---");

// POST INCREMENT (common in loops)
for (let i = 1; i <= 3; i++) {
    console.log("Post:", i);
}

// PRE INCREMENT (same result)
for (let i = 1; i <= 3; ++i) {
    console.log("Pre:", i);
}

// -----------------------------------------------
// Summary
// -----------------------------------------------
// ++a  → INCREMENT first, then RETURN new value
// a++  → RETURN old value, then increment
//
// In loops: both work the same (i++ vs ++i)
// In assignments: ++a returns the incremented value
//                 a++ returns the original value before increment
//
// Pre is sometimes preferred for C++ efficiency reasons,
// but in JavaScript they perform identically in most cases.
