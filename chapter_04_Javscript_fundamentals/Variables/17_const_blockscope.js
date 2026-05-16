// ============================================
// CONST IS BLOCK SCOPED - SIMPLE EXPLANATION
// ============================================

/*
WHAT DOES "BLOCK SCOPED" MEAN FOR CONST?
- A variable declared with const is only visible INSIDE the block where it is created.
- A "block" is code inside { } (like if, for, while, function, etc).
- const is BLOCK SCOPED (like let).
- const CANNOT be reassigned once declared.
- const must be initialized when declared.
*/

console.log("===== EXAMPLE 1: const inside a function =====");

function showUserInfo() {
    const userName = "Alice";
    console.log("Inside function:", userName); // ✓ Alice
}

showUserInfo();
// console.log(userName); // ✗ ERROR: userName is not defined


console.log("\n===== EXAMPLE 2: const inside an if block =====");

if (true) {
    const country = "USA";
    console.log("Inside if block:", country); // ✓ USA
}
// console.log("Outside if block:", country); // ✗ ERROR: country is not defined


console.log("\n===== EXAMPLE 3: const inside a for loop =====");

for (const i of [1, 2, 3]) {
    console.log("Loop value:", i);
}
// console.log(i); // ✗ ERROR: i is not defined


console.log("\n===== EXAMPLE 4: const CANNOT be reassigned =====");

const PI = 3.14159;
console.log("PI:", PI); // 3.14159

// Try to change it
// PI = 3.14; // ✗ ERROR: Assignment to constant variable


console.log("\n===== EXAMPLE 5: Comparing var, let, and const in a block =====");

console.log("--- Using var (NOT block scoped) ---");
if (true) {
    var age = 25;
}
console.log("After if block, age is:", age); // 25 (var is NOT block scoped)

console.log("\n--- Using let (block scoped) ---");
if (true) {
    let city = "New York";
}
// console.log("After if block, city is:", city); // ✗ ERROR (let IS block scoped)

console.log("\n--- Using const (block scoped) ---");
if (true) {
    const country = "Canada";
}
// console.log("After if block, country is:", country); // ✗ ERROR (const IS block scoped)


console.log("\n===== EXAMPLE 6: const in nested blocks =====");

function calculatePrice() {
    const basePrice = 100;
    console.log("Base price:", basePrice); // ✓ Works

    if (true) {
        const discount = 10;
        const finalPrice = basePrice - discount;
        console.log("Final price:", finalPrice); // ✓ Works
    }

    // console.log(discount); // ✗ ERROR: discount is not defined
    // console.log(finalPrice); // ✗ ERROR: finalPrice is not defined
}

calculatePrice();


console.log("\n===== EXAMPLE 7: const with objects (can modify properties) =====");

const user = { name: "Bob", age: 30 };
console.log("User:", user); // { name: 'Bob', age: 30 }

// ✓ Can modify properties of the object
user.age = 31;
console.log("Updated user:", user); // { name: 'Bob', age: 31 }

// ✗ Cannot reassign the object
// user = { name: "Charlie", age: 25 }; // ERROR: Assignment to constant variable


console.log("\n===== EXAMPLE 8: const with arrays (can modify elements) =====");

const numbers = [10, 20, 30];
console.log("Numbers:", numbers); // [10, 20, 30]

// ✓ Can modify array elements
numbers[0] = 100;
console.log("After change:", numbers); // [100, 20, 30]

// ✓ Can add elements
numbers.push(40);
console.log("After push:", numbers); // [100, 20, 30, 40]

// ✗ Cannot reassign the array
// numbers = [5, 6, 7]; // ERROR: Assignment to constant variable


console.log("\n===== EXAMPLE 9: Real-world example - Store configuration =====");

function setupApp() {
    const APP_NAME = "My Shopping App";
    const APP_VERSION = "1.0.0";
    const MAX_USERS = 1000;

    console.log("App Name:", APP_NAME);
    console.log("Version:", APP_VERSION);
    console.log("Max Users:", MAX_USERS);

    if (true) {
        const DEBUG_MODE = true;
        const TIMEOUT = 5000;
        console.log("Debug Mode:", DEBUG_MODE);
        console.log("Timeout:", TIMEOUT);
    }
}

setupApp();


console.log("\n===== EXAMPLE 10: const in loop =====");

const students = ["Alice", "Bob", "Charlie"];

for (const student of students) {
    console.log("Student:", student);
}
// console.log(student); // ✗ ERROR: student is not defined


console.log("\n===== EXAMPLE 11: const prevents accidental changes =====");

const PI_VALUE = 3.14159;
console.log("PI:", PI_VALUE); // 3.14159

if (true) {
    // This is a DIFFERENT PI in a different block
    const PI_VALUE = 3.14;
    console.log("PI in block:", PI_VALUE); // 3.14
}

console.log("PI outside block:", PI_VALUE); // Still 3.14159


console.log("\n===== EXAMPLE 12: Best practice - Settings object =====");

function initializeGame() {
    const gameSettings = {
        difficulty: "normal",
        soundEnabled: true,
        screenWidth: 1920,
        screenHeight: 1080
    };

    console.log("Game Settings:", gameSettings);

    if (gameSettings.soundEnabled) {
        const volumeLevel = 80;
        console.log("Volume set to:", volumeLevel);
    }
}

initializeGame();


console.log("\n===== KEY POINTS ABOUT CONST =====");
console.log("1. const is BLOCK SCOPED (not visible outside block)");
console.log("2. const CANNOT be reassigned");
console.log("3. const MUST be initialized when declared");
console.log("4. const can have properties/elements modified (objects/arrays)");
console.log("5. Use const by default in modern JavaScript");
console.log("6. Use let only if you need to reassign");
console.log("7. Avoid var (old syntax)");
console.log("8. const makes code safer and clearer");


console.log("\n===== COMPARISON: const vs let vs var =====");
console.log("┌──────────┬────────┬────────┬──────────┐");
console.log("│ Feature  │  const │  let   │   var    │");
console.log("├──────────┼────────┼────────┼──────────┤");
console.log("│ Scoped   │ block  │ block  │ function │");
console.log("│ Reassign │  No    │  Yes   │   Yes    │");
console.log("│ Init req │  Yes   │  No    │   No     │");
console.log("│ Best for │ Config │ Values │   Old    │");
console.log("└──────────┴────────┴────────┴──────────┘");
