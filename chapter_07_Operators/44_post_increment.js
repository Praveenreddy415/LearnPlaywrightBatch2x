// Post Increment (++) in JavaScript
// ==================================
// Post Increment → a++
// Increases value by 1 AFTER using the current value
// Returns the OLD value, then increments

// -----------------------------------------------
// 1. Basic Post Increment
// -----------------------------------------------
console.log("--- Post Increment Basics ---");

let a = 5;
console.log(a++);  // 5  ← returns OLD value (5)
console.log(a);    // 6  ← now a is 6

// Step by step:
// Line 1: a++ returns 5, then increments
// Line 2: a is now 6

// -----------------------------------------------
// 2. Post Increment vs Pre Increment
// -----------------------------------------------
console.log("--- Post Increment (a++) vs Pre Increment (++a) ---");

// POST INCREMENT
let x = 10;
let result1 = x++;   // result1 = 10 (old value), x = 11
console.log("Post:   result =", result1, ", x =", x);  // result = 10, x = 11

// PRE INCREMENT
let y = 10;
let result2 = ++y;   // y = 11 first, then result2 = 11
console.log("Pre:    result =", result2, ", y =", y);  // result = 11, y = 11

// -----------------------------------------------
// 3. Real-world Example: Counter
// -----------------------------------------------
console.log("--- Counter Example ---");

let count = 1;
console.log("Count:", count++);  // Count: 1  ← shows 1, then increases
console.log("Count:", count++);  // Count: 2  ← shows 2, then increases
console.log("Count:", count++);  // Count: 3  ← shows 3, then increases
console.log("Final count:", count);  // Final count: 4

// -----------------------------------------------
// 4. Post Increment in For Loop
// -----------------------------------------------
console.log("--- For Loop with Post Increment ---");

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);  // i++ increments AFTER console.log
}
// Output: 1, 2, 3, 4, 5

// -----------------------------------------------
// 5. Post Increment with Array
// -----------------------------------------------
console.log("--- Array Index with Post Increment ---");

let fruits = ["Apple", "Banana", "Mango"];
let index = 0;

console.log(fruits[index++]);  // "Apple"  ← access index 0, then increment
console.log(fruits[index++]);  // "Banana" ← access index 1, then increment
console.log(fruits[index++]);  // "Mango"  ← access index 2, then increment
console.log("Final index:", index);  // Final index: 3

// -----------------------------------------------
// 6. Post Decrement (--)
// -----------------------------------------------
console.log("--- Post Decrement (a--) ---");

let m = 5;
console.log(m--);  // 5  ← returns OLD value (5)
console.log(m);    // 4  ← now m is 4

// -----------------------------------------------
// Summary
// -----------------------------------------------
// a++  → USE current value FIRST, then increment
// ++a  → INCREMENT first, then USE new value
//
// In loops: i++ is most common (order doesn't matter much)
// In assignments: Choose based on what value you want!
