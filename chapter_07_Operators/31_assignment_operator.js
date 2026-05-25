// ========================================
// JAVASCRIPT - ASSIGNMENT OPERATORS
// ========================================

// ---- 1. Basic Assignment (=) ----
let x = 10;
let name = "John";
console.log("x =", x);        // 10
console.log("name =", name);  // John

// ---- 2. Add and Assign (+=) ----
x = 10;
x += 5;    // x = x + 5
console.log("x += 5:", x);    // 15

// ---- 3. Subtract and Assign (-=) ----
x = 10;
x -= 3;    // x = x - 3
console.log("x -= 3:", x);    // 7

// ---- 4. Multiply and Assign (*=) ----
x = 10;
x *= 2;    // x = x * 2
console.log("x *= 2:", x);    // 20

// ---- 5. Divide and Assign (/=) ----
x = 10;
x /= 2;    // x = x / 2
console.log("x /= 2:", x);    // 5

// ---- 6. Modulus and Assign (%=) ----
x = 10;
x %= 3;    // x = x % 3 (remainder)
console.log("x %= 3:", x);    // 1

// ---- 7. Exponent and Assign (**=) ----
x = 10;
x **= 2;   // x = x ** 2 (power)
console.log("x **= 2:", x);   // 100

// ---- Real-World Example ----
console.log("\n--- Real-World Example ---");
let price = 100;
let discount = 20;

price -= discount;       // Apply discount
console.log("After discount:", price);   // 80

price *= 1.18;           // Add 18% tax
console.log("After tax:", price);        // 94.4
