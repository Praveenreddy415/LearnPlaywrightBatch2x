// ============================================================
// TEMPORAL DEAD ZONE (TDZ) WITH LET AND CONST
// ============================================================
// TDZ = The period from entering a scope until the declaration
//       statement is reached.
// During TDZ, accessing the variable throws ReferenceError.
// This applies to BOTH 'let' and 'const'.
// ============================================================

// ---- Example 1: Basic TDZ with let ----
console.log("--- Example 1: Basic TDZ with let ---");

// ↓ TDZ ZONE STARTS here
// console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;       // ← TDZ ZONE ENDS here
// ↑ Now x is accessible
console.log(x);   // ✅ 10

// ---- Example 2: Basic TDZ with const ----
console.log("\n--- Example 2: Basic TDZ with const ---");

// ↓ TDZ ZONE STARTS here
// console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
const y = 20;     // ← TDZ ZONE ENDS here
// ↑ Now y is accessible
console.log(y);   // ✅ 20

// ---- Example 3: TDZ inside a block (shadowing) ----
console.log("\n--- Example 3: TDZ with shadowing ---");

let a = "outer";
console.log(a);   // ✅ "outer" (outer 'a' is accessible)

{
    // ↓ TDZ ZONE STARTS for inner 'a'
    // console.log(a); // ❌ ReferenceError (looks for inner 'a', which is in TDZ)
    // Even though outer 'a' exists, the inner 'a' shadows it!
    let a = "inner"; // ← TDZ ZONE ENDS here
    // ↑ Now inner 'a' is accessible
    console.log(a);  // ✅ "inner"
}

console.log(a);    // ✅ "outer" (outer 'a' again)

// ---- Example 4: TDZ in if block ----
console.log("\n--- Example 4: TDZ in if block ---");

let status = "inactive";

if (true) {
    // ↓ TDZ for inner 'status'
    // console.log(status); // ❌ ReferenceError
    const status = "active"; // ← TDZ ends
    console.log(status);     // ✅ "active"
}

console.log(status);         // ✅ "inactive"

// ---- Example 5: TDZ in for loop ----
console.log("\n--- Example 5: TDZ in for loop ---");

for (let i = 0; i < 1; i++) {
    // ↓ TDZ for 'i' in this iteration
    // console.log(i); // Would cause ReferenceError if placed here
    console.log("Inside loop:", i); // ✅ Works after TDZ ends
}

// ---- Example 6: TDZ with try-catch (important!) ----
console.log("\n--- Example 6: TDZ with try-catch ---");

try {
    // ↓ TDZ for 'name'
    console.log(name); // ❌ ReferenceError (not caught as undefined)
    // ↑ This is NOT a normal error — it's a TDZ error
} catch (error) {
    console.log("Error caught:", error.message);
    // ✅ "Error caught: Cannot access 'name' before initialization"
}

const name = "Alice"; // ← TDZ ends after this line

// ---- Example 7: var does NOT have TDZ ----
console.log("\n--- Example 7: var ignores TDZ ---");

console.log(oldVar); // ✅ undefined (NO TDZ for var!)
var oldVar = "old";

// But let/const DO have TDZ:
// console.log(newVar); // ❌ ReferenceError (TDZ!)
let newVar = "new";

// ---- Example 8: TDZ in function parameter scope (tricky!) ----
console.log("\n--- Example 8: TDZ in function parameters ---");

const defaultValue = "default";

function greet(msg = defaultValue) {
    // ↓ TDZ for 'greeting' starts here
    // console.log(greeting); // ❌ ReferenceError
    let greeting = msg;      // ← TDZ ends
    console.log(greeting);   // ✅ Works
}

greet(); // ✅ "default"

// ---- Example 9: Nested blocks and TDZ ----
console.log("\n--- Example 9: Nested blocks with TDZ ---");

let outer = "outer";

{
    // ↓ TDZ for inner 'outer'
    // console.log(outer); // ❌ ReferenceError
    let outer = "middle";   // ← TDZ ends
    console.log(outer);     // ✅ "middle"

    {
        // ↓ TDZ for 'outer' in this nested block
        // console.log(outer); // ❌ ReferenceError
        const outer = "inner"; // ← TDZ ends
        console.log(outer);    // ✅ "inner"
    }

    console.log(outer); // ✅ "middle"
}

console.log(outer); // ✅ "outer"

// ---- Example 10: TDZ visual timeline ----
console.log("\n--- Example 10: TDZ timeline ---");

/*
    TIMELINE FOR THIS BLOCK:
    
    ┌─────────────────────────────────────────────┐
    │ Enter scope                                 │
    │ ↓ TDZ STARTS (temp is inaccessible)         │
    │ console.log(temp); // ❌ ReferenceError     │
    │ ↓                                           │
    │ let temp = "value"; // ← TDZ ENDS           │
    │ ↓                                           │
    │ console.log(temp); // ✅ "value"            │
    │ ↓                                           │
    │ Exit scope                                  │
    └─────────────────────────────────────────────┘
    
    KEY POINT: TDZ is NOT about time, but about POSITION in the code!
*/

// ---- Summary: var vs let vs const ----
console.log("\n--- Summary: Hoisting comparison ---");

/*
    VAR:
    - Hoisted to function/global scope
    - Initialized to 'undefined'
    - NO Temporal Dead Zone
    - Accessing before init → undefined (no error)

    LET:
    - Hoisted to block scope
    - NOT initialized (TDZ)
    - HAS Temporal Dead Zone
    - Accessing before init → ReferenceError

    CONST:
    - Hoisted to block scope
    - NOT initialized (TDZ)
    - HAS Temporal Dead Zone
    - Must be initialized at declaration
    - Cannot be reassigned
*/
