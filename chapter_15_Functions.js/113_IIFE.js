// 113_IIFE.js
// Immediately Invoked Function Expression (IIFE) example.
// An IIFE is a function that runs immediately after it is defined.

(function() {
  const message = 'This runs immediately!';
  console.log(message);
})();

// IIFEs are useful for creating a private scope and avoiding global variables.
// Any variables defined inside the IIFE are not visible outside.

(function() {
  const count = 5;
  console.log('IIFE count:', count);
})();

// You can also pass parameters into an IIFE.
(function(name) {
  console.log(`Hello from IIFE, ${name}!`);
})('Alice');

// Example using IIFE with return value.
const data = (function() {
  const value = 10;
  return { value, status: 'ready' };
})();

console.log('IIFE returned:', data);

// Summary:
// - IIFE is wrapped in parentheses and immediately followed by ().
// - It runs right away.
// - It creates a local scope and keeps variables private.
