// ============================================================
// HOISTING WITH LET
// ============================================================
// 'let' IS hoisted — but it is NOT initialized.
// Accessing it before the declaration line causes a
// ReferenceError: Cannot access 'x' before initialization
// This "dead zone" between the start of the block and the
// declaration line is called the TEMPORAL DEAD ZONE (TDZ).
// ============================================================

// ---- Example 1: Accessing let before declaration ----
console.log("--- Example 1: let before declaration ---");

// console.log(name); // ❌ ReferenceError: Cannot access 'name' before initialization
let name = "Alice";
console.log(name);   // ✅ Alice

// ---- Example 2: Temporal Dead Zone (TDZ) visualized ----
console.log("\n--- Example 2: Temporal Dead Zone ---");

{
    // ↓ TDZ starts here for 'age'
    // console.log(age); // ❌ ReferenceError (still in TDZ)
    let age = 25;        // ← TDZ ends here
    console.log(age);    // ✅ 25
}

// ---- Example 3: let vs var side-by-side ----
console.log("\n--- Example 3: let vs var ---");

console.log(a); // ✅ undefined  (var is hoisted + initialized to undefined)
var a = 10;

// console.log(b); // ❌ ReferenceError (let is hoisted but NOT initialized)
let b = 20;
console.log(b); // ✅ 20

// ---- Example 4: let is block-scoped (not hoisted outside the block) ----
console.log("\n--- Example 4: let stays inside its block ---");

if (true) {
    let city = "London";
    console.log(city); // ✅ London
}
// console.log(city); // ❌ ReferenceError: city is not defined