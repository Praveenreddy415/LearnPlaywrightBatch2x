// Nullish Coalescing Operator (??) in JavaScript
// =================================================
// ?? returns the RIGHT side value ONLY when the left side is null or undefined
// If left side has any other value (even 0, false, ""), it returns LEFT side

// Syntax:
// value ?? defaultValue

// -----------------------------------------------
// 1. Basic Example
// -----------------------------------------------
console.log("--- Basic ?? ---");

let name = null;
console.log(name ?? "Guest");       // Guest  ← name is null

let city = undefined;
console.log(city ?? "Unknown");     // Unknown ← city is undefined

let age = 25;
console.log(age ?? 0);              // 25  ← age has a value, use it

// -----------------------------------------------
// 2. ?? vs || (Key Difference)
// -----------------------------------------------
console.log("--- ?? vs || ---");

let score = 0;

console.log(score || "No score");   // "No score" ← || treats 0 as falsy (BAD)
console.log(score ?? "No score");   // 0          ← ?? only checks null/undefined (GOOD)

let isActive = false;

console.log(isActive || "inactive");  // "inactive" ← || treats false as falsy
console.log(isActive ?? "inactive");  // false      ← ?? keeps false as valid value

// -----------------------------------------------
// 3. Real-world use case: Default values
// -----------------------------------------------
console.log("--- Default Values ---");

let username = null;
let displayName = username ?? "Anonymous";
console.log("Welcome, " + displayName);  // Welcome, Anonymous

let quantity = 0;
let total = quantity ?? 1;
console.log("Quantity:", total);  // Quantity: 0  ← 0 is a valid value

// -----------------------------------------------
// 4. Nullish Assignment (??=)
// -----------------------------------------------
console.log("--- Nullish Assignment (??=) ---");

let user1 = null;
user1 ??= "Default User";
console.log(user1);   // Default User  ← was null, so assigned

let user2 = "John";
user2 ??= "Default User";
console.log(user2);   // John  ← already had a value, no change

// -----------------------------------------------
// 5. Optional Chaining (?.) with ??
// -----------------------------------------------
console.log("--- Optional Chaining + ?? ---");

let person = null;

// Without ?. → this would throw an ERROR
// console.log(person.name);  // TypeError!

// With ?. → safely returns undefined instead of error
console.log(person?.name);           // undefined
console.log(person?.name ?? "N/A");  // N/A  ← combines both operators

// -----------------------------------------------
// Summary
// -----------------------------------------------
// ??  → returns right side only if left is null or undefined
// ||  → returns right side if left is ANY falsy (0, false, "", null, undefined)
// ??= → assign default only if variable is null or undefined
// ?.  → safely access property without throwing error
