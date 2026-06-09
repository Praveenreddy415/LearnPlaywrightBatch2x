/*
  Comparison of loop types: for, while, and do-while

  Table format:

  | Loop Type   | Initialization | Condition Check | Loop Body Execution | Use Case |
  |-------------|----------------|-----------------|---------------------|----------|
  | for         | Yes            | Before each iteration | May not run if condition false initially | Fixed number of iterations or index-based loops |
  | while       | Optional       | Before each iteration | May not run if condition false initially | Unknown iterations, run while condition remains true |
  | do-while    | Optional       | After each iteration  | Runs at least once | Need loop body to execute at least once first |

  Explanation:
  - for loop: best when number of iterations is known or when using a counter.
  - while loop: best when looping depends on a condition that may change during execution.
  - do-while loop: best when the loop body should execute at least once before checking the condition.
*/

console.log('Loop comparison table:');
console.log('----------------------------------------------');
console.log('| Loop Type | Initialization | Condition Check | Executes at least once |');
console.log('|-----------|----------------|-----------------|------------------------|');
console.log('| for       | Yes            | Before iteration | No                     |');
console.log('| while     | Optional       | Before iteration | No                     |');
console.log('| do-while  | Optional       | After iteration  | Yes                    |');
console.log('----------------------------------------------\n');

console.log('for loop example:');
for (let i = 1; i <= 3; i++) {
    console.log('for loop iteration', i);
}

console.log('\nwhile loop example:');
let count = 1;
while (count <= 3) {
    console.log('while loop iteration', count);
    count++;
}

console.log('\ndo-while loop example:');
let index = 1;
do {
    console.log('do-while loop iteration', index);
    index++;
} while (index <= 3);
