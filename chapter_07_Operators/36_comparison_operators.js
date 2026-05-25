// Comparison Operators in JavaScript
// =====================================
// Comparison operators compare two values and return TRUE or FALSE

let a = 10;
let b = 20;

// 1. Equal to (==) - compares VALUE only (ignores type)
console.log(a == 10);     // true
console.log(a == "10");   // true  → "10" is converted to number

// 2. Strict Equal to (===) - compares VALUE + TYPE
console.log(a === 10);    // true
console.log(a === "10");  // false → number vs string

// 3. Not Equal to (!=) - checks if values are NOT equal
console.log(a != b);      // true
console.log(a != 10);     // false

// 4. Strict Not Equal to (!==)
console.log(a !== "10");  // true  → different type
console.log(a !== 10);    // false → same value and type

// 5. Greater than (>)
console.log(b > a);       // true   → 20 > 10
console.log(a > b);       // false  → 10 > 20

// 6. Less than (<)
console.log(a < b);       // true   → 10 < 20
console.log(b < a);       // false  → 20 < 10

// 7. Greater than or Equal to (>=)
console.log(b >= 20);     // true   → 20 >= 20
console.log(a >= 20);     // false  → 10 >= 20

// 8. Less than or Equal to (<=)
console.log(a <= 10);     // true   → 10 <= 10
console.log(b <= 10);     // false  → 20 <= 10

// ------------------------------------------
// Practical Example: Grade Check
// ------------------------------------------
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");  // Output: Grade: B
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
