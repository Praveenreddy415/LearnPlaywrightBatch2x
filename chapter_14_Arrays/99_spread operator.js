// 99_spread.js
// The spread operator (...) expands iterable values like arrays into individual elements.
// It is useful for copying arrays, combining arrays, and passing array items to functions.




let a= [1, 2];
let b= [3, 4];

let c= [...a, ...b];
console.log(c); // [1, 2, 3, 4]




const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6






// 1. Copy an array
const original = [1, 2, 3];
const copy = [...original];
console.log('Original:', original);
console.log('Copy:', copy);

// 2. Combine arrays
const fruits = ['Apple', 'Banana'];
const moreFruits = ['Cherry', 'Date'];
const allFruits = [...fruits, ...moreFruits];
console.log('\nCombined fruits:', allFruits);

// 3. Add values while copying
const updatedFruits = ['Mango', ...fruits, 'Orange'];
console.log('Updated fruits:', updatedFruits);

// 4. Use spread with function arguments
const numbers = [5, 10, 15];
function sum(a, b, c) {
  return a + b + c;
}
console.log('\nSum using spread:', sum(...numbers));

// 5. Spread with objects (shallow copy)
const user = { name: 'Alice', age: 25 };
const updatedUser = { ...user, city: 'London' };
console.log('\nOriginal user:', user);
console.log('Updated user:', updatedUser);
