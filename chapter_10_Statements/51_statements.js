/**
 * ========================================
 * JAVASCRIPT STATEMENTS - COMPREHENSIVE GUIDE
 * ========================================
 * 
 * What is a Statement?
 * A statement is an instruction that the browser will execute.
 * Multiple statements are separated by semicolons.
 * 
 * Types of Statements:
 * 1. Expression Statements
 * 2. Declaration Statements
 * 3. Control Flow Statements
 * 4. Loop Statements
 * 5. Jump Statements
 */

console.log("========== 1. EXPRESSION STATEMENTS ==========");
/**
 * Expression Statement: Any expression followed by a semicolon becomes a statement.
 * It performs an action but doesn't declare or control flow.
 */

// Simple value statement
5 + 6;  // Expression statement

// Assignment statement (a type of expression statement)
let x = 10;

// Function call statement
console.log("Hello World");  // This is an expression statement

// Arithmetic operations
10 * 5;
20 / 4;

// String concatenation
"Hello" + " " + "JavaScript";

// Increment/Decrement as statements
let count = 0;
count++;  // Expression statement
count--;  // Expression statement


console.log("\n========== 2. DECLARATION STATEMENTS ==========");
/**
 * Declaration Statements: Introduce new variables, functions, or classes.
 * They define something but don't produce a value.
 */

// Variable declaration
var name1 = "Praveen";
let age = 25;
const city = "Bangalore";

// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Class declaration
class Person {
    constructor(name) {
        this.name = name;
    }
}

// Calling the function
console.log(greet("Praveen"));


console.log("\n========== 3. CONDITIONAL/CONTROL FLOW STATEMENTS ==========");
/**
 * Control Flow Statements: Execute code based on conditions.
 * They control which parts of code run.
 */

// IF Statement
console.log("--- IF Statement ---");
let score = 75;
if (score >= 60) {
    console.log("Pass");
}

// IF-ELSE Statement
console.log("--- IF-ELSE Statement ---");
let age2 = 15;
if (age2 >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// IF-ELSE IF-ELSE Statement
console.log("--- IF-ELSE IF-ELSE Statement ---");
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// SWITCH Statement
console.log("--- SWITCH Statement ---");
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

// TERNARY Operator (conditional expression)
console.log("--- TERNARY Operator ---");
let number = 20;
let result = number > 18 ? "Adult" : "Minor";
console.log(result);  // Output: Adult


console.log("\n========== 4. LOOP STATEMENTS ==========");
/**
 * Loop Statements: Repeat code multiple times.
 * Used when you need to execute the same code repeatedly.
 */

// FOR Loop
console.log("--- FOR Loop ---");
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

// WHILE Loop
console.log("--- WHILE Loop ---");
let counter = 0;
while (counter < 3) {
    console.log("Counter: " + counter);
    counter++;
}

// DO-WHILE Loop
console.log("--- DO-WHILE Loop ---");
let num = 0;
do {
    console.log("Number: " + num);
    num++;
} while (num < 3);

// FOR-IN Loop (iterates over object properties)
console.log("--- FOR-IN Loop ---");
let person = {
    name: "Praveen",
    age: 25,
    city: "Bangalore"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// FOR-OF Loop (iterates over array values)
console.log("--- FOR-OF Loop ---");
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}

// forEach Method
console.log("--- forEach Method ---");
let fruits = ["Apple", "Banana", "Orange"];
fruits.forEach(function (fruit, index) {
    console.log(index + ": " + fruit);
});


console.log("\n========== 5. JUMP STATEMENTS ==========");
/**
 * Jump Statements: Transfer control flow to another part of the program.
 * Includes: break, continue, return, throw
 */

// BREAK Statement
console.log("--- BREAK Statement ---");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exit the loop when i equals 5
    }
    console.log("Value: " + i);
}

// CONTINUE Statement
console.log("--- CONTINUE Statement ---");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skip iteration when i equals 2
    }
    console.log("Value: " + i);
}

// RETURN Statement
console.log("--- RETURN Statement ---");
function checkAge(age) {
    if (age < 18) {
        return "Not eligible";
    }
    return "Eligible";
}
console.log(checkAge(20));
console.log(checkAge(15));

// THROW Statement
console.log("--- THROW Statement ---");
function validateAge(age) {
    if (age < 0 || age > 150) {
        throw "Age must be between 0 and 150";
    }
    return "Age is valid";
}
try {
    console.log(validateAge(25));
    console.log(validateAge(-5));  // This will throw an error
} catch (error) {
    console.log("Error caught: " + error);
}


console.log("\n========== 6. TRY-CATCH-FINALLY STATEMENT ==========");
/**
 * Error Handling Statements: Handle exceptions in code.
 */

try {
    let result = 10 / 2;
    console.log("Result: " + result);
    // Intentional error
    let obj = null;
    console.log(obj.name);
} catch (error) {
    console.log("Error occurred: " + error.message);
} finally {
    console.log("Finally block always executes");
}


console.log("\n========== 7. BLOCK STATEMENT ==========");
/**
 * Block Statement: Groups multiple statements together using curly braces.
 */

// This is a block statement
{
    let blockVar = "Inside block";
    console.log(blockVar);  // Accessible here
    let blockVar2 = 10;
    console.log(blockVar2);
}
// console.log(blockVar);  // NOT accessible here - ReferenceError


console.log("\n========== 8. LABELED STATEMENTS ==========");
/**
 * Labeled Statements: Identify loops or blocks with labels.
 * Used with break or continue to jump to specific labels.
 */

console.log("--- Labeled Loop Example ---");
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;  // Breaks out of outer loop
        }
        console.log("i=" + i + ", j=" + j);
    }
}


console.log("\n========== SUMMARY TABLE ==========");
/**
 * ┌─────────────────────┬────────────────────────────────────────────┐
 * │ STATEMENT TYPE      │ PURPOSE                                    │
 * ├─────────────────────┼────────────────────────────────────────────┤
 * │ Expression          │ Perform an action or calculation           │
 * │ Declaration         │ Declare variables, functions, or classes   │
 * │ Control Flow        │ Execute code based on conditions           │
 * │ Loop                │ Repeat code multiple times                 │
 * │ Jump                │ Transfer control flow (break, continue)    │
 * │ Try-Catch-Finally   │ Handle errors                              │
 * │ Block               │ Group multiple statements                  │
 * │ Labeled             │ Label loops/blocks for specific jumps      │
 * └─────────────────────┴────────────────────────────────────────────┘
 */

console.log("========== END OF STATEMENTS GUIDE ==========");
