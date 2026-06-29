// Object destructuring example
// Destructuring lets you pull values out of an object using its keys.

const user = {
    name: "Priya",
    age: 12,
    school: "Greenwood Elementary",
    subjects: {
        math: "A",
        science: "B"
    }
};

// Basic destructuring
const { name, age, school } = user;
console.log("Name:", name);     // Priya
console.log("Age:", age);       // 12
console.log("School:", school); // Greenwood Elementary

// Destructuring nested objects
const { subjects: { math, science } } = user;
console.log("Math grade:", math);       // A
console.log("Science grade:", science); // B

// Destructuring with a new variable name
const { name: studentName } = user;
console.log("Student name:", studentName); // Priya

// Destructuring with default values
const { city = "Unknown" } = user;
console.log("City:", city); // Unknown

// Summary:
// - Use curly braces to pick properties from an object.
// - You can rename values while destructuring.
// - Nested objects can also be destructured.
// - Default values help when a property is missing.
