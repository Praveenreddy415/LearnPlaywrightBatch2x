// ============================================================
// JavaScript Operators - Interview Questions & Answers
// ============================================================

// -------------------------------------------------------
// Q1. What is the difference between == and === ?
// -------------------------------------------------------
console.log("--- Q1: == vs === ---");

console.log(5 == "5");   // true  → checks only VALUE (type coercion)
console.log(5 === "5");  // false → checks VALUE + TYPE (strict)
console.log(5 === 5);    // true

// Answer: == converts types before comparing. === does NOT convert types.


// -------------------------------------------------------
// Q2. What does the modulus (%) operator return?
// -------------------------------------------------------
console.log("--- Q2: Modulus ---");

console.log(10 % 3);  // 1  → remainder of 10 ÷ 3
console.log(10 % 2);  // 0  → even number → no remainder

// Answer: It returns the REMAINDER after division.


// -------------------------------------------------------
// Q3. What is the output of 0.1 + 0.2 === 0.3 ?
// -------------------------------------------------------
console.log("--- Q3: Floating Point ---");

console.log(0.1 + 0.2);          // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  // false

// Answer: false — JavaScript has floating point precision issues.
// Fix: use toFixed() or multiply to avoid decimals.
console.log((0.1 + 0.2).toFixed(1) === "0.3");  // true


// -------------------------------------------------------
// Q4. What is the difference between ++ prefix and postfix?
// -------------------------------------------------------
console.log("--- Q4: Prefix vs Postfix Increment ---");

let a = 5;
console.log(a++);  // 5  → returns THEN increments
console.log(a);    // 6

let b = 5;
console.log(++b);  // 6  → increments THEN returns
console.log(b);    // 6

// Answer:
// Postfix (a++) → uses current value, then increments
// Prefix  (++a) → increments first, then uses new value


// -------------------------------------------------------
// Q5. What is the output of typeof null ?
// -------------------------------------------------------
console.log("--- Q5: typeof null ---");

console.log(typeof null);       // "object"  ← known JS bug
console.log(typeof undefined);  // "undefined"
console.log(typeof 42);         // "number"
console.log(typeof "hello");    // "string"
console.log(typeof true);       // "boolean"

// Answer: typeof null returns "object" — this is a historic bug in JS.


// -------------------------------------------------------
// Q6. What is the output of the ternary operator?
// -------------------------------------------------------
console.log("--- Q6: Ternary Operator ---");

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);  // "Adult"

// Answer: condition ? valueIfTrue : valueIfFalse


// -------------------------------------------------------
// Q7. What is NaN and how do you check for it?
// -------------------------------------------------------
console.log("--- Q7: NaN ---");

console.log(10 / "abc");       // NaN
console.log(NaN === NaN);      // false ← NaN is never equal to itself!
console.log(isNaN("hello"));   // true
console.log(Number.isNaN(NaN)); // true (more reliable)

// Answer: NaN = Not a Number. Use Number.isNaN() to check it.


// -------------------------------------------------------
// Q8. What does the + operator do with strings?
// -------------------------------------------------------
console.log("--- Q8: + with strings ---");

console.log(5 + 5);        // 10   → both numbers → addition
console.log(5 + "5");      // "55" → one string → concatenation
console.log("5" + "5");    // "55" → both strings → concatenation
console.log(5 - "3");      // 2    → - forces numeric conversion

// Answer: + concatenates if either operand is a string.
// Other operators (-, *, /) always try numeric conversion.


// -------------------------------------------------------
// Q9. What is the difference between || and ?? ?
// -------------------------------------------------------
console.log("--- Q9: || vs ?? (Nullish Coalescing) ---");

let val1 = 0 || "default";    // "default" → 0 is falsy
let val2 = 0 ?? "default";    // 0         → 0 is NOT null/undefined

console.log(val1);  // "default"
console.log(val2);  // 0

// Answer:
// || returns right side if left is ANY falsy value (0, "", false, null, undefined)
// ?? returns right side ONLY if left is null or undefined


// -------------------------------------------------------
// Q10. What is operator precedence? Give an example.
// -------------------------------------------------------
console.log("--- Q10: Operator Precedence ---");

console.log(2 + 3 * 4);    // 14  → * runs before +
console.log((2 + 3) * 4);  // 20  → () forces + first

// Answer: Operator precedence determines which operator runs first.
// * / run before + -   |   Use () to control the order.
