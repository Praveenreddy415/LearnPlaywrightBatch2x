let fruits= ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log(fruits.indexOf("Cherry")); // 2

//includes() method checks if an array contains a specific element and returns true or false.
console.log(fruits.includes("Cherry")); // true

console.log(fruits.indexOf("Fig")); // -1
console.log(fruits.includes("Fig")); // false

let numbers= [10, 20, 30, 40, 50];
numbers.sort((a, b) => a - b); // Sort in ascending order
console.log(numbers); // [10, 20, 30, 40, 50]

let num= [50, 20, 40, 10, 30];
num.find((element) => element > 25); // Finds the first element greater than 25
console.log(num.find((element) => element > 25)); // 50

