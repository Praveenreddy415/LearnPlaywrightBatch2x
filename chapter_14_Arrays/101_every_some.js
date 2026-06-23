// 101_every_some.js
// Demonstrate Array.prototype.every() and Array.prototype.some()

const scores = [80, 85, 90, 95];

// every() returns true only if every element satisfies the condition.
const allPassed = scores.every(score => score >= 75);
console.log('All scores are >= 75:', allPassed); // true

const mixedScores = [80, 60, 90, 95];
const allPassedMixed = mixedScores.every(score => score >= 75);
console.log('All mixed scores are >= 75:', allPassedMixed); // false

// some() returns true if at least one element satisfies the condition.
const anyFailed = scores.some(score => score < 75);
console.log('At least one score is < 75:', anyFailed); // false

const someLowScores = mixedScores.some(score => score < 75);
console.log('At least one mixed score is < 75:', someLowScores); // true

// Using every() and some() with strings
const words = ['apple', 'banana', 'avocado'];
const allStartWithA = words.every(word => word.startsWith('a'));
console.log('All words start with "a":', allStartWithA); // false

const anyStartWithA = words.some(word => word.startsWith('a'));
console.log('Any word starts with "a":', anyStartWithA); // true
