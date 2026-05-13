// ============================================
// COMMENTS IN JAVASCRIPT
// ============================================

/*
WHAT ARE COMMENTS?

Comments are lines of text in your code that are IGNORED by JavaScript.
They're used to explain what the code does, making it easier for 
you and other developers to understand the code.

Comments do NOT affect how your program runs!
*/

console.log("===== TYPE 1: SINGLE-LINE COMMENTS =====\n");

/*
Single-line Comments:
- Start with two forward slashes: //
- Everything after // on that line is a comment
- Used for short explanations
- Can be placed on the same line as code or on its own line
*/

// Example 1: Comment on its own line
// This variable stores the user's name
let userName = "John Doe";
console.log("Username:", userName);

// Example 2: Comment at the end of a line
let age = 25; // This is the user's age
console.log("Age:", age);

// Example 3: Multiple single-line comments
// Calculate the total price
// by multiplying quantity and price per item
let quantity = 5;
let pricePerItem = 20;
let totalPrice = quantity * pricePerItem; // Result: 100
console.log("Total Price:", totalPrice);

// Example 4: Comments explaining logic
let score = 85;
// Check if score is passing (60 or above)
if (score >= 60) {
    console.log("PASS"); // Print pass message
} else {
    console.log("FAIL"); // Print fail message
}

// Example 5: Using comments to disable code temporarily
let productName = "Laptop";
// let productName = "Phone"; // This line is disabled
console.log("Product:", productName);


console.log("\n===== TYPE 2: MULTI-LINE COMMENTS =====\n");

/*
Multi-line Comments:
- Start with: /*
- End with: */


/*- Everything between /* and */
/*is a comment
    - Used for longer explanations or documentation, 
        - Can span multiple lines
            */

/*
Example 1: Multi-line comment explaining a section
This is a comment that spans
multiple lines. It's useful for
providing detailed explanations.
*/
let firstName = "Alice";
let lastName = "Smith";
console.log(`Full Name: ${firstName} ${lastName}`);

/*
Example 2: Explaining a function's purpose
This function calculates the sum of two numbers
It takes two parameters and returns their sum
*/
function addNumbers(a, b) {
    return a + b;
}
console.log("Sum:", addNumbers(10, 20));

/*
Example 3: Complex logic explanation
The following code implements a simple grade calculator.
It checks the score and assigns a letter grade:
- 90-100: A
- 80-89: B
- 70-79: C
- Below 70: F
*/
let testScore = 88;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else {
    grade = "F";
}
console.log(`Score: ${testScore}, Grade: ${grade}`);


console.log("\n===== TYPE 3: BLOCK COMMENTS FOR SECTIONS =====\n");

/*
========================================
        USER AUTHENTICATION SECTION
========================================
This section handles all user login and
authentication logic.
*/

// Simulated user database
const users = [
    { id: 1, username: "john", password: "pass123" },
    { id: 2, username: "alice", password: "pass456" }
];

// Function to authenticate user
function authenticateUser(username, password) {
    return users.find(user =>
        user.username === username && user.password === password
    );
}

let loggedInUser = authenticateUser("john", "pass123");
console.log("Login Result:", loggedInUser ? "Success" : "Failed");

/*
========================================
        PRODUCT PROCESSING SECTION
========================================
This section handles product-related
operations and calculations.
*/

// Product list
const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 599 }
];

// Calculate total inventory value
let totalValue = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total Inventory Value:", totalValue);


console.log("\n===== TYPE 4: TODO AND FIXME COMMENTS =====\n");

// TODO: Add more validation for user input
let userInput = "example@email.com";
console.log("Email:", userInput);

// FIXME: This calculation might overflow with large numbers
let calculation = 1000000 * 1000000;
console.log("Calculation:", calculation);

// BUG: This needs fixing when we upgrade to Node v20
let buggyCode = "needs investigation";
console.log("Buggy Code:", buggyCode);

// HACK: Temporary solution - should be refactored
let tempSolution = "will be improved later";
console.log("Temp Solution:", tempSolution);


