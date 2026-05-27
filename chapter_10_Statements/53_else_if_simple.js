/**
 * ========================================
 * ELSE IF STATEMENT - SIMPLE EXAMPLES
 * ========================================
 * 
 * ELSE IF is used to test multiple conditions.
 * It executes the first condition that is TRUE.
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
 * 
 * Important:
 * - Only ONE block of code will execute
 * - Once a condition is TRUE, remaining conditions are skipped
 * - The else block is optional (default fallback)
 */


console.log("========== SIMPLE EXAMPLE 1: TRAFFIC LIGHT ==========");
/**
 * Check the color of the traffic light and decide the action
 */

let light = "Green";

if (light === "Red") {
    console.log("STOP - Do not cross");
} else if (light === "Yellow") {
    console.log("WAIT - Get Ready to cross");
} else if (light === "Green") {
    console.log("GO - You can cross safely");
} else {
    console.log("Invalid light color");
}


console.log("\n========== SIMPLE EXAMPLE 2: AGE GROUPS ==========");
/**
 * Categorize person based on age
 */

let age = 25;

if (age < 13) {
    console.log("You are a CHILD");
} else if (age < 18) {
    console.log("You are a TEENAGER");
} else if (age < 60) {
    console.log("You are an ADULT");
} else {
    console.log("You are a SENIOR");
}


console.log("\n========== SIMPLE EXAMPLE 3: MARKS & GRADES ==========");
/**
 * Assign grades based on marks
 */

let marks = 78;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F (Fail)");
}


console.log("\n========== SIMPLE EXAMPLE 4: TEMPERATURE ==========");
/**
 * Check weather based on temperature
 */

let temp = 35;

if (temp > 30) {
    console.log("It's HOT - Drink plenty of water");
} else if (temp > 20) {
    console.log("It's WARM - Normal weather");
} else if (temp > 10) {
    console.log("It's COOL - Wear a jacket");
} else {
    console.log("It's COLD - Wear warm clothes");
}


console.log("\n========== SIMPLE EXAMPLE 5: EVEN OR ODD ==========");
/**
 * Check if number is even, odd, or zero
 */

let number = 0;

if (number === 0) {
    console.log("The number is ZERO");
} else if (number % 2 === 0) {
    console.log("The number is EVEN");
} else {
    console.log("The number is ODD");
}


console.log("\n========== SIMPLE EXAMPLE 6: DISCOUNT CALCULATOR ==========");
/**
 * Calculate discount based on purchase amount
 */

let purchase = 450;
let discount = 0;

if (purchase >= 1000) {
    discount = 20;  // 20% discount
} else if (purchase >= 500) {
    discount = 15;  // 15% discount
} else if (purchase >= 200) {
    discount = 10;  // 10% discount
} else if (purchase >= 100) {
    discount = 5;   // 5% discount
} else {
    discount = 0;   // No discount
}

let finalPrice = purchase - (purchase * discount / 100);
console.log("Purchase: Rs. " + purchase);
console.log("Discount: " + discount + "%");
console.log("Final Price: Rs. " + finalPrice);


console.log("\n========== SIMPLE EXAMPLE 7: MONTH NAME ==========");
/**
 * Display month name based on month number
 */

let month = 3;
let monthName;

if (month === 1) {
    monthName = "January";
} else if (month === 2) {
    monthName = "February";
} else if (month === 3) {
    monthName = "March";
} else if (month === 4) {
    monthName = "April";
} else if (month === 5) {
    monthName = "May";
} else if (month === 6) {
    monthName = "June";
} else if (month === 7) {
    monthName = "July";
} else if (month === 8) {
    monthName = "August";
} else if (month === 9) {
    monthName = "September";
} else if (month === 10) {
    monthName = "October";
} else if (month === 11) {
    monthName = "November";
} else if (month === 12) {
    monthName = "December";
} else {
    monthName = "Invalid month";
}

console.log("Month " + month + " is: " + monthName);


console.log("\n========== SIMPLE EXAMPLE 8: BMI CATEGORY ==========");
/**
 * Categorize BMI (Body Mass Index)
 * BMI = weight(kg) / height(m)^2
 */

let bmi = 24.5;
let category;

if (bmi < 18.5) {
    category = "Underweight";
} else if (bmi < 25) {
    category = "Normal weight";
} else if (bmi < 30) {
    category = "Overweight";
} else {
    category = "Obese";
}

console.log("BMI: " + bmi);
console.log("Category: " + category);


console.log("\n========== SIMPLE EXAMPLE 9: SPEED VIOLATION ==========");
/**
 * Check speed and determine action
 */

let speed = 75;
let speedLimit = 60;

if (speed <= speedLimit) {
    console.log("Speed OK - Safe driving");
} else if (speed < speedLimit + 10) {
    console.log("CAUTION - You are speeding (Fine: Rs. 500)");
} else if (speed < speedLimit + 20) {
    console.log("WARNING - Heavy speeding (Fine: Rs. 1000)");
} else {
    console.log("DANGER - Dangerous speeding (Fine: Rs. 2000 + License Suspension)");
}


console.log("\n========== SIMPLE EXAMPLE 10: LOGIN STATUS ==========");
/**
 * Check login attempts and account status
 */

let loginAttempts = 3;

if (loginAttempts === 0) {
    console.log("You can log in");
} else if (loginAttempts < 3) {
    console.log("Login failed! Attempts remaining: " + (3 - loginAttempts));
} else if (loginAttempts === 3) {
    console.log("Account LOCKED after 3 failed attempts!");
} else {
    console.log("Account permanently BLOCKED - Contact support");
}


console.log("\n========== KEY POINTS ==========");
/**
 * ✓ else if tests conditions one by one
 * ✓ First TRUE condition executes
 * ✓ Remaining conditions are SKIPPED
 * ✓ Only ONE code block runs
 * ✓ else (last block) is optional
 * 
 * Flow Example:
 * if (false) → SKIPPED
 * else if (false) → SKIPPED
 * else if (true) → EXECUTES ← STOPS HERE
 * else if (...) → SKIPPED
 * else {...} → SKIPPED
 */

console.log("========== END OF ELSE IF EXAMPLES ==========");



let score = 85;

if(score>=100){
    console.log("Century Done - Great Job!");
}else if(score>=50){
    console.log("Half Century Done - Good Effort!");
}else if(score>=30){
    console.log("You scored a decent score!");
}else if (score>0){
    console.log("Better luck next time!");
}else{
    console.log("IDuckout - No runs scored!");
}