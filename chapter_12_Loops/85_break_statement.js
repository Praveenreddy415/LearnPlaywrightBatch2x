// 85_break_statement.js
// Example of using break in a loop

// The break statement immediately exits the nearest loop.
// When break executes, the loop stops and control moves to the first statement after the loop.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
let foundIndex = -1;

for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];
    console.log(`Checking index ${i}, value ${value}`);

    if (value === target) {
        foundIndex = i;
        console.log(`Found ${target} at index ${foundIndex}. Breaking out of the loop.`);
        break; // stop the loop immediately when the target is found
    }
}

if (foundIndex === -1) {
    console.log(`${target} was not found in the array.`);
} else {
    console.log(`Loop stopped early using break at index ${foundIndex}.`);
}
