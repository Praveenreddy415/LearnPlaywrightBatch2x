let arr= [1, 2, 3, 4, 5];
// Add an element to the end of the array
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// Remove the last element from the array
const lastElement = arr.pop();
console.log(lastElement); // 6
console.log(arr); // [1, 2, 3, 4, 5]

// Add an element to the beginning of the array
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5] 
arr.unshift(-1);
console.log(arr); // [-1, 0, 1, 2, 3, 4, 5]

// Remove the first element from the array
const firstElement = arr.shift();
console.log(firstElement); // -1
console.log(arr); // [0, 1, 2, 3, 4, 5]


//push() -> is used to add an element to the end of the array.
//pop() -> is used to remove the last element from the array.
//unshift() -> is used to add an element to the beginning of the array.
//shift() -> is used to remove the first element from the array.
