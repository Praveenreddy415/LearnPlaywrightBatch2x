// 95_iterate_array.js
// Array iteration examples in JavaScript
// Use different loops and methods to process array elements.

const colors = ['Red', 'Green', 'Blue', 'Yellow'];

// 1. Classic for loop
console.log('Classic for loop:');
for (let i = 0; i < colors.length; i++) {
    console.log(`Color ${i}:`, colors[i]);
}

// 2. for...of loop
console.log('\nfor...of loop:');
for (const color of colors) {
    console.log(color);
}

// 3. forEach method
console.log('\nforEach method:');
colors.forEach((color, index) => {
    console.log(`Index ${index}:`, color);
});

// 4. map method (returns a new array)
console.log('\nmap method:');
const upperColors = colors.map((color) => color.toUpperCase());
console.log('Uppercase colors:', upperColors);

// 5. for...in loop (iterates keys/indexes)
console.log('\nfor...in loop:');
for (const index in colors) {
    console.log(`Index ${index}:`, colors[index]);
}

// 6. while loop
console.log('\nwhile loop:');
let idx = 0;
while (idx < colors.length) {
    console.log(colors[idx]);
    idx++;
}
