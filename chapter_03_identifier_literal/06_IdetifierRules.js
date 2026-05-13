// ============================================
// IDENTIFIERS AND THEIR RULES
// ============================================

/*
WHAT IS AN IDENTIFIER?

An identifier is a name given to variables, functions, classes, objects,
and other programming elements. It's how we refer to them in our code.

Example:
let myAge = 25;  // 'myAge' is an identifier
function greet() {} // 'greet' is an identifier
*/

console.log("===== RULE 1: START WITH LETTER, UNDERSCORE, OR DOLLAR SIGN =====");

// ✅ VALID - starts with letter
let name = "John";
console.log(name); // John

// ✅ VALID - starts with underscore
let _privateVar = 100;
console.log(_privateVar); // 100

// ✅ VALID - starts with dollar sign
let $price = 50;
console.log($price); // 50

// ❌ INVALID - cannot start with number (UNCOMMENT TO SEE ERROR)
// let 123name = "John"; // SyntaxError: Invalid or unexpected token


console.log("\n===== RULE 2: CAN CONTAIN LETTERS, DIGITS, UNDERSCORE, DOLLAR SIGN =====");

// ✅ VALID - contains numbers after first character
let user1 = "Alice";
let user2 = "Bob";
console.log(user1, user2); // Alice Bob

// ✅ VALID - mix of letters, numbers, underscore
let firstName_1 = "John";
let $total_amount_2 = 1000;
console.log(firstName_1); // John
console.log($total_amount_2); // 1000

// ❌ INVALID - contains hyphen (UNCOMMENT TO SEE ERROR)
// let first-name = "John"; // SyntaxError: Unexpected token '-'

// ❌ INVALID - contains space (UNCOMMENT TO SEE ERROR)
// let my name = "John"; // SyntaxError: Unexpected identifier


console.log("\n===== RULE 3: CASE-SENSITIVE =====");

// These are THREE DIFFERENT identifiers
let myVar = 10;
let myvar = 20;
let MYVAR = 30;

console.log("myVar =", myVar);   // 10
console.log("myvar =", myvar);   // 20
console.log("MYVAR =", MYVAR);   // 30

// They're different even though they look similar
console.log("All three are different variables!");


console.log("\n===== RULE 4: CANNOT BE RESERVED KEYWORDS =====");

// ✅ VALID - descriptive names
let userName = "John";
let isActive = true;
let totalPrice = 100;
console.log("Variable declarations work!");

// ❌ INVALID - reserved keywords (UNCOMMENT ONE TO SEE ERROR)
// let var = 10;        // SyntaxError: Unexpected token 'var'
// let function = 5;    // SyntaxError: Unexpected token 'function'
// let if = true;       // SyntaxError: Unexpected token 'if'
// let class = "Math";  // SyntaxError: Unexpected token 'class'
// let return = 5;      // SyntaxError: Unexpected token 'return'
// let for = 10;        // SyntaxError: Unexpected token 'for'
// let while = 5;       // SyntaxError: Unexpected token 'while'
// let const = 10;      // SyntaxError: Unexpected token 'const'


console.log("\n===== RULE 5: MEANINGFUL AND DESCRIPTIVE NAMES =====");

// ❌ BAD - unclear what 'x' represents
let x = 25;

// ✅ GOOD - clear what the variable represents
let userAge = 25;
let productPrice = 99.99;
let isLoggedIn = true;

console.log("userAge:", userAge);
console.log("productPrice:", productPrice);
console.log("isLoggedIn:", isLoggedIn);


console.log("\n===== NAMING CONVENTIONS =====");

// Convention 1: camelCase (most common for variables and functions)
let firstName = "John";
let lastName = "Doe";
let getTotalPrice = 100;

// Convention 2: PascalCase (for classes and constructors)
let PersonAge = 30;  // Like a class

// Convention 3: UPPER_CASE (for constants)
const MAX_USERS = 100;
const MIN_AGE = 18;
const API_URL = "https://api.example.com";

console.log("Naming conventions followed!");


console.log("\n===== PRACTICAL EXAMPLES =====");

// Example 1: Valid Identifiers
const studentName = "Alice";
const studentGPA = 3.8;
const isScholarshipEligible = true;

console.log(`Student: ${studentName}`);
console.log(`GPA: ${studentGPA}`);
console.log(`Eligible for Scholarship: ${isScholarshipEligible}`);

// Example 2: Function Identifiers
function calculateArea(length, width) {
    return length * width;
}

const area = calculateArea(5, 10);
console.log(`Area: ${area} square units`);

// Example 3: Object Identifiers
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue"
};

console.log("Car Details:", car);

// Example 4: Array Identifiers
const fruits = ["Apple", "Banana", "Orange"];
const numbers = [1, 2, 3, 4, 5];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);


console.log("\n===== SUMMARY OF RULES =====");

/*
1. ✅ Must start with: letter, underscore (_), or dollar sign ($)
2. ✅ Can contain: letters, digits, underscores, dollar signs
3. ✅ Case-sensitive: myVar ≠ myvar ≠ MYVAR
4. ✅ Cannot be JavaScript reserved keywords
5. ✅ Should be meaningful and descriptive
6. ✅ Follow naming conventions (camelCase, PascalCase, UPPER_CASE)

Examples of VALID identifiers:
- myVariable, firstName, $price, _private, age25, getUserData

Examples of INVALID identifiers:
- 123name (starts with digit)
- my-var (contains hyphen)
- my var (contains space)
- var, function, if, class (reserved keywords)
*/

console.log("\n✅ All identifier rules demonstrated successfully!");
