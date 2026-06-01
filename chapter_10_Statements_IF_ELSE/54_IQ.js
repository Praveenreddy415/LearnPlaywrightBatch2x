// Question 1 – Even or Odd
let number=7;
if(number%2===0){
    console.log("The number is EVEN");
}else {
    console.log("The number is ODD");
}

// Question 2 – Student Grade Calculator
let marks =90;
if(marks>=90){
    console.log("Grade: A");
}else if(marks>=80){
    console.log("Grade: B");
}else if(marks >=70){
    console.log("Grade: C");
}else if (marks>=60){
    console.log("Grade: D");
}else {
    console.log("Grade: F");
}

/*
Question 3 — Leap Year Check

Problem: Take a year and check if it's a leap year.

Rules:

Divisible by 4 AND not divisible by 100 → Leap year

OR divisible by 400 → Leap year

Else → Not a leap year */
//Question 3 — Leap Year Check
let Year=2020;
if((Year%4===0 && Year%100!==0) || (Year%400===0)){
    console.log(Year + " is a LEAP YEAR");
}else {
    console.log(Year + " is NOT a LEAP YEAR");
}

//HTTP status code checker
let statusCode = 404;
if (statusCode>=200 && statusCode<300){
    console.log("OK");
}else if(statusCode>=300 && statusCode<400){
    console.log("Redirection");
}else if(statusCode>=400 && statusCode<500){
    console.log("Client Error");
}else if(statusCode>=500 && statusCode<600){
    console.log("Server Error");
}else{
    console.log("Invalid Status Code");
}

//Test Case Pass or Fail Checker1
let expectedResult  ="Login Successful";
let actualResult = "Login Successful";

if (expectedResult === actualResult){
    console.log("Test Case PASSED");
}else {
    console.log("Test Case FAILED");
}

//Test Case Pass or Fail Checker2
let expectedResult  ="Login Successful";
let actualResult = "Invalid Credentials";

if (expectedResult === actualResult){
    console.log("Test Case PASSED");
}       
else {
    console.log("Test Case FAILED");
}

//Bug severity checker
let bugSeverity = 9;
if(bugSeverity >=9 && bugSeverity <=10){
    console.log("Critical Bug");
}
else if(bugSeverity >=7 && bugSeverity <=8){
    console.log("High Bug");
}else if(bugSeverity >=4 && bugSeverity <=6){
    console.log("Medium Bug");
}else if(bugSeverity >0 && bugSeverity <=3){
    console.log("Low Bug");
}

//Buld Health Reporter 

let buildHealth = 85;
if(buildHealth ==100){
    console.log("Green Build");
} else if (buildHealth >=90 && buildHealth <=99){
    console.log("Stable  Build");
}else if(buildHealth >=70 && buildHealth <=89){
    console.log("Unstable Build");
}else if(buildHealth <70){
    console.log("Broken Build");
}else {
    console.log("Invalid Build Health");
}

//Login Attempt Checker
let loginAttempts = 1;
if(loginAttempts ===0 ){
    console.log("Login Successful");
}   else if(loginAttempts <=2) {
    console.log("1 attempt left before Login Blocked");
}       else if (loginAttempts >3){
    console.log("Invalid Number of Login Attempts");
}   