// Example: Repeat a message 5 times using a for loop
for (let i = 1; i <= 5; i++) {
    console.log("Number " + i);
}

/*
  How this for loop works:
  1. Start: let i = 1    --> begin counting from 1
  2. Condition: i <= 5   --> keep going while i is 1, 2, 3, 4, or 5
  3. Body: console.log(...) --> print the current number
  4. Update: i++         --> after each turn, add 1 to i

  The loop prints:
  Number 1
  Number 2
  Number 3
  Number 4
  Number 5

  In simple words:
  - A for loop repeats the same action many times.
  - Each time, it changes the counter i so the loop can stop after the right number of repeats.
*/

// For a senior QA interviewer:
// A for loop is a control structure used to repeat a block of code a fixed number of times.
// It is very useful in test automation when you need to iterate through test data,
// validate multiple elements, or perform repeated checks.

// Syntax:
// for (let i = 0; i < length; i++) {
//   // repeated action
// }
// - let i = 0   --> initialize the loop counter
// - i < length  --> run while the condition is true
// - i++         --> increment the counter after each iteration

// Example for QA:
const users = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < users.length; i++) {
    console.log(`Verify user: ${users[i]}`);
}

/*
  Senior QA points:
  - Use for loops when explicit index control is needed.
  - Watch for off-by-one errors: use i < length, not i <= length for zero-based arrays.
  - Avoid modifying the loop counter inside the loop body.
  - Consider whether for...of is more readable when index is not required.
*/
