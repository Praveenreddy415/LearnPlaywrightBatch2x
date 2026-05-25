// ========================================
// JAVASCRIPT OPERATORS - ALL IN ONE FILE
// ========================================

console.log("===== 1. ARITHMETIC OPERATORS =====");
let a = 10;
let b = 3;

console.log(a + b);   // 13 - Addition
console.log(a - b);   // 7 - Subtraction
console.log(a * b);   // 30 - Multiplication
console.log(a / b);   // 3.33... - Division
console.log(a % b);   // 1 - Modulus (remainder)
console.log(a ** b);  // 1000 - Power (10 to power 3)

console.log("\n===== 2. ASSIGNMENT OPERATORS =====");
let x = 5;           // Assign 5 to x
x += 3;              // x = x + 3 = 8
console.log("x += 3:", x);

x -= 2;              // x = x - 2 = 6
console.log("x -= 2:", x);

x *= 2;              // x = x * 2 = 12
console.log("x *= 2:", x);

x /= 3;              // x = x / 3 = 4
console.log("x /= 3:", x);

console.log("\n===== 3. COMPARISON OPERATORS =====");
let age = 20;

console.log("age == 20:", age == 20);     // true - equals
console.log("age != 25:", age != 25);     // true - not equals
console.log("age > 18:", age > 18);       // true - greater than
console.log("age < 30:", age < 30);       // true - less than
console.log("age >= 20:", age >= 20);     // true - greater than or equal
console.log("age <= 25:", age <= 25);     // true - less than or equal

console.log("\n===== 4. STRICT EQUALITY =====");
console.log('5 == "5":', 5 == "5");      // true - loose equality (ignores type)
console.log('5 === "5":', 5 === "5");    // false - strict equality (checks type too)
console.log("5 === 5:", 5 === 5);        // true - same value AND same type

console.log("\n===== 5. LOGICAL OPERATORS =====");
age = 20;
let hasLicense = true;

// AND (&&) - both must be true
console.log("age > 18 && hasLicense:", age > 18 && hasLicense);      // true

// OR (||) - at least one must be true
console.log("age < 18 || hasLicense:", age < 18 || hasLicense);      // true

// NOT (!) - reverses the result
console.log("!hasLicense:", !hasLicense);                             // false

console.log("\n===== 6. TERNARY OPERATOR =====");
// Condition ? value if true : value if false
let status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);   // "Adult"

// Another example
let score = 45;
let result = score >= 50 ? "Pass" : "Fail";
console.log("Result:", result);   // "Fail"

console.log("\n===== 7. INCREMENT/DECREMENT OPERATORS =====");
let count = 5;

count++;    // count = 6 - increment by 1
console.log("After count++:", count);    // 6

count--;    // count = 5 - decrement by 1
console.log("After count--:", count);    // 5

console.log("\n===== QUICK TIP =====");
console.log("Always use === instead of == to avoid unexpected results!");
console.log('Example: 5 == "5" returns true, but 5 === "5" returns false');