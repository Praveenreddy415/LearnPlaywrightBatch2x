// 84_continue_statement.js

// The continue statement skips the current loop iteration and moves to the next one.
// It does not terminate the loop; it only jumps to the next cycle.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        // Skip even numbers and continue with the next iteration
        continue;
    }
    console.log(i); // only odd numbers will be printed
}

// Output:
// 1
// 3
// 5
// 7
// 9

// Example with while loop
let count = 1;
while (count <= 10) {
    if (count === 5) {
        count++;
        continue; // skip printing 5, continue with count 6
    }
    console.log(count);
    count++;
}

// Output:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10
