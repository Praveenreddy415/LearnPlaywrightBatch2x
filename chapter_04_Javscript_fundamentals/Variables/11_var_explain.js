// ========================================
// VAR IN JAVASCRIPT - COMPLETE EXPLANATION
// ========================================

// 1. BASIC VARIABLE DECLARATION
// ========================================
console.log("1. BASIC VAR DECLARATION:");
var firstName = "John";
console.log(firstName); // Output: John

var age = 25;
console.log(age); // Output: 25


// 2. VAR HAS FUNCTION SCOPE (NOT BLOCK SCOPE)
// ========================================
console.log("\n2. VAR HAS FUNCTION SCOPE:");

function myFunction() {
    var localVar = "I am local to this function";
    console.log(localVar); // Output: I am local to this function
}

myFunction();
// console.log(localVar); // ReferenceError: localVar is not defined


// 3. VAR IS ACCESSIBLE THROUGHOUT THE FUNCTION
// ========================================
console.log("\n3. VAR ACCESSIBLE IN ENTIRE FUNCTION:");

function testScope() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Output: 10 (accessible outside block)
}

testScope();


// 4. VAR CAN BE REDECLARED
// ========================================
console.log("\n4. VAR CAN BE REDECLARED:");

var country = "USA";
console.log(country); // Output: USA

var country = "Canada"; // Redeclaring is allowed
console.log(country); // Output: Canada


// 5. VAR CAN BE REASSIGNED
// ========================================
console.log("\n5. VAR CAN BE REASSIGNED:");

var city = "New York";
console.log(city); // Output: New York

city = "Los Angeles"; // Just reassigning
console.log(city); // Output: Los Angeles


// 6. VAR HOISTING - DECLARATION HOISTED
// ========================================
console.log("\n6. VAR HOISTING:");

console.log(myVar); // Output: undefined (not ReferenceError)
var myVar = 5;
console.log(myVar); // Output: 5

// The above code is interpreted as:
// var myVar;           <- Hoisted (declared but not initialized)
// console.log(myVar);  <- undefined
// myVar = 5;           <- Initialized
// console.log(myVar);  <- 5


// 7. VAR IN LOOPS
// ========================================
console.log("\n7. VAR IN LOOPS:");

for (var i = 0; i < 3; i++) {
    console.log("Loop iteration:", i);
}

console.log("After loop, i =", i); // Output: 3 (i is accessible outside loop)


// 8. VAR IN NESTED SCOPES
// ========================================
console.log("\n8. VAR IN NESTED SCOPES:");

function outer() {
    var outerVar = "Outer";

    function inner() {
        var innerVar = "Inner";
        console.log(outerVar); // Output: Outer (can access parent scope)
        console.log(innerVar); // Output: Inner
    }

    inner();
    // console.log(innerVar); // ReferenceError: innerVar is not defined
}

outer();


// 9. VAR INITIALIZED WITHOUT VALUE
// ========================================
console.log("\n9. VAR INITIALIZED WITHOUT VALUE:");

var withoutValue;
console.log(withoutValue); // Output: undefined


// 10. MULTIPLE VAR DECLARATIONS
// ========================================
console.log("\n10. MULTIPLE VAR DECLARATIONS:");

var a = 1, b = 2, c = 3;
console.log(a, b, c); // Output: 1 2 3


// 11. VAR WITH GLOBAL SCOPE
// ========================================
console.log("\n11. VAR WITH GLOBAL SCOPE:");

var globalVar = "I am global";

function accessGlobal() {
    console.log(globalVar); // Output: I am global (can access global var)
}

accessGlobal();
console.log(globalVar); // Output: I am global


// 12. VAR SHADOWING
// ========================================
console.log("\n12. VAR SHADOWING:");

var name = "Outer Scope";

function testShadowing() {
    var name = "Inner Scope"; // Shadows outer var
    console.log(name); // Output: Inner Scope
}

testShadowing();
console.log(name); // Output: Outer Scope


// 13. PRACTICAL EXAMPLE - COUNTER FUNCTION
// ========================================
console.log("\n13. PRACTICAL EXAMPLE - COUNTER:");

function createCounter() {
    var count = 0; // var with function scope

    return {
        increment: function () {
            count++;
            return count;
        },
        getCount: function () {
            return count;
        },
    };
}

var counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.getCount()); // Output: 2


// 14. VAR - COMMON MISTAKE (Unintended Global)
// ========================================
console.log("\n14. COMMON MISTAKE - UNINTENDED GLOBAL:");

function testMistake() {
    mistakeVar = "Oops! I am global now"; // No var keyword - creates global
}

testMistake();
console.log(mistakeVar); // Output: Oops! I am global now (global scope!)


// 15. SUMMARY OF VAR CHARACTERISTICS
// ========================================
console.log("\n15. SUMMARY OF VAR CHARACTERISTICS:");
console.log(`
✓ var has FUNCTION SCOPE (not block scope)
✓ var is HOISTED to the top of its function
✓ var can be REDECLARED in the same scope
✓ var can be REASSIGNED
✓ var initialized as UNDEFINED if not assigned
✓ var at global level becomes property of window (in browsers)
✓ var allows CLOSURE access to parent scope
`);
