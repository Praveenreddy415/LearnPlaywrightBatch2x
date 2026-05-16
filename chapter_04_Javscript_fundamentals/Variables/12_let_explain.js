// ========================================
// LET IN JAVASCRIPT - COMPLETE EXPLANATION
// ========================================

// 1. BASIC VARIABLE DECLARATION
// ========================================
console.log("1. BASIC LET DECLARATION:");
let firstName = "John";
console.log(firstName); // Output: John

let age = 25;
console.log(age); // Output: 25


// 2. LET HAS BLOCK SCOPE (NOT FUNCTION SCOPE)
// ========================================
console.log("\n2. LET HAS BLOCK SCOPE:");

function myFunction() {
    if (true) {
        let localVar = "I am local to this block";
        console.log(localVar); // Output: I am local to this block
    }
    // console.log(localVar); // ReferenceError: localVar is not defined
}

myFunction();


// 3. LET IS NOT ACCESSIBLE OUTSIDE THE BLOCK
// ========================================
console.log("\n3. LET NOT ACCESSIBLE OUTSIDE BLOCK:");

if (true) {
    let blockVar = 10;
    console.log("Inside block:", blockVar); // Output: 10
}
// console.log(blockVar); // ReferenceError: blockVar is not defined


// 4. LET CANNOT BE REDECLARED IN SAME SCOPE
// ========================================
console.log("\n4. LET CANNOT BE REDECLARED:");

let country = "USA";
console.log(country); // Output: USA

// let country = "Canada"; // SyntaxError: Identifier 'country' has already been declared
// This will cause an error!


// 5. LET CAN BE REASSIGNED
// ========================================
console.log("\n5. LET CAN BE REASSIGNED:");

let city = "New York";
console.log(city); // Output: New York

city = "Los Angeles"; // Just reassigning - this is allowed
console.log(city); // Output: Los Angeles


// 6. LET HOISTING - TEMPORAL DEAD ZONE
// ========================================
console.log("\n6. LET HOISTING - TEMPORAL DEAD ZONE:");

// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 5;
console.log(myLet); // Output: 5

// let is hoisted but not initialized - enters "Temporal Dead Zone"


// 7. LET IN LOOPS - NEW BINDING EACH ITERATION
// ========================================
console.log("\n7. LET IN LOOPS - NEW BINDING PER ITERATION:");

for (let i = 0; i < 3; i++) {
    console.log("Loop iteration:", i);
}
// console.log(i); // ReferenceError: i is not defined (not accessible outside loop)


// 8. LET vs VAR IN LOOPS - IMPORTANT DIFFERENCE
// ========================================
console.log("\n8. LET vs VAR IN LOOPS:");

// Using var - i is shared across all iterations
console.log("Using VAR in loop:");
var varArray = [];
for (var j = 0; j < 3; j++) {
    varArray.push(function () {
        return j;
    });
}
console.log(varArray[0]()); // Output: 3 (j is 3 by end of loop)
console.log(varArray[1]()); // Output: 3
console.log(varArray[2]()); // Output: 3

// Using let - new i for each iteration
console.log("\nUsing LET in loop:");
let letArray = [];
for (let k = 0; k < 3; k++) {
    letArray.push(function () {
        return k;
    });
}
console.log(letArray[0]()); // Output: 0
console.log(letArray[1]()); // Output: 1
console.log(letArray[2]()); // Output: 2


// 9. LET IN NESTED SCOPES
// ========================================
console.log("\n9. LET IN NESTED SCOPES:");

function outer() {
    let outerVar = "Outer";

    function inner() {
        let innerVar = "Inner";
        console.log(outerVar); // Output: Outer
        console.log(innerVar); // Output: Inner
    }

    inner();
    // console.log(innerVar); // ReferenceError: innerVar is not defined
}

outer();


// 10. LET INITIALIZED WITHOUT VALUE
// ========================================
console.log("\n10. LET INITIALIZED WITHOUT VALUE:");

let withoutValue;
console.log(withoutValue); // Output: undefined


// 11. MULTIPLE LET DECLARATIONS
// ========================================
console.log("\n11. MULTIPLE LET DECLARATIONS:");

let a = 1, b = 2, c = 3;
console.log(a, b, c); // Output: 1 2 3


// 12. LET WITH BLOCK SCOPE - IF STATEMENT
// ========================================
console.log("\n12. LET WITH IF STATEMENT:");

let score = 100;

if (score > 50) {
    let message = "You passed!";
    console.log(message); // Output: You passed!
}

// console.log(message); // ReferenceError: message is not defined


// 13. LET SHADOWING IN NESTED BLOCKS
// ========================================
console.log("\n13. LET SHADOWING IN NESTED BLOCKS:");

let name = "Outer";

{
    let name = "Inner Block 1"; // Shadows outer
    console.log(name); // Output: Inner Block 1

    {
        let name = "Inner Block 2"; // Shadows all outer
        console.log(name); // Output: Inner Block 2
    }

    console.log(name); // Output: Inner Block 1
}

console.log(name); // Output: Outer


// 14. TEMPORAL DEAD ZONE - DETAILED EXAMPLE
// ========================================
console.log("\n14. TEMPORAL DEAD ZONE:");

console.log("Before TDZ");

// The variable x exists but is in temporal dead zone
// console.log(x); // ReferenceError: Cannot access 'x' before initialization

let x = 10; // x is now initialized

console.log("After initialization:", x); // Output: 10


// 15. LET IN TRY-CATCH BLOCKS
// ========================================
console.log("\n15. LET IN TRY-CATCH BLOCKS:");

try {
    let errorVar = "In try block";
    console.log(errorVar);
}
catch (error) {
    let catchVar = "In catch block";
    console.log(catchVar); // Output: In catch block
}

// console.log(errorVar); // ReferenceError: errorVar is not defined
// console.log(catchVar); // ReferenceError: catchVar is not defined


// 16. LET IN WHILE LOOP
// ========================================
console.log("\n16. LET IN WHILE LOOP:");

let count = 0;
while (count < 3) {
    let iterationVar = `Iteration ${count}`;
    console.log(iterationVar);
    count++;
}
// console.log(iterationVar); // ReferenceError: iterationVar is not defined


// 17. PRACTICAL EXAMPLE - BUTTON CLICK HANDLERS
// ========================================
console.log("\n17. PRACTICAL EXAMPLE - CLOSURES WITH LET:");

let buttons = [];
for (let i = 0; i < 3; i++) {
    let btnData = {
        id: i,
        getName: function () {
            return `Button ${this.id}`;
        },
    };
    buttons.push(btnData);
}

console.log(buttons[0].getName()); // Output: Button 0
console.log(buttons[1].getName()); // Output: Button 1
console.log(buttons[2].getName()); // Output: Button 2


// 18. LET vs VAR - PERFORMANCE & SAFETY
// ========================================
console.log("\n18. LET vs VAR - COMPARISON:");

// VAR - function scoped, hoisted, can be redeclared
var varExample = "I am var";

// LET - block scoped, not hoisted (TDZ), cannot be redeclared
let letExample = "I am let";

console.log("Both declared and accessible");


// 19. CONST vs LET PREVIEW
// ========================================
console.log("\n19. WHEN TO USE LET:");
console.log(`
✓ Use let for variables that will be REASSIGNED
✓ Use let for BLOCK-SCOPED variables (safer than var)
✓ Use let in loops (better closure behavior)
✓ Use let to PREVENT accidental redeclaration
✓ Use let for modern JavaScript (ES6+)
`);


// 20. SUMMARY OF LET CHARACTERISTICS
// ========================================
console.log("\n20. SUMMARY OF LET CHARACTERISTICS:");
console.log(`
✓ let has BLOCK SCOPE (if, for, while, {})
✓ let is HOISTED but in Temporal Dead Zone
✓ let CANNOT be REDECLARED in same scope
✓ let CAN be REASSIGNED
✓ let initialized as UNDEFINED if not assigned
✓ let creates NEW BINDING each iteration in loops
✓ let allows CLOSURE with correct values
✓ let is SAFER than var (prevents accidents)
✓ let is the preferred variable declaration in ES6+
`);
