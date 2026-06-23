let scores = [10, 20, 30, 40, 50];

// Transform the array by multiplying each score by 2
let transformedScores = scores.map(score => score * 2);
console.log(transformedScores); // [20, 40, 60, 80, 100]

let marks = [85, 90, 78, 92, 88];
// Transform the array by adding 5 to each mark
let increasedMarks = marks.map(mark => mark + 5);
console.log(increasedMarks); // [90, 95, 83, 97, 93]

// Transform marks to pass/fail based on a condition
let passFail = marks.map(mark => mark >= 75 ? 'Pass' : 'Fail');
console.log(passFail); // ['Pass', 'Pass', 'Pass', 'Pass', 'Pass']

// Filter scores greater than 30
let highScores = scores.filter(score => score > 30);
console.log(highScores); // [40, 50]

// Reduce numbers to a single sum
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

//flat
let nestedArrays = [[1, 2], [3, 4], [5, 6]];
let flattened = nestedArrays.flat();
console.log(flattened); // [1, 2, 3, 4, 5, 6]



