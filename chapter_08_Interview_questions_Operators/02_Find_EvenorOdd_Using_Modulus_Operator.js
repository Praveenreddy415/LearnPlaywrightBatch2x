let num = 5;
if (num % 2 === 0) {
    console.log("The number is Even");
} else {
    console.log("The number is Odd");
}

//Find Remainder
let a = 17;
let b = 5;

console.log("Remainder =", a % b);

//5. Increment and Decrement Example    
let count = 5;

count++;
console.log(count);

count--;
console.log(count);

//Calculate Simple Interest
let principal = 1000; // Amount of money
let rate = 5; // Interest rate in percentage
let time = 2; // Time in years          
let simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest =", simpleInterest);   

//Find Area of Rectangle
let length = 10;
let width = 5;
let area = length * width;
console.log("Area of Rectangle =", area);

//Find Average of 3 Numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;
let average = (num1 + num2 + num3) / 3;
console.log("Average of 3 Numbers =", average);

//Find Average of 3 Numbers
let x = 15;
let y = 25;
let z = 35;
let average2 = (x + y + z) / 3;
console.log("Average of x, y, z =", average2);

//Calculate Power of Number
let base = 2;
let exponent = 3;
let result = base ** exponent;
console.log("Power of Number =", result);

//Reverse Number Using Arithmetic Operators
let number = 12345;
let reversed = 0;   
while (number > 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
}
console.log("Reversed Number =", reversed); 

// Reverse Number Using For Loop
let num = 12345;
let rev = 0;
for (; num > 0; num = Math.floor(num / 10)) {
    let digit = num % 10;
    rev = rev * 10 + digit;
}
console.log("Reversed Number using For Loop =", rev);