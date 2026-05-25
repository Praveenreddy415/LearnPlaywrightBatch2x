// Modulus Operator (%) in JavaScript
// =====================================
// Modulus returns the REMAINDER after division
// Think of it like: what is left over after dividing?

// Simple Example
console.log(10 % 3);   // 3 goes into 10 three times (3*3=9), remainder = 1
console.log(10 % 2);   // 2 goes into 10 five times  (2*5=10), remainder = 0
console.log(7 % 4);   // 4 goes into 7  one time    (4*1=4),  remainder = 3

// ------------------------------------------
// Real-world use case 1: Check Even or Odd
// ------------------------------------------
let num = 7;

if (num % 2 === 0) {
    console.log(num, "is Even");
} else {
    console.log(num, "is Odd");   // Output: 7 is Odd
}

// ------------------------------------------
// Real-world use case 2: Every Nth item
// ------------------------------------------
// Print a message every 3rd number
for (let i = 1; i <= 9; i++) {
    if (i % 3 === 0) {
        console.log(i, "is divisible by 3");
    }
}
// Output: 3, 6, 9 are divisible by 3
