// Logical Operators in JavaScript
// =================================
// Logical operators are used to combine or reverse conditions
// They return true or false (or the actual value in JS)

// There are 3 Logical Operators:
// &&  → AND
// ||  → OR
// !   → NOT

// -----------------------------------------------
// 1. AND (&&) → BOTH conditions must be true
// -----------------------------------------------
console.log("--- AND (&&) ---");

console.log(true && true);   // true  → both true
console.log(true && false);  // false → one is false
console.log(false && true);   // false → one is false
console.log(false && false);  // false → both false

// Practical Example
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can drive");   // ✓ both conditions true
} else {
    console.log("Cannot drive");
}

// -----------------------------------------------
// 2. OR (||) → AT LEAST ONE condition must be true
// -----------------------------------------------
console.log("--- OR (||) ---");

console.log(true || false);  // true  → one is true
console.log(false || true);   // true  → one is true
console.log(false || false);  // false → both false
console.log(true || true);   // true  → both true

// Practical Example
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Day off!");    // ✓ isHoliday is true
} else {
    console.log("Go to work");
}

// -----------------------------------------------
// 3. NOT (!) → REVERSES the condition
// -----------------------------------------------
console.log("--- NOT (!) ---");

console.log(!true);   // false → reverses true
console.log(!false);  // true  → reverses false

// Practical Example
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please login");  // ✓ !false = true
} else {
    console.log("Welcome back!");
}

// -----------------------------------------------
// Combining all three
// -----------------------------------------------
console.log("--- Combined ---");

let user = "admin";
let password = "1234";
let isActive = true;

if ((user === "admin" && password === "1234") && isActive) {
    console.log("Login successful");  // ✓ all conditions true
} else {
    console.log("Login failed");
}
