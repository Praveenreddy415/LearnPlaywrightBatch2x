// ============================================
// FUNCTIONS - BEGINNER GUIDE WITH SIMPLE EXAMPLES
// ============================================

/*
WHAT IS A FUNCTION?

A function is a reusable block of code that performs a specific task.
Think of it as a recipe:
- You write the recipe once
- You can use it many times
- Each time you need to make the dish, you follow the recipe
*/

console.log("========== SIMPLE FUNCTION EXAMPLES ==========\n");

// ============================================
// EXAMPLE 1: SIMPLEST FUNCTION - No Input, No Output
// ============================================

console.log("--- Example 1: Simple Greeting ---");

function sayHello() {
    console.log("Hello! Welcome to JavaScript!");
}

sayHello(); // Call the function
sayHello(); // Call it again


// ============================================
// EXAMPLE 2: FUNCTION WITH INPUT (Parameters)
// ============================================

console.log("\n--- Example 2: Function with Input ---");

function greetPerson(name) {
    console.log("Hello, " + name + "!");
}

greetPerson("Alice");  // Hello, Alice!
greetPerson("Bob");    // Hello, Bob!
greetPerson("Charlie"); // Hello, Charlie!


// ============================================
// EXAMPLE 3: FUNCTION WITH INPUT & OUTPUT (Return)
// ============================================

console.log("\n--- Example 3: Function with Input & Output ---");

function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result;  // Send the result back
}

let sum = addNumbers(10, 20);
console.log("10 + 20 = " + sum); // 30

let sum2 = addNumbers(5, 15);
console.log("5 + 15 = " + sum2); // 20


// ============================================
// EXAMPLE 4: REAL-WORLD EXAMPLE - Calculator Functions
// ============================================

console.log("\n--- Example 4: Calculator Functions ---");

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function subtract(a, b) {
    return a - b;
}

console.log("5 × 4 = " + multiply(5, 4));  // 20
console.log("20 ÷ 4 = " + divide(20, 4)); // 5
console.log("100 - 30 = " + subtract(100, 30)); // 70


// ============================================
// EXAMPLE 5: FUNCTION THAT WORKS WITH STRINGS
// ============================================

console.log("\n--- Example 5: String Functions ---");

function createGreeting(firstName, lastName) {
    return "Hello, " + firstName + " " + lastName + "!";
}

let greeting1 = createGreeting("John", "Doe");
console.log(greeting1); // Hello, John Doe!

let greeting2 = createGreeting("Sarah", "Smith");
console.log(greeting2); // Hello, Sarah Smith!


// ============================================
// EXAMPLE 6: FUNCTION FOR REAL-LIFE TASK - Calculate Total Price
// ============================================

console.log("\n--- Example 6: Calculate Total Price ---");

function calculateBill(itemPrice, quantity) {
    let total = itemPrice * quantity;
    return total;
}

let bill1 = calculateBill(50, 3);  // 50 per item, 3 items
console.log("Total bill: $" + bill1); // 150

let bill2 = calculateBill(25, 4);  // 25 per item, 4 items
console.log("Total bill: $" + bill2); // 100


// ============================================
// EXAMPLE 7: FUNCTION THAT CHECKS SOMETHING (Boolean Return)
// ============================================

console.log("\n--- Example 7: Check if Age is Adult ---");

function isAdult(age) {
    if (age >= 18) {
        return true;  // Yes, they are adult
    } else {
        return false; // No, they are not adult
    }
}

console.log("Is 20 years old an adult? " + isAdult(20)); // true
console.log("Is 15 years old an adult? " + isAdult(15)); // false
console.log("Is 30 years old an adult? " + isAdult(30)); // true


// ============================================
// EXAMPLE 8: FUNCTION THAT WORKS WITH MULTIPLE PARAMETERS
// ============================================

console.log("\n--- Example 8: Calculate Rectangle Area & Perimeter ---");

function calculateArea(length, width) {
    return length * width;
}

function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

let area = calculateArea(5, 10);
let perimeter = calculatePerimeter(5, 10);

console.log("Area of 5×10 rectangle: " + area); // 50
console.log("Perimeter of 5×10 rectangle: " + perimeter); // 30


// ============================================
// EXAMPLE 9: ARROW FUNCTION (Modern Syntax)
// ============================================

console.log("\n--- Example 9: Arrow Function (Shorter Syntax) ---");

// Regular function
function square(n) {
    return n * n;
}

// Same thing using arrow function (shorter)
const squareArrow = (n) => n * n;

console.log("Square of 5 (regular): " + square(5));      // 25
console.log("Square of 5 (arrow): " + squareArrow(5));  // 25


// ============================================
// EXAMPLE 10: FUNCTION CALLING ANOTHER FUNCTION
// ============================================

console.log("\n--- Example 10: Function Calling Another Function ---");

function getDiscount(price, discountPercent) {
    return price * discountPercent / 100;
}

function getFinalPrice(price, discountPercent) {
    let discount = getDiscount(price, discountPercent); // Call another function
    let finalPrice = price - discount;
    return finalPrice;
}

let originalPrice = 1000;
let discountPercent = 10;
let finalPrice = getFinalPrice(originalPrice, discountPercent);

console.log("Original Price: $" + originalPrice);
console.log("Discount: 10%");
console.log("Final Price: $" + finalPrice); // 900


// ============================================
// EXAMPLE 11: FUNCTION WITH DEFAULT VALUE
// ============================================

console.log("\n--- Example 11: Function with Default Value ---");

function introduce(name, country = "USA") {
    console.log(name + " is from " + country);
}

introduce("Alice");              // Alice is from USA (default)
introduce("Bob", "India");       // Bob is from India (provided)
introduce("Charlie", "Canada");  // Charlie is from Canada (provided)


// ============================================
// KEY POINTS ABOUT FUNCTIONS
// ============================================

console.log("\n========== KEY POINTS ==========");
console.log("1. Functions help you reuse code");
console.log("2. Functions take input (parameters)");
console.log("3. Functions return output (return statement)");
console.log("4. You create a function once, use it many times");
console.log("5. Functions make code cleaner and easier to maintain");
console.log("6. Use meaningful function names (greetUser, calculateTotal)");
console.log("7. Functions can call other functions");
console.log("8. Arrow functions are a shorter modern syntax");
