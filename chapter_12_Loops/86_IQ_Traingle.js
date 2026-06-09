// 86_IQ_Traingle.js
// Validate triangle sides and print the triangle type.

const a = 5;
const b = 5;
const c = 8;

function isValidTriangle(x, y, z) {
    return x + y > z && x + z > y && y + z > x;
}

if (!isValidTriangle(a, b, c)) {
    console.log("The values do not form a valid triangle.");
} else if (a === b && b === c) {
    console.log("Equilateral Triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}