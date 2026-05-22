// ============================================================
// NULL vs UNDEFINED - Complete Comparison
// ============================================================
// null = Intentional absence of value (assigned by programmer)
// undefined = Unintentional absence of value (assigned by JS)
//
// KEY DIFFERENCE:
// null  → "I explicitly set this to nothing"
// undefined → "This hasn't been assigned a value yet"
// ============================================================

// ---- Example 1: Undefined - variable declared but NOT assigned ----
console.log("--- Example 1: Undefined from declaration ---");

let x;
console.log("Value of x:", x);           // undefined
console.log("Type of x:", typeof x);     // "undefined"

// The variable exists, but has no value yet
console.log("x === undefined:", x === undefined); // true
console.log("x == null:", x == null);            // true (loose equality)
console.log("x === null:", x === null);          // false (strict equality)

// ---- Example 2: Null - explicitly set to nothing ----
console.log("\n--- Example 2: Null from explicit assignment ---");

let y = null;
console.log("Value of y:", y);           // null
console.log("Type of y:", typeof y);     // "object" (quirk of JavaScript!)

console.log("y === null:", y === null);       // true
console.log("y === undefined:", y === undefined); // false
console.log("y == undefined:", y == undefined);   // true (loose equality)

// ---- Example 3: Function returning undefined ----
console.log("\n--- Example 3: Function with no return ---");

function noReturn() {
    // No return statement → implicitly returns undefined
}

let result1 = noReturn();
console.log("Result from noReturn():", result1);     // undefined
console.log("Type:", typeof result1);                // "undefined"

// ---- Example 4: Function explicitly returning null ----
console.log("\n--- Example 4: Function returning null ---");

function returnNull() {
    return null; // Explicitly return null
}

let result2 = returnNull();
console.log("Result from returnNull():", result2);   // null
console.log("Type:", typeof result2);                // "object"

// ---- Example 5: Missing function parameters ----
console.log("\n--- Example 5: Missing function parameters ---");

function greet(name, age) {
    console.log("Name:", name);  // will show passed value or undefined
    console.log("Age:", age);    // will show passed value or undefined
}

greet("Alice");           // age is undefined (not passed)
greet("Bob", 30);         // both have values

// ---- Example 6: Accessing non-existent object properties ----
console.log("\n--- Example 6: Non-existent object properties ---");

const person = { name: "John", age: 25 };

console.log("person.name:", person.name);       // "John"
console.log("person.age:", person.age);         // 25
console.log("person.email:", person.email);     // undefined (property doesn't exist)
console.log("Type of person.email:", typeof person.email); // "undefined"

// ---- Example 7: Array elements (sparse arrays) ----
console.log("\n--- Example 7: Sparse arrays ---");

const arr = [1, 2];
arr[5] = 10; // Sparse array (gaps at indices 3, 4)

console.log("arr[0]:", arr[0]);     // 1
console.log("arr[3]:", arr[3]);     // undefined (empty slot)
console.log("arr[5]:", arr[5]);     // 10
console.log("arr.length:", arr.length); // 6

// ---- Example 8: Null check in real-world scenarios ----
console.log("\n--- Example 8: Real-world null check ---");

// API response might return null for missing data
const userFromAPI = {
    id: 1,
    name: "Alice",
    middleName: null, // Explicitly null = no middle name
    email: undefined   // Not provided by API
};

console.log("Full name:");
let fullName = userFromAPI.name;
if (userFromAPI.middleName !== null && userFromAPI.middleName !== undefined) {
    fullName += " " + userFromAPI.middleName;
}
console.log(fullName); // "Alice"

// ---- Example 9: Detecting null vs undefined ----
console.log("\n--- Example 9: How to check null vs undefined ---");

// Way 1: Using === (strict equality)
function checkValue(val) {
    if (val === null) {
        console.log("Value is NULL (intentionally empty)");
    } else if (val === undefined) {
        console.log("Value is UNDEFINED (not assigned)");
    } else {
        console.log("Value is:", val);
    }
}

checkValue(null);       // "Value is NULL"
checkValue(undefined);  // "Value is UNDEFINED"
checkValue(0);          // "Value is: 0"

// Way 2: Using typeof
let a = null;
let b;
let c = 0;

console.log("typeof null:", typeof a);      // "object"
console.log("typeof undefined:", typeof b); // "undefined"
console.log("typeof 0:", typeof c);         // "number"

// ---- Example 10: Loose (==) vs Strict (===) equality ----
console.log("\n--- Example 10: Loose vs Strict Equality ---");

console.log("null == undefined:", null == undefined);   // true (loose)
console.log("null === undefined:", null === undefined); // false (strict)
console.log("null == 0:", null == 0);                   // false
console.log("undefined == 0:", undefined == 0);         // false

// ---- Example 11: Optional chaining and nullish coalescing ----
console.log("\n--- Example 11: Modern JavaScript utilities ---");

const data = {
    user: null,
    address: undefined
};

// Optional chaining (?.) - safely access nested properties
console.log("data?.user?.name:", data?.user?.name);     // undefined (won't error)

// Nullish coalescing (??) - use default if null/undefined
let userName = data.user?.name ?? "Guest";
console.log("User Name:", userName); // "Guest"

let emailUser = "john@example.com" ?? "no-email@example.com";
console.log("Email:", emailUser);    // "john@example.com"

// ---- Example 12: Practical scenarios comparison ----
console.log("\n--- Example 12: Real-world scenarios ---");

// Scenario 1: Database returns null for empty values
const dbRecord = { id: 1, phone: null };  // Phone deliberately not set
console.log("Phone (from DB):", dbRecord.phone); // null

// Scenario 2: JavaScript operations result in undefined
const arr2 = [1, 2, 3];
console.log("arr2[10]:", arr2[10]);             // undefined (doesn't exist)

// Scenario 3: Function parameter not provided
function deleteUser(userId, reason) {
    console.log("User ID:", userId);    // value passed
    console.log("Reason:", reason);     // undefined if not provided
}

deleteUser(5); // reason is undefined

// ---- Summary Table ----
console.log("\n--- SUMMARY ---");
console.log(`
┌─────────────────┬──────────────────┬─────────────────────────┐
│                 │      NULL        │      UNDEFINED          │
├─────────────────┼──────────────────┼─────────────────────────┤
│ Meaning         │ Intentional      │ Unintentional          │
│                 │ emptiness       │ emptiness              │
├─────────────────┼──────────────────┼─────────────────────────┤
│ Assigned by     │ Developer       │ JavaScript engine      │
├─────────────────┼──────────────────┼─────────────────────────┤
│ typeof result   │ "object"        │ "undefined"            │
├─────────────────┼──────────────────┼─────────────────────────┤
│ Common causes   │ Manual set,     │ No init, missing param,│
│                 │ API response    │ no return, missing prop│
├─────────────────┼──────────────────┼─────────────────────────┤
│ null == undefined│ true (loose ==) │ true (loose ==)        │
│ null === undefined│ false (strict)  │ false (strict)        │
└─────────────────┴──────────────────┴─────────────────────────┘
`);
