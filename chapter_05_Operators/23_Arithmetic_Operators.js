// ============================================================
// ARITHMETIC OPERATORS IN JAVASCRIPT
// ============================================================
// Arithmetic operators are used to perform mathematical
// calculations on numbers.
//
// Operators:
//   +   Addition
//   -   Subtraction
//   *   Multiplication
//   /   Division
//   %   Modulus (remainder)
//   **  Exponentiation (power)
//   ++  Increment
//   --  Decrement
// ============================================================

let a = 10;
let b = 3;

// ---- Addition (+) ----
console.log("--- Addition ---");
let sum = a + b;
console.log(a + " + " + b + " = " + sum); // 10 + 3 = 13

// ---- Subtraction (-) ----
console.log("\n--- Subtraction ---");
let diff = a - b;
console.log(a + " - " + b + " = " + diff); // 10 - 3 = 7

// ---- Multiplication (*) ----
console.log("\n--- Multiplication ---");
let product = a * b;
console.log(a + " * " + b + " = " + product); // 10 * 3 = 30

// ---- Division (/) ----
console.log("\n--- Division ---");
let quotient = a / b;
console.log(a + " / " + b + " = " + quotient); // 10 / 3 = 3.3333...

// ---- Modulus (%) — remainder after division ----
console.log("\n--- Modulus (Remainder) ---");
let remainder = a % b;
console.log(a + " % " + b + " = " + remainder); // 10 % 3 = 1

// Practical use: check even or odd
let num = 8;
console.log(num + " is " + (num % 2 === 0 ? "Even" : "Odd")); // Even

// ---- Exponentiation (**) — power ----
console.log("\n--- Exponentiation (Power) ---");
let power = a ** b;
console.log(a + " ** " + b + " = " + power); // 10 ** 3 = 1000 (10 * 10 * 10)

// ---- Increment (++) ----
console.log("\n--- Increment ---");
let x = 5;

// Post-increment: returns current value THEN increments
console.log("Post-increment (x++):", x++); // 5 (old value returned)
console.log("After x++:", x);              // 6

// Pre-increment: increments FIRST then returns new value
let y = 5;
console.log("Pre-increment (++y):", ++y);  // 6 (new value returned)
console.log("After ++y:", y);              // 6

// ---- Decrement (--) ----
console.log("\n--- Decrement ---");
let p = 10;

// Post-decrement: returns current value THEN decrements
console.log("Post-decrement (p--):", p--); // 10
console.log("After p--:", p);              // 9

// Pre-decrement: decrements FIRST then returns new value
let q = 10;
console.log("Pre-decrement (--q):", --q);  // 9
console.log("After --q:", q);              // 9

// ---- Real-world examples ----
console.log("\n--- Real-world Examples ---");

// Total price calculation
let price = 50;
let quantity = 4;
let total = price * quantity;
console.log("Total Price:", total); // 200

// Average calculation
let marks = 80 + 90 + 70;
let average = marks / 3;
console.log("Average Marks:", average); // 80

// Check if a year is a leap year (divisible by 4)
let year = 2024;
console.log(year + " is leap year:", year % 4 === 0); // true

// ---- Operator Precedence (BODMAS) ----
console.log("\n--- Operator Precedence ---");

let result1 = 2 + 3 * 4;       // * before +
console.log("2 + 3 * 4 =", result1);         // 14

let result2 = (2 + 3) * 4;     // () first
console.log("(2 + 3) * 4 =", result2);       // 20

let result3 = 10 - 4 / 2 + 1;  // / first, then - and +
console.log("10 - 4 / 2 + 1 =", result3);    // 9

// ---- Summary Table (printed to console) ----
console.log("\n--- Summary ---");
console.log("a =", a, ", b =", b);
console.log("a + b  =", a + b);   // Addition
console.log("a - b  =", a - b);   // Subtraction
console.log("a * b  =", a * b);   // Multiplication
console.log("a / b  =", a / b);   // Division
console.log("a % b  =", a % b);   // Modulus
console.log("a ** b =", a ** b);  // Exponentiation
