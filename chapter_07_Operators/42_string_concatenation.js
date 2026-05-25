// String Concatenation in JavaScript
// =====================================
// Concatenation means JOINING two or more strings together
// Use the + operator to concatenate strings

// -----------------------------------------------
// 1. Basic Concatenation using +
// -----------------------------------------------
console.log("--- Basic Concatenation ---");

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName);  // John Doe

// -----------------------------------------------
// 2. Concatenating strings and numbers
// -----------------------------------------------
console.log("--- String + Number ---");

let age = 25;
console.log("Age is: " + age);         // Age is: 25
console.log("Score: " + 10 + 20);      // Score: 1020  ← left to right
console.log("Score: " + (10 + 20));    // Score: 30    ← () forces math first

// -----------------------------------------------
// 3. Concatenation using += operator
// -----------------------------------------------
console.log("--- Using += ---");

let message = "Hello";
message += " ";
message += "World";
console.log(message);  // Hello World

// -----------------------------------------------
// 4. Template Literals (Modern Way - ES6)
// -----------------------------------------------
console.log("--- Template Literals ---");

let city = "New York";
let country = "USA";

// Old way using +
console.log("City: " + city + ", Country: " + country);

// New way using backticks and ${}
console.log(`City: ${city}, Country: ${country}`);  // cleaner ✓

// -----------------------------------------------
// 5. Multiline string using Template Literal
// -----------------------------------------------
console.log("--- Multiline ---");

let address = `Name   : John Doe
City   : New York
Country: USA`;

console.log(address);

// -----------------------------------------------
// 6. Concatenation in a loop
// -----------------------------------------------
console.log("--- Loop Concatenation ---");

let fruits = ["Apple", "Mango", "Banana"];
let list = "";

for (let i = 0; i < fruits.length; i++) {
    list += fruits[i] + " ";
}
console.log(list);  // Apple Mango Banana

// -----------------------------------------------
// Summary
// -----------------------------------------------
// "Hello" + " " + "World"  → Hello World   (using +)
// `Hello ${name}`           → Hello John    (template literal ✓ preferred)
