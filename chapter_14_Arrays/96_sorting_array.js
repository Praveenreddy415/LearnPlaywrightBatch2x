//sort an array in ascending order
let numbers = [5, 2, 9, 1, 5, 6];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 5, 5, 6, 9]


//sort an array in descending order
let numbers2 = [5, 2, 9, 1, 5, 6];
numbers2.sort((a, b) => b - a);
console.log(numbers2); // [9, 6, 5, 5, 2, 1]