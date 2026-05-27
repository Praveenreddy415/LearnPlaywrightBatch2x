/**
 * ========================================
 * IF STATEMENT - COMPREHENSIVE GUIDE
 * ========================================
 * 
 * The IF statement is used to execute code ONLY if a specified condition is true.
 * 
 * Syntax:
 * if (condition) {
 *     // Code to execute if condition is true
 * }
 * 
 * Key Points:
 * - The condition must evaluate to true or false (boolean)
 * - Curly braces {} are recommended even for single statements
 * - Multiple conditions can be combined with logical operators
 */


console.log("========== 1. SIMPLE IF STATEMENT ==========");
/**
 * Basic IF: Executes a block of code if the condition is true
 */

// Example 1: Check if age is old enough to vote
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote");
}

// Example 2: Check if a number is positive
let number = 10;
if (number > 0) {
    console.log("The number is positive");
}

// Example 3: Check if variable exists
let name = "Praveen";
if (name) {
    console.log("Name is: " + name);
}

// Example 4: Multiple conditions (no output if false)
let score = 30;
if (score >= 60) {
    console.log("You passed");
}
// If score is less than 60, nothing prints


console.log("\n========== 2. IF-ELSE STATEMENT ==========");
/**
 * IF-ELSE: Execute one block if condition is true, another if false
 * 
 * Syntax:
 * if (condition) {
 *     // Code if true
 * } else {
 *     // Code if false
 * }
 */

// Example 1: Age verification
let age2 = 15;
if (age2 >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// Example 2: Even or Odd check
let num = 7;
if (num % 2 === 0) {
    console.log(num + " is even");
} else {
    console.log(num + " is odd");
}

// Example 3: Password validation
let password = "abc123";
if (password.length >= 8) {
    console.log("Password is strong");
} else {
    console.log("Password is weak");
}

// Example 4: Grade assignment
let score2 = 75;
if (score2 >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


console.log("\n========== 3. IF-ELSE IF-ELSE STATEMENT ==========");
/**
 * IF-ELSE IF-ELSE: Check multiple conditions in sequence
 * First true condition's block executes, others are skipped
 * 
 * Syntax:
 * if (condition1) {
 *     // Code if condition1 is true
 * } else if (condition2) {
 *     // Code if condition2 is true
 * } else if (condition3) {
 *     // Code if condition3 is true
 * } else {
 *     // Code if all conditions are false
 * }
 */

// Example 1: Grade system
console.log("--- Grade System ---");
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F (Fail)");
}

// Example 2: Age category
console.log("--- Age Category ---");
let age3 = 35;
if (age3 < 13) {
    console.log("You are a child");
} else if (age3 < 18) {
    console.log("You are a teenager");
} else if (age3 < 65) {
    console.log("You are an adult");
} else {
    console.log("You are a senior");
}

// Example 3: Temperature-based clothing
console.log("--- Clothing Recommendation ---");
let temperature = 15;
if (temperature > 30) {
    console.log("Wear light clothes");
} else if (temperature > 20) {
    console.log("Wear normal clothes");
} else if (temperature > 10) {
    console.log("Wear a jacket");
} else {
    console.log("Wear warm winter clothes");
}

// Example 4: Traffic light
console.log("--- Traffic Light ---");
let color = "Yellow";
if (color === "Red") {
    console.log("Stop");
} else if (color === "Yellow") {
    console.log("Get Ready");
} else if (color === "Green") {
    console.log("Go");
} else {
    console.log("Invalid color");
}


console.log("\n========== 4. NESTED IF STATEMENTS ==========");
/**
 * Nested IF: An IF statement inside another IF statement
 * Used when you need to check multiple conditions hierarchically
 */

// Example 1: Eligibility check
console.log("--- Loan Eligibility ---");
let age4 = 25;
let income = 50000;
let creditScore = 750;

if (age4 >= 18) {
    console.log("Age requirement met");
    if (income >= 30000) {
        console.log("Income requirement met");
        if (creditScore >= 700) {
            console.log("Loan Approved!");
        } else {
            console.log("Credit score too low");
        }
    } else {
        console.log("Income is insufficient");
    }
} else {
    console.log("Must be 18 or older");
}

// Example 2: Job interview stages
console.log("--- Job Interview Process ---");
let hasEducation = true;
let hasExperience = true;
let passedInterview = true;

if (hasEducation) {
    console.log("✓ Education verified");
    if (hasExperience) {
        console.log("✓ Experience verified");
        if (passedInterview) {
            console.log("✓ OFFER LETTER SENT!");
        } else {
            console.log("✗ Interview failed");
        }
    } else {
        console.log("✗ Experience required");
    }
} else {
    console.log("✗ Education requirement not met");
}


console.log("\n========== 5. IF WITH LOGICAL OPERATORS ==========");
/**
 * Combining conditions with AND (&&), OR (||), and NOT (!)
 */

// Example 1: Using AND (&&) - Both conditions must be true
console.log("--- AND Operator (&&) ---");
let age5 = 25;
let hasLicense = true;
if (age5 >= 18 && hasLicense) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}

// Example 2: Using OR (||) - At least one condition must be true
console.log("--- OR Operator (||) ---");
let hasPassport = true;
let hasVisa = false;
if (hasPassport || hasVisa) {
    console.log("You can travel internationally");
} else {
    console.log("You cannot travel");
}

// Example 3: Using NOT (!) - Reverses the boolean value
console.log("--- NOT Operator (!) ---");
let isRaining = false;
if (!isRaining) {
    console.log("You don't need an umbrella");
} else {
    console.log("You need an umbrella");
}

// Example 4: Combining multiple operators
console.log("--- Combined Operators ---");
let salary = 60000;
let experience = 3;
let hasInterviewPass = true;
if ((salary >= 50000 && experience >= 2) || hasInterviewPass) {
    console.log("Eligible for promotion");
} else {
    console.log("Not eligible");
}


console.log("\n========== 6. COMMON MISTAKES ==========");
/**
 * Common errors to avoid when using IF statements
 */

// ❌ MISTAKE 1: Using assignment (=) instead of comparison (===)
console.log("--- Mistake 1: Assignment vs Comparison ---");
let x = 5;
// if (x = 10) {  // ❌ WRONG - This assigns 10 to x
//     console.log(x);
// }
if (x === 5) {  // ✓ CORRECT - This compares
    console.log("x is 5");
}

// ❌ MISTAKE 2: Forgetting parentheses with logical operators
console.log("--- Mistake 2: Operator Precedence ---");
let a = 5;
let b = 10;
let c = 15;
// if (a > 0 && b > 0 || c < 10) {  // Can be confusing
if ((a > 0 && b > 0) || c < 10) {  // Clear intention
    console.log("Condition met");
}

// ❌ MISTAKE 3: Case sensitivity in comparisons
console.log("--- Mistake 3: Case Sensitivity ---");
let country = "USA";
if (country === "usa") {
    console.log("Match found");
} else {
    console.log("No match - case matters!");
}

if (country.toLowerCase() === "usa") {  // ✓ Convert to same case
    console.log("Match found with lowercase");
}

// ❌ MISTAKE 4: Using loose equality instead of strict
console.log("--- Mistake 4: Loose vs Strict Equality ---");
let value = "5";
if (value == 5) {  // ✓ true (type coercion)
    console.log("Loose equality: match");
}
if (value === 5) {  // ❌ false (strict, types must match)
    console.log("Strict equality: match");
} else {
    console.log("Strict equality: no match");
}


console.log("\n========== 7. REAL-WORLD EXAMPLES ==========");

// Example 1: Online shopping cart
console.log("--- Online Shopping ---");
let itemPrice = 150;
let discount = 20;  // Percentage
let finalPrice = itemPrice - (itemPrice * discount / 100);

if (finalPrice > 100) {
    console.log("Price: Rs. " + finalPrice + " (Free shipping available)");
} else if (finalPrice > 50) {
    console.log("Price: Rs. " + finalPrice + " (Flat Rs. 50 shipping)");
} else {
    console.log("Price: Rs. " + finalPrice + " (Flat Rs. 100 shipping)");
}

// Example 2: Movie ticket pricing
console.log("--- Movie Ticket Pricing ---");
let visitorAge = 12;
let isWeekend = false;
let basePrice = 150;
let ticketPrice = basePrice;

if (visitorAge < 5) {
    ticketPrice = 0;  // Free for kids under 5
} else if (visitorAge < 13) {
    ticketPrice = basePrice * 0.5;  // 50% for children
} else if (visitorAge > 60) {
    ticketPrice = basePrice * 0.6;  // 40% for seniors
}

if (isWeekend) {
    ticketPrice = ticketPrice * 1.2;  // 20% extra on weekends
}

console.log("Ticket Price: Rs. " + ticketPrice);

// Example 3: Bank account withdrawal
console.log("--- Bank Withdrawal ---");
let accountBalance = 5000;
let withdrawAmount = 3000;

if (withdrawAmount > 0) {
    if (withdrawAmount <= accountBalance) {
        accountBalance -= withdrawAmount;
        console.log("Withdrawal successful! Remaining balance: Rs. " + accountBalance);
    } else {
        console.log("Insufficient funds! Your balance is Rs. " + accountBalance);
    }
} else {
    console.log("Invalid withdrawal amount");
}


console.log("\n========== SUMMARY ==========");
/**
 * ┌───────────────────────┬──────────────────────────────────┐
 * │ STATEMENT TYPE        │ USAGE                            │
 * ├───────────────────────┼──────────────────────────────────┤
 * │ if (condition)        │ Execute if true                  │
 * │ if-else               │ True or false path               │
 * │ if-else if-else       │ Multiple conditions              │
 * │ nested if             │ Hierarchical conditions          │
 * │ if with && || !       │ Complex logical conditions       │
 * └───────────────────────┴──────────────────────────────────┘
 * 
 * Best Practices:
 * ✓ Always use curly braces {}
 * ✓ Use === for comparison (strict equality)
 * ✓ Use meaningful variable names
 * ✓ Keep conditions simple and readable
 * ✓ Avoid deeply nested if statements (consider switch or refactor)
 */

console.log("========== END OF IF STATEMENT GUIDE ==========");


let a= 10;
if(a%2===0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}


let score = 85;
if(score>=90){
    console.log("Grade: A+");
}else if(score>=80){
    console.log("Grade: A");
}else if(score>=70){
console.log(("Grade: B");}
else if(score>=60){
    console.log("Grade: C");
}else if(score>=50){
    console.log("Grade: D");
}   else{   
    cosnole.log("Grade: F (Fail)");
}        


