// ============================================
// IDENTIFIER NAMING CONVENTIONS - PART 2
// ============================================

/*
WHAT ARE NAMING CONVENTIONS?

Naming conventions are standardized ways of writing identifier names.
They make code more readable, maintainable, and professional.

There are several popular naming conventions in JavaScript:
1. camelCase
2. snake_case
3. PascalCase
4. UPPER_CASE
5. kebab-case
*/

console.log("===== NAMING CONVENTION 1: camelCase =====\n");

/*
camelCase Rules:
- First word starts with LOWERCASE letter
- Each subsequent word starts with UPPERCASE letter
- No spaces or underscores between words
- The first letter looks like a lowercase 'c', hence the name

When to use: Variables, functions, methods in JavaScript
*/

// Example 1: Simple camelCase
let firstName = "John";
let lastName = "Doe";
let emailAddress = "john@example.com";

console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("emailAddress:", emailAddress);

// Example 2: camelCase with more words
let phoneNumber = "555-1234";
let streetAddress = "123 Main Street";
let isUserLoggedIn = true;

console.log("phoneNumber:", phoneNumber);
console.log("streetAddress:", streetAddress);
console.log("isUserLoggedIn:", isUserLoggedIn);

// Example 3: camelCase function names
function calculateTotalPrice(quantity, pricePerItem) {
    return quantity * pricePerItem;
}

function getUserData(userId) {
    return `User ID: ${userId}`;
}

console.log("calculateTotalPrice(5, 20):", calculateTotalPrice(5, 20));
console.log("getUserData(101):", getUserData(101));

// Example 4: camelCase object properties and methods
const userProfile = {
    firstName: "Alice",
    lastName: "Smith",
    emailAddress: "alice@example.com",
    phoneNumber: "555-5678",
    isActive: true,

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    sendEmailNotification() {
        return `Email sent to ${this.emailAddress}`;
    }
};

console.log("User:", userProfile.getFullName());
console.log(userProfile.sendEmailNotification());


console.log("\n===== NAMING CONVENTION 2: snake_case =====\n");

/*
snake_case Rules:
- All letters are LOWERCASE
- Words are separated by UNDERSCORES (_)
- Looks like a snake due to the underscores

When to use: Constants, database names, API endpoints, environment variables
*/

// Example 1: Simple snake_case
let first_name = "John";
let last_name = "Doe";
let email_address = "john@example.com";

console.log("first_name:", first_name);
console.log("last_name:", last_name);
console.log("email_address:", email_address);

// Example 2: snake_case with more words
let phone_number = "555-1234";
let street_address = "123 Main Street";
let is_user_logged_in = true;

console.log("phone_number:", phone_number);
console.log("street_address:", street_address);
console.log("is_user_logged_in:", is_user_logged_in);

// Example 3: snake_case for constants
const MAX_USER_LIMIT = 100;
const MIN_PASSWORD_LENGTH = 8;
const API_BASE_URL = "https://api.example.com";
const DATABASE_CONNECTION_STRING = "mongodb://localhost:27017/mydb";

console.log("MAX_USER_LIMIT:", MAX_USER_LIMIT);
console.log("MIN_PASSWORD_LENGTH:", MIN_PASSWORD_LENGTH);
console.log("API_BASE_URL:", API_BASE_URL);
console.log("DATABASE_CONNECTION_STRING:", DATABASE_CONNECTION_STRING);

// Example 4: snake_case for database/file operations
const user_table = "SELECT * FROM users";
const product_collection = "products_db";
const config_file = "app_config.json";

console.log("Query:", user_table);
console.log("Collection:", product_collection);
console.log("Config:", config_file);


console.log("\n===== NAMING CONVENTION 3: PascalCase =====\n");

/*
PascalCase Rules:
- First letter is UPPERCASE
- Each new word starts with UPPERCASE
- No spaces or underscores
- Named after Pascal programming language

When to use: Class names, Constructor functions, Component names (React)
*/

// Example 1: PascalCase for classes
class UserProfile {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        return `${this.name} - ${this.email}`;
    }
}

const user = new UserProfile("John", "john@example.com");
console.log("User created:", user.displayInfo());

// Example 2: PascalCase for constructors
class ProductItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const product = new ProductItem(1, "Laptop", 999);
console.log("Product:", product);

// Example 3: More PascalCase examples
class CustomerAccount {
    constructor(accountId) {
        this.accountId = accountId;
    }
}

class DataProcessor {
    static processData(data) {
        return `Processing: ${data}`;
    }
}

console.log(DataProcessor.processData("Important Data"));


console.log("\n===== NAMING CONVENTION 4: UPPER_CASE =====\n");

/*
UPPER_CASE Rules:
- All letters are UPPERCASE
- Words are separated by UNDERSCORES
- Used for constants that should never change

When to use: Global constants, environment variables
*/

// Example 1: Global constants
const API_KEY = "abc123xyz789";
const APPLICATION_VERSION = "2.0.1";
const TIMEOUT_MILLISECONDS = 5000;

console.log("API_KEY:", API_KEY);
console.log("APPLICATION_VERSION:", APPLICATION_VERSION);
console.log("TIMEOUT_MILLISECONDS:", TIMEOUT_MILLISECONDS);

// Example 2: Configuration constants
const MAX_RETRIES = 3;
const DEFAULT_LANGUAGE = "en-US";
const PRODUCTION_MODE = true;

console.log("MAX_RETRIES:", MAX_RETRIES);
console.log("DEFAULT_LANGUAGE:", DEFAULT_LANGUAGE);
console.log("PRODUCTION_MODE:", PRODUCTION_MODE);

// Example 3: Math constants
const PI = 3.14159;
const GRAVITY = 9.8;
const SPEED_OF_LIGHT = 299792458;

console.log("PI:", PI);
console.log("GRAVITY:", GRAVITY);


console.log("\n===== REAL-WORLD COMPARISON EXAMPLE =====\n");

// All conventions used together in a complete example
class StudentManagementSystem {
    constructor() {
        // Constants (UPPER_CASE)
        this.MAX_STUDENTS = 100;
        this.MIN_GRADE = 0;
        this.MAX_GRADE = 100;

        // Arrays/Objects (camelCase)
        this.studentList = [];
        this.gradebookData = {};
    }

    // Methods (camelCase)
    addNewStudent(studentName, studentId) {
        const student = {
            student_id: studentId,      // snake_case for data
            student_name: studentName,
            enrollment_date: new Date()
        };
        this.studentList.push(student);
        return `Student added: ${studentName}`;
    }

    calculateGradeAverage(grades) {
        const totalGrades = grades.reduce((a, b) => a + b, 0);
        return totalGrades / grades.length;
    }

    generateReport() {
        return `Total Students: ${this.studentList.length}`;
    }
}

// Usage
const system = new StudentManagementSystem();
console.log(system.addNewStudent("Alice", 101));
console.log(system.addNewStudent("Bob", 102));
console.log(system.generateReport());

const classGrades = [85, 90, 88, 92];
console.log("Average Grade:", system.calculateGradeAverage(classGrades));


console.log("\n===== CONVENTION SUMMARY =====\n");

console.log(`
┌─────────────────────────────────────────────────────────────┐
│            NAMING CONVENTION QUICK REFERENCE                │
├─────────────────────────────────────────────────────────────┤
│ Convention    │ Format              │ Used For              │
├───────────────┼─────────────────────┼──────────────────────┤
│ camelCase     │ myVariableName      │ Variables, Functions │
│ snake_case    │ my_variable_name    │ Constants, Database  │
│ PascalCase    │ MyClassName         │ Classes, Components  │
│ UPPER_CASE    │ MY_CONSTANT_NAME    │ Global Constants     │
│ kebab-case    │ my-variable-name    │ CSS, HTML attributes│
└─────────────────────────────────────────────────────────────┘
`);


console.log("===== BEST PRACTICES =====\n");

console.log("✅ DO:");
console.log("1. Use camelCase for variables and functions");
console.log("2. Use PascalCase for classes and constructors");
console.log("3. Use UPPER_CASE for constants");
console.log("4. Be consistent throughout your project");
console.log("5. Use descriptive names that explain purpose");
console.log("6. Follow JavaScript community standards");

console.log("\n❌ DON'T:");
console.log("1. Mix different conventions in the same file");
console.log("2. Use single letter variable names (except loops)");
console.log("3. Use abbreviations unless they're obvious");
console.log("4. Make variable names too long");
console.log("5. Use numbers at the beginning of names");

console.log("\n✅ All naming conventions demonstrated successfully!");
