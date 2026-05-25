// Increment and Decrement Operators in JavaScript
// =================================================
// Increment (++) → increases value by 1
// Decrement (--) → decreases value by 1

// Each has 2 forms:
// Prefix  → ++a or --a  → change FIRST, then use value
// Postfix → a++ or a--  → use value FIRST, then change

// -----------------------------------------------
// 1. Increment (++)
// -----------------------------------------------
console.log("--- Increment ---");

let a = 5;
a++;  // postfix increment
console.log(a);  // 6

let b = 5;
++b;  // prefix increment
console.log(b);  // 6

// -----------------------------------------------
// 2. Decrement (--)
// -----------------------------------------------
console.log("--- Decrement ---");

let x = 10;
x--;  // postfix decrement
console.log(x);  // 9

let y = 10;
--y;  // prefix decrement
console.log(y);  // 9

// -----------------------------------------------
// 3. Prefix vs Postfix — The KEY difference
// -----------------------------------------------
console.log("--- Prefix vs Postfix ---");

// POSTFIX → returns current value FIRST, then increments
let p = 5;
console.log(p++);  // 5  ← returns 5 (old value)
console.log(p);    // 6  ← now it's 6

// PREFIX → increments FIRST, then returns new value
let q = 5;
console.log(++q);  // 6  ← increments first, returns 6
console.log(q);    // 6

// Same with decrement
let m = 10;
console.log(m--);  // 10 ← returns 10 (old value), then decrements
console.log(m);    // 9

let n = 10;
console.log(--n);  // 9  ← decrements first, returns 9
console.log(n);    // 9

// -----------------------------------------------
// 4. Real-world use case: Loop counter
// -----------------------------------------------
console.log("--- Loop with Increment ---");

for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}
// Output: 1, 2, 3, 4, 5

console.log("--- Loop with Decrement ---");

for (let i = 5; i >= 1; i--) {
    console.log("Countdown:", i);
}
// Output: 5, 4, 3, 2, 1

// -----------------------------------------------
// Summary
// -----------------------------------------------
// a++  → use then increment  (postfix)
// ++a  → increment then use  (prefix)
// a--  → use then decrement  (postfix)
// --a  → decrement then use  (prefix)
