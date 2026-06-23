let a = [1, 2, 3, 4];
let result = Array.isArray(a);
console.log(result); // true

// every() checks whether all array elements satisfy a condition
const scores = [80, 85, 90, 95];
const allPassed = scores.every(score => score >= 75);
console.log('All scores >= 75:', allPassed); // true

const mixedScores = [80, 60, 90, 95];
const allPassedMixed = mixedScores.every(score => score >= 75);
console.log('All mixed scores >= 75:', allPassedMixed); // false

// some() checks whether at least one element satisfies a condition
const anyFailed = scores.some(score => score < 75);
console.log('Any score < 75:', anyFailed); // false

const someLowScores = mixedScores.some(score => score < 75);
console.log('Some mixed scores < 75:', someLowScores); // true

// Example with strings
const words = ['apple', 'banana', 'avocado'];
const allStartWithA = words.every(word => word.startsWith('a'));
console.log('All words start with a:', allStartWithA); // false

const anyStartWithA = words.some(word => word.startsWith('a'));
console.log('Any word starts with a:', anyStartWithA); // true