console.log("\n===== TYPE 5: IMPORTANT NOTES =====\n");

// NOTE: This value is hardcoded for testing purposes
const API_ENDPOINT = "http://localhost:3000";

// WARNING: This operation is slow with large datasets
function processLargeArray(arr) {
    return arr.map(item => item * 2);
}

// IMPORTANT: Keep this in sync with database schema
const userSchema = {
    id: "number",
    name: "string",
    email: "string"
};


console.log("\n===== REAL-WORLD EXAMPLE: COMMENTED CODE =====\n");

/*
User Management System
This module handles all user-related operations
including registration, login, and profile updates.
Author: Development Team
Date: 2024-05-13
*/

class User {
    // Constructor to initialize user
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Get user's full information
    // Returns a formatted string with user details
    getInfo() {
        return `User: ${this.name}, Email: ${this.email}`;
    }

    // Update user profile
    // Takes name and email as parameters
    updateProfile(name, email) {
        this.name = name;      // Update name
        this.email = email;    // Update email
        return "Profile updated successfully";
    }

    // Validate email format
    // Returns true if valid, false otherwise
    isValidEmail() {
        // Simple email validation
        return this.email.includes("@");
    }
}

// Create a new user
const user = new User(1, "John Doe", "john@example.com");
console.log(user.getInfo());
console.log("Email Valid:", user.isValidEmail());

// Update user information
console.log(user.updateProfile("Jane Doe", "jane@example.com"));


console.log("\n===== JAVASCRIPT DOCUMENTATION (JSDoc) =====\n");

/*
JSDoc is a markup language for documenting JavaScript.
It uses special comments to generate documentation.
Basic JSDoc syntax:
/**
 * Description of the function
 * @param {type} paramName - description
 * @returns {type} - description
 */


/**
 * Calculates the area of a rectangle
 * @param {number} length - The length of the rectangle
 * @param {number} width - The width of the rectangle
 * @returns {number} - The area of the rectangle
 */
function calculateRectangleArea(length, width) {
    return length * width;
}

let rectangleArea = calculateRectangleArea(10, 5);
console.log("Rectangle Area:", rectangleArea);

/**
 * Finds the maximum number in an array
 * @param {array} numbers - Array of numbers
 * @returns {number} - The largest number in the array
 */
function findMax(numbers) {
    return Math.max(...numbers);
}

console.log("Max Number:", findMax([5, 10, 3, 8, 2]));

/**
 * User database manager
 * @class
 * @description Manages user data operations
 */
class UserDatabase {
    /**
     * Retrieves a user by ID
     * @param {number} userId - The user's ID
     * @returns {object|null} - User object or null if not found
     */
    getUser(userId) {
        return { id: userId, name: "User" + userId };
    }
}


console.log("\n===== BEST PRACTICES FOR COMMENTS =====\n");

console.log(`
✅ DO:
1. Use comments to explain WHY, not WHAT
2. Keep comments up-to-date with code changes
3. Use clear, concise language
4. Use single-line comments for brief notes
5. Use multi-line comments for complex explanations
6. Add comments for non-obvious logic
7. Mark TODO, FIXME, and BUG items
8. Use JSDoc for functions and classes

❌ DON'T:
1. Comment obvious code
2. Write comments that contradict the code
3. Leave outdated comments
4. Use excessive comments
5. Comment every single line
6. Use vague or unclear language
7. Use "I", "me", "we" in comments
8. Leave commented-out code for long periods
`);


console.log("\n===== COMMENT EXAMPLES: GOOD vs BAD =====\n");

console.log("BAD EXAMPLE:");
console.log("// Set x to 5");
console.log("let x = 5;");
console.log("// Add 10 to x");
console.log("x = x + 10;");

console.log("\nGOOD EXAMPLE:");
console.log("// Initialize counter for tracking iterations");
console.log("let iterationCount = 5;");
console.log("// Add base offset to align with system start time");
console.log("iterationCount += 10;");

console.log("\n✅ Comments explained successfully!");
