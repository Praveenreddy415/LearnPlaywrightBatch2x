// ============================================
// VAR IS FUNCTION SCOPED - SIMPLE EXPLANATION
// ============================================

/*
WHAT DOES "FUNCTION SCOPED" MEAN?
- Variables declared with var are only visible INSIDE the function where they are created.
- If you declare var inside a function, you cannot use it outside that function.
- If you declare var inside a block (like if, for, while), it is still visible in the whole function!
*/

console.log("===== EXAMPLE 1: var inside a function =====");

function showMessage() {
    var message = "Hello from inside the function!";
    console.log(message); // Works: message is visible here
}

showMessage(); // Output: Hello from inside the function!
// console.log(message); // ERROR: message is not defined outside the function

console.log("\n===== EXAMPLE 2: var inside a block (if/for) =====");

function testVarScope() {
    if (true) {
        var color = "blue";
    }
    // color is still visible here!
    console.log("Color inside function:", color); // blue
}

testVarScope();
// console.log(color); // ERROR: color is not defined outside the function

console.log("\n===== EXAMPLE 3: var is NOT block scoped =====");

function countNumbers() {
    for (var i = 1; i <= 3; i++) {
        console.log("Inside loop:", i);
    }
    // i is still visible here!
    console.log("After loop, i is:", i); // 4
}

countNumbers();
// console.log(i); // ERROR: i is not defined outside the function

/*
KEY POINTS:
1. var is visible everywhere inside the function where it is declared
2. var is NOT block scoped (not limited to if, for, while blocks)
3. var is NOT visible outside the function
4. Use let/const for block scope in modern JavaScript
*/
