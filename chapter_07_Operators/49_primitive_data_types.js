// Primitive Data Types in JavaScript
// ====================================
// Primitive data types are the basic building blocks
// They are immutable (cannot be changed) and stored by VALUE
// There are 7 primitive data types in JavaScript

// -----------------------------------------------
// 1. String
// -----------------------------------------------
console.log("--- String ---");

let name = "John";
let city = 'New York';  // single or double quotes
let address = `123 Main St`;  // backticks (template literal)

console.log(name);        // John
console.log(typeof name); // "string"

let message = "Hello " + name;  // concatenation
console.log(message);     // Hello John

// -----------------------------------------------
// 2. Number
// -----------------------------------------------
console.log("--- Number ---");

let age = 25;
let height = 5.9;
let temperature = -10;

console.log(age);           // 25
console.log(typeof age);    // "number"
console.log(typeof height); // "number"

// Special number values
let inf = Infinity;
let nan = NaN;  // Not a Number

console.log(inf);           // Infinity
console.log(nan);           // NaN
console.log(typeof nan);    // "number" (gotcha!)

// -----------------------------------------------
// 3. Boolean
// -----------------------------------------------
console.log("--- Boolean ---");

let isActive = true;
let isDeleted = false;

console.log(isActive);        // true
console.log(typeof isActive); // "boolean"

// Boolean in conditions
if (isActive) {
    console.log("User is active");
}

// -----------------------------------------------
// 4. undefined
// -----------------------------------------------
console.log("--- undefined ---");

let x;  // declared but not assigned
console.log(x);           // undefined
console.log(typeof x);    // "undefined"

// Function without return
function test() {
    // no return statement
}
console.log(test());      // undefined

// -----------------------------------------------
// 5. null
// -----------------------------------------------
console.log("--- null ---");

let emptyValue = null;
console.log(emptyValue);  // null
console.log(typeof emptyValue);  // "object"  ← gotcha!

// null vs undefined
console.log(null === undefined);   // false
console.log(null == undefined);    // true

// -----------------------------------------------
// 6. Symbol (ES6)
// -----------------------------------------------
console.log("--- Symbol ---");

let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1);              // Symbol(id)
console.log(typeof sym1);       // "symbol"
console.log(sym1 === sym2);     // false ← each symbol is unique

// Use case: unique object keys
let person = {};
person[sym1] = "value1";
console.log(person[sym1]);      // value1

// -----------------------------------------------
// 7. BigInt (ES2020)
// -----------------------------------------------
console.log("--- BigInt ---");

let bigNum = 10n;  // append 'n' for BigInt
let large = 9007199254740992n;

console.log(bigNum);          // 10n
console.log(typeof bigNum);   // "bigint"

// BigInt operations
let result = bigNum + 5n;
console.log(result);          // 15n

// Cannot mix BigInt with regular numbers
// let mixed = 10n + 5;  // TypeError!

// -----------------------------------------------
// 8. Immutability of Primitives
// -----------------------------------------------
console.log("--- Immutability ---");

let str = "Hello";
str[0] = "J";  // try to change first character
console.log(str);  // "Hello" ← unchanged! (primitives are immutable)

let num = 10;
num = 20;  // This creates a NEW value, doesn't change original
console.log(num);  // 20

// -----------------------------------------------
// 9. Type Conversion (Coercion)
// -----------------------------------------------
console.log("--- Type Conversion ---");

// String to Number
let strNum = "42";
let converted = Number(strNum);
console.log(converted);        // 42 (number, not string)
console.log(typeof converted); // "number"

// Number to String
let numStr = String(100);
console.log(numStr);           // "100"
console.log(typeof numStr);    // "string"

// To Boolean
let bool = Boolean(1);
console.log(bool);             // true
console.log(Boolean(0));       // false

// -----------------------------------------------
// 10. Falsy and Truthy Values
// -----------------------------------------------
console.log("--- Falsy Values ---");

// Falsy values (6 of them)
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(false));     // false

// Everything else is truthy
console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true

// -----------------------------------------------
// Summary Table
// -----------------------------------------------
// Type       | Example         | typeof Result
// -----------|-----------------|--------------
// String     | "hello", 'hi'   | "string"
// Number     | 42, 3.14, NaN   | "number"
// Boolean    | true, false     | "boolean"
// undefined  | undefined       | "undefined"
// null       | null            | "object" (bug)
// Symbol     | Symbol("id")    | "symbol"
// BigInt     | 10n, 100n       | "bigint"
//
// Key Points:
// ✓ Primitives are immutable
// ✓ Primitives are compared by VALUE
// ✓ Primitives are not objects
// ✓ Everything else is an object (arrays, functions, etc.)
