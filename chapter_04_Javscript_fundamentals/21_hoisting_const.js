// ============================================================
// HOISTING WITH CONST
// ============================================================
// 'const' is hoisted LIKE 'let' — to the top of its block.
// 'const' is also affected by the Temporal Dead Zone (TDZ).
// KEY DIFFERENCE: 'const' MUST be initialized at declaration.
// 'const' cannot be reassigned (but object properties can change).
// ============================================================

// ---- Example 1: const must be initialized at declaration ----
console.log("--- Example 1: const must be initialized ---");

const name = "Bob";
console.log(name); // ✅ "Bob"

// const age;      // ❌ SyntaxError: Missing initializer in const declaration
// age = 30;

// ---- Example 2: Accessing const before declaration (TDZ) ----
console.log("\n--- Example 2: const in Temporal Dead Zone ---");

// console.log(city); // ❌ ReferenceError: Cannot access 'city' before initialization
const city = "Paris";
console.log(city);   // ✅ "Paris"

// ---- Example 3: const is block-scoped (like let) ----
console.log("\n--- Example 3: const is block-scoped ---");

const country = "USA";

{
    // console.log(country); // ❌ ReferenceError (inner 'country' in TDZ shadows outer)
    const country = "Canada";
    console.log(country);    // ✅ "Canada"
}

console.log(country);        // ✅ "USA" (outer const unchanged)

// ---- Example 4: const in if block ----
console.log("\n--- Example 4: const inside if block ---");

const status = "pending";

if (true) {
    // console.log(status); // ❌ ReferenceError (inner 'status' in TDZ)
    const status = "completed";
    console.log(status);    // ✅ "completed"
}

console.log(status);        // ✅ "pending"

// ---- Example 5: const in for loop ----
console.log("\n--- Example 5: const in for loop ---");

// Each iteration gets its own 'value' (important for closures!)
for (const value of [10, 20, 30]) {
    console.log(value); // ✅ 10, 20, 30
}

// console.log(value); // ❌ ReferenceError (out of scope)

// ---- Example 6: const prevents reassignment ----
console.log("\n--- Example 6: const cannot be reassigned ---");

const PI = 3.14159;
console.log(PI); // ✅ 3.14159

// PI = 3.14;   // ❌ TypeError: Assignment to constant variable

// ---- Example 7: const objects and arrays (property changes allowed) ----
console.log("\n--- Example 7: const object properties CAN change ---");

const person = { name: "Alice", age: 25 };
console.log(person); // ✅ { name: "Alice", age: 25 }

person.age = 26;     // ✅ Allowed (modifying property)
console.log(person); // ✅ { name: "Alice", age: 26 }

// person = {};     // ❌ TypeError: Assignment to constant variable (reassignment blocked)

const numbers = [1, 2, 3];
numbers.push(4);     // ✅ Allowed (modifying array)
console.log(numbers); // ✅ [1, 2, 3, 4]

// numbers = [];    // ❌ TypeError: Assignment to constant variable

// ---- Example 8: const vs var vs let comparison ----
console.log("\n--- Example 8: Summary comparison ---");

// var is function-scoped, hoisted + initialized to undefined
// let is block-scoped, hoisted but in TDZ
// const is block-scoped, hoisted but in TDZ, MUST initialize, CANNOT reassi