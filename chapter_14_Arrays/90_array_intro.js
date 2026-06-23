// 90_array_intro.js
// What is an Array in JavaScript?
// An Array is a special type of object used to store ordered collections of values.
// Each value in an array is called an element, and elements are accessed by numeric indexes starting at 0.
// Arrays can contain any type of value: numbers, strings, booleans, objects, other arrays, and more.

// Create an array with multiple values
const fruits = ['Apple', 'Banana', 'Cherry'];

// Access elements by index
console.log('First fruit:', fruits[0]); // Apple
console.log('Second fruit:', fruits[1]); // Banana
console.log('Third fruit:', fruits[2]); // Cherry

// Get the number of elements in the array
console.log('Array length:', fruits.length); // 3

// Add a new element to the end of the array
fruits.push('Date');
console.log('After push:', fruits); // [ 'Apple', 'Banana', 'Cherry', 'Date' ]

// Remove the last element from the array
const lastFruit = fruits.pop();
console.log('Removed element:', lastFruit); // Date
console.log('After pop:', fruits); // [ 'Apple', 'Banana', 'Cherry' ]

// Loop over array elements
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}:`, fruits[i]);
}

// Example of an array with mixed element types
const mixed = [42, 'Hello', true, { name: 'Alice' }, [1, 2, 3]];
console.log('Mixed array:', mixed);
