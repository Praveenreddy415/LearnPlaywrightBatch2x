// Post Decrement (a--) in JavaScript
// ===================================
// Post Decrement → a--
// Decreases value by 1 AFTER using the current value
// Returns the OLD value, then decrements

// -----------------------------------------------
// 1. Basic Post Decrement
// -----------------------------------------------
console.log("--- Post Decrement Basics ---");

let a = 5;
console.log(a--);  // 5  ← returns OLD value (5)
console.log(a);    // 4  ← now a is 4

// Step by step:
// Line 1: a-- returns 5, then decrements
// Line 2: a is now 4

// -----------------------------------------------
// 2. Post Decrement vs Pre Decrement
// -----------------------------------------------
console.log("--- Post Decrement (a--) vs Pre Decrement (--a) ---");

// POST DECREMENT
let x = 10;
let result1 = x--;   // result1 = 10 (old value), x = 9
console.log("Post:   result =", result1, ", x =", x);   // result = 10, x = 9

// PRE DECREMENT
let y = 10;
let result2 = --y;   // y = 9 first, then result2 = 9
console.log("Pre:    result =", result2, ", y =", y);   // result = 9, y = 9

// KEY DIFFERENCE: Post returns 10, Pre returns 9!

// -----------------------------------------------
// 3. Real-world Example: Array Processing
// -----------------------------------------------
console.log("--- Array Processing with Post Decrement ---");

let items = ["Pizza", "Burger", "Fries", "Soda"];
let lastIndex = items.length - 1;  // Start from 3

console.log("Items in order:");
console.log(items[lastIndex--]);  // Soda  ← access index 3, then decrement
console.log(items[lastIndex--]);  // Fries ← access index 2, then decrement
console.log(items[lastIndex--]);  // Burger← access index 1, then decrement
console.log("Current index:", lastIndex);  // Current index: 0

// -----------------------------------------------
// 4. Post Decrement in For Loop
// -----------------------------------------------
console.log("--- For Loop with Post Decrement ---");

for (let i = 3; i >= 1; i--) {
    console.log("Loop:", i);
}
// Output: 3, 2, 1

// -----------------------------------------------
// 5. Queue/Stack Pop with Post Decrement
// -----------------------------------------------
console.log("--- Removing from Queue (Post Decrement) ---");

let queue = ["first", "second", "third"];
let queueSize = queue.length;  // 3

while (queueSize > 0) {
    console.log("Removing:", queue[--queueSize]);  // Note: using -- here for pre-decrement
}

// Using POST decrement to get index then decrease
console.log("--- Using Post Decrement ---");

let stack = ["A", "B", "C"];
let stackTop = stack.length;  // 3

while (stackTop > 0) {
    console.log("Pop from stack:", stack[stackTop--]);  // post decrement
}

// -----------------------------------------------
// 6. Counter Decrement with Post
// -----------------------------------------------
console.log("--- Timer Countdown ---");

let seconds = 3;

while (seconds > 0) {
    console.log(seconds + " seconds remaining...");
    seconds--;
}
console.log("Time's up!");

// -----------------------------------------------
// 7. Post Decrement in Assignment
// -----------------------------------------------
console.log("--- Post Decrement in Assignment ---");

let count = 5;
let current = count--;  // current gets 5, then count becomes 4

console.log("Current:", current);  // 5
console.log("Count after:", count);  // 4

// -----------------------------------------------
// 8. Post vs Pre Decrement Quick Reference
// -----------------------------------------------
console.log("--- Post vs Pre Comparison ---");

let m = 10, n = 10;

// POST: use old, then decrement
console.log("m--:", m--);   // 10
console.log("m after:", m); // 9

// PRE: decrement, then use new
console.log("--n:", --n);   // 9
console.log("n after:", n); // 9

// -----------------------------------------------
// Summary
// -----------------------------------------------
// a--  → USE current value FIRST, then decrement
// --a  → DECREMENT first, then USE new value
//
// In loops: both work the same (i-- vs --i)
// In assignments: a-- returns the old value
//                 --a returns the new (decremented) value
//
// Use a-- when you want to process current value THEN move to next
// Use --a when you want to skip current and move to previous first
