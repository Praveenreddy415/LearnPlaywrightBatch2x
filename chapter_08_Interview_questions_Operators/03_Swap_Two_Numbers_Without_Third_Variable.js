let a=5;
let b=10;
// Swap using addition and subtraction
a = a + b; // a now holds the sum of a and b (15)
b = a - b; // b now holds the original value of a (5)
a = a - b; // a now holds the original value of b (10)      
console.log("After swapping: a =", a, ", b =", b);  // a = 10, b = 5

// Swap using multiplication and division (only works if a and b are not zero)          