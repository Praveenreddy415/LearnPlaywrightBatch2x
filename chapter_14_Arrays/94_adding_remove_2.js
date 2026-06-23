let arr = [1, 2, 3, 4, 5];
arr.push(6, 7, 8);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]



arr.splice(3, 2);
console.log(arr); // [1, 2, 3, 6, 7, 8]

arr.splice(2, 0, 4, 5);
console.log(arr); // [1, 2, 4, 5, 3, 6, 7, 8]

arr.splice(5, 1, 20,30);
console.log(arr); // [1, 2, 4, 5, 3, 20, 30, 8]