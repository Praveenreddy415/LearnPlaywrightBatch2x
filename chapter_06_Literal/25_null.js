// ============================================================
// NULL - Intentional Absence of Value
// ============================================================
// null = A value that represents "no value" or "nothing"
// It is INTENTIONALLY assigned by the programmer
// null is a primitive value (even though typeof returns "object")
// ============================================================

// ---- Example 1: Explicitly assigning null ----
console.log("--- Example 1: Assigning null ---");

let username = null;  // Intentionally set to null
console.log("username:", username);        // null
console.log("Type:", typeof username);     // "object" (quirk!)

// Checking if value is null
console.log("username === null:", username === null); // true
console.log("username == null:", username == null);   // true

// ---- Example 2: Object with null property ----
console.log("\n--- Example 2: Object with null property ---");

const user = {
    name: "Alice",
    middleName: null,  // No middle name (intentionally null)
    email: "alice@example.com",
    phone: null        // Phone number not provided
};

console.log("User:", user);
console.log("Middle name:", user.middleName);  // null
console.log("Phone:", user.phone);             // null

// ---- Example 3: Function returning null ----
console.log("\n--- Example 3: Function returning null ---");

function findUser(id) {
    // Simulating database search
    const users = { 1: "Alice", 2: "Bob" };

    if (users[id]) {
        return users[id];
    } else {
        return null; // User not found
    }
}

console.log("Find user 1:", findUser(1));    // "Alice"
console.log("Find user 5:", findUser(5));    // null (not found)

// ---- Example 4: null in array ----
console.log("\n--- Example 4: null in array ---");

const values = [10, null, 30, null, 50];
console.log("Array:", values);

// Loop through and identify nulls
values.forEach((val, index) => {
    if (val === null) {
        console.log("Index " + index + " has null value");
    } else {
        console.log("Index " + index + " has value:", val);
    }
});

// ---- Example 5: Using null as a sentinel value ----
console.log("\n--- Example 5: null as sentinel (marker) ---");

let loggedInUser = null;  // No user logged in yet

console.log("Is user logged in?", loggedInUser !== null); // false

// User logs in
loggedInUser = { id: 1, name: "John", role: "admin" };
console.log("Is user logged in?", loggedInUser !== null); // true
console.log("User:", loggedInUser);

// User logs out
loggedInUser = null;
console.log("Is user logged in?", loggedInUser !== null); // false

// ---- Example 6: Clearing a variable ----
console.log("\n--- Example 6: Clearing/resetting a variable ---");

let data = { status: "active", count: 100 };
console.log("Before:", data);

// Clear the data
data = null;
console.log("After clearing:", data);  // null

// ---- Example 7: Real-world API response ----
console.log("\n--- Example 7: API response with null ---");

// Simulating API response
const apiResponse = {
    success: true,
    user: {
        id: 123,
        name: "Bob",
        email: "bob@example.com",
        dateOfBirth: null,     // Optional field not provided
        address: null,         // Optional field not provided
        phone: "+1234567890"
    }
};

console.log("API Response:", apiResponse);
console.log("User DOB:", apiResponse.user.dateOfBirth);  // null
console.log("User Address:", apiResponse.user.address);   // null

// ---- Example 8: Checking for null safely ----
console.log("\n--- Example 8: Safe null checking ---");

const product = {
    name: "Laptop",
    discount: null,  // No discount
    price: 999
};

// Method 1: Using ===
if (product.discount === null) {
    console.log("No discount available");
} else {
    console.log("Discount:", product.discount);
}

// Method 2: Using loose == (both null and undefined)
if (product.discount == null) {
    console.log("Discount not set");
}

// Method 3: Using nullish coalescing (??)
let finalDiscount = product.discount ?? 0;
console.log("Final discount:", finalDiscount);  // 0

// ---- Example 9: null vs empty string ----
console.log("\n--- Example 9: null vs empty string ---");

let nullValue = null;
let emptyString = "";
let zeroValue = 0;

console.log("null:", nullValue);                  // null
console.log("empty string:", emptyString);        // ""
console.log("zero:", zeroValue);                  // 0

console.log("null === '':", nullValue === emptyString);     // false
console.log("null == '':", nullValue == emptyString);       // false
console.log("'' == 0:", emptyString == zeroValue);          // true (quirk!)

// ---- Example 10: Optional chaining with null ----
console.log("\n--- Example 10: Optional chaining (?.) ---");

const person = {
    name: "Charlie",
    address: null
};

// Without optional chaining (would error)
// console.log(person.address.street); // ❌ Error: Cannot read property of null

// With optional chaining (safe)
console.log("Street:", person?.address?.street); // undefined (safe)

// ---- Example 11: Setting null for cleanup ----
console.log("\n--- Example 11: Using null for cleanup ---");

class Connection {
    constructor() {
        this.db = { connected: true };
    }

    close() {
        this.db = null; // Clean up, release resources
        console.log("Connection closed, db is:", this.db);
    }
}

const conn = new Connection();
console.log("Before close:", conn.db);
conn.close();

// ---- Summary: Common null patterns ----
console.log("\n--- Summary: When to use null ---");
console.log(`
Common scenarios for null:
1. No value available (optional fields): { phone: null }
2. Search not found: findUser() returns null
3. Resource not available: db = null after cleanup
4. Sentinel value: loggedInUser = null (not logged in)
5. API responses: Missing optional data
6. Intentional "no value": Set by developer

REMEMBER:
• null = Intentional, set by programmer
• null === null ✅
• typeof null === "object" (quirk of JS!)
• Use === to check for null (not ==)
• null == undefined ✅ (loose equality quirk!)
`);
