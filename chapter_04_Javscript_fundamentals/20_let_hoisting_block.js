// ============================================================
// LET HOISTING WITH BLOCKS
// ============================================================
// 'let' is hoisted to the TOP of its BLOCK — not the global scope.
// Each block { } creates a brand new scope for 'let'.
// Accessing 'let' before its declaration inside a block → ReferenceError (TDZ).
// ============================================================

// ---- Example 1: Each block has its own 'let' scope ----
console.log("--- Example 1: let is scoped to its block ---");

let x = "global";         // 'x' in global scope

{
    // 'x' here is a DIFFERENT 'x' — hoisted to this block's top (TDZ until line below)
    // console.log(x);    // ❌ ReferenceError (TDZ — the inner 'x' shadows the outer one)
    let x = "block";      // TDZ ends here
    console.log(x);       // ✅ "block"
}

console.log(x);           // ✅ "global" (outer x is unchanged)

// ---- Example 2: Nested blocks — each has its own TDZ ----
console.log("\n--- Example 2: Nested blocks ---");

{
    let outer = "outer block";
    console.log(outer);           // ✅ "outer block"

    {
        // console.log(inner);    // ❌ ReferenceError (TDZ for 'inner')
        let inner = "inner block";
        console.log(inner);       // ✅ "inner block"
        console.log(outer);       // ✅ "outer block" (inner block can see outer)
    }

    // console.log(inner);        // ❌ ReferenceError: inner is not defined (out of scope)
}

// ---- Example 3: let in if block ----
console.log("\n--- Example 3: let inside if block ---");

let status = "active";

if (true) {
    // console.log(status); // ❌ ReferenceError — inner 'status' is in TDZ (shadows outer)
    let status = "inactive"; // new 'status' hoisted to this if-block
    console.log(status);     // ✅ "inactive"
}

console.log(status);         // ✅ "active" (outer status untouched)

// ---- Example 4: let in for loop block ----
console.log("\n--- Example 4: let in for loop ---");

for (let i = 0; i < 3; i++) {
    // Each iteration gets its OWN 'i' scoped to the loop block
    console.log("loop i:", i);  // ✅ 0, 1, 2
}

// console.log(i); // ❌ ReferenceError: i is not defined (scoped to loop block)

// ---- Example 5: let vs var in blocks — clear difference ----
console.log("\n--- Example 5: let vs var in block ---");

{
    var varVariable = "I leak outside!";
    let letVariable = "I stay inside.";
}

console.log(varVariable);    // ✅ "I leak outside!" (var ignores blocks)
// console.log(letVariable); // ❌ ReferenceError (let stays in its block)
 