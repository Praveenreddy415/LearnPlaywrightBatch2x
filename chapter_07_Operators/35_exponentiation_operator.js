// Exponentiation Operator (**) in JavaScript
// =============================================
// ** raises the left number to the POWER of the right number
// Same as Math.pow(base, exponent)

// Syntax: base ** exponent

// Simple Examples
console.log(2 ** 3);   // 2 * 2 * 2 = 8
console.log(3 ** 2);   // 3 * 3     = 9
console.log(5 ** 4);   // 5*5*5*5   = 625
console.log(10 ** 3);  // 10*10*10  = 1000

// Power of 0 → always 1
console.log(7 ** 0);   // 1

// Power of 1 → always same number
console.log(7 ** 1);   // 7

// Square root using ** (raise to 0.5)
console.log(25 ** 0.5);  // 5  (square root of 25)
console.log(64 ** 0.5);  // 8  (square root of 64)

// ------------------------------------------
// Same result using Math.pow()
// ------------------------------------------
console.log(Math.pow(2, 3));   // 8  → same as 2 ** 3
