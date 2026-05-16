// ============================================
// LET IS BLOCK SCOPED - SIMPLE EXPLANATION
// ============================================

/*
WHAT DOES "BLOCK SCOPED" MEAN?
- A variable declared with let is only visible INSIDE the block where it is created.
- A "block" is code inside { } (like if, for, while, function, etc).
- Variables declared with let are NOT visible outside their block.
- This is different from var, which is function scoped.
*/

console.log("===== EXAMPLE 1: let inside a function =====");

function showMessage() {
    let message = "Hello from inside the function!";
    console.log(message); // ✓ Works: message is visible here
}

showMessage(); // Output: Hello from inside the function!
// console.log(message); // ✗ ERROR: message is not defined


console.log("\n===== EXAMPLE 2: let inside an if block =====");

if (true) {
    let color = "blue";
    console.log("Inside if block:", color); // ✓ blue
}
// console.log("Outside if block:", color); // ✗ ERROR: color is not defined


console.log("\n===== EXAMPLE 3: let inside a for loop =====");

for (let i = 1; i <= 3; i++) {
    console.log("Inside loop, i is:", i); // 1, 2, 3
}
// console.log("After loop, i is:", i); // ✗ ERROR: i is not defined


console.log("\n===== EXAMPLE 4: Comparing let vs var in a for loop =====");

console.log("--- Using var ---");
for (var x = 1; x <= 3; x++) {
    console.log("Inside loop, x is:", x); // 1, 2, 3
}
console.log("After loop, x is:", x); // 4 (var is NOT block scoped!)

console.log("\n--- Using let ---");
for (let y = 1; y <= 3; y++) {
    console.log("Inside loop, y is:", y); // 1, 2, 3
}
// console.log("After loop, y is:", y); // ✗ ERROR: y is not defined (let IS block scoped!)


console.log("\n===== EXAMPLE 5: let inside nested blocks =====");

function testNestedBlocks() {
    let outerVar = "I am outer";
    console.log("Outer:", outerVar); // ✓ Works

    if (true) {
        let innerVar = "I am inner";
        console.log("Inner:", innerVar); // ✓ Works
        console.log("Can access outer from inner:", outerVar); // ✓ Works
    }

    // console.log("Trying to access inner from outer:", innerVar); // ✗ ERROR
}

testNestedBlocks();


console.log("\n===== EXAMPLE 6: let inside while loop =====");

let counter = 1;
while (counter <= 3) {
    let message = "Loop iteration " + counter;
    console.log(message);
    counter++;
}
// console.log(message); // ✗ ERROR: message is not defined


console.log("\n===== EXAMPLE 7: Real-world example - Bank Account =====");

function processTransaction() {
    let balance = 1000;
    console.log("Starting balance:", balance);

    if (true) {
        let deposit = 500;
        balance = balance + deposit;
        console.log("After deposit of " + deposit + ", balance is:", balance); // 1500
    }

    // console.log(deposit); // ✗ ERROR: deposit is not defined outside its block

    if (true) {
        let withdrawal = 200;
        balance = balance - withdrawal;
        console.log("After withdrawal of " + withdrawal + ", balance is:", balance); // 1300
    }

    // console.log(withdrawal); // ✗ ERROR: withdrawal is not defined outside its block

    console.log("Final balance:", balance); // 1300
}

processTransaction();


console.log("\n===== EXAMPLE 8: let prevents accidental overwriting =====");

let userAge = 25;
console.log("Initial age:", userAge); // 25

if (true) {
    let userAge = 30; // This is a DIFFERENT variable (block scoped)
    console.log("Age inside block:", userAge); // 30
}

console.log("Age outside block:", userAge); // Still 25 (original)


console.log("\n===== EXAMPLE 9: let vs var - Practical Difference =====");

console.log("--- VAR Example (NOT block scoped) ---");
for (var i = 1; i <= 3; i++) {
    // var i is function scoped, visible everywhere
}
console.log("After var loop, i is:", i); // 4

console.log("\n--- LET Example (block scoped) ---");
for (let j = 1; j <= 3; j++) {
    // let j is block scoped, only visible in the loop
}
console.log("After let loop, j would be undefined if accessed"); // j is not accessible


console.log("\n===== KEY POINTS ABOUT LET =====");
console.log("1. let is BLOCK SCOPED (not function scoped)");
console.log("2. let is not visible outside its block { }");
console.log("3. let is safer than var (prevents mistakes)");
console.log("4. Use let in modern JavaScript (instead of var)");
console.log("5. Blocks include: if, for, while, function, { }");
console.log("6. let can be redeclared in different blocks");
console.log("7. Better for: loops, conditional blocks, nested scopes");
