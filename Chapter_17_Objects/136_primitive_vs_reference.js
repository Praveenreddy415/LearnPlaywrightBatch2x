/*
Primitive Type vs Reference Type

Feature                  | Primitive Type             | Reference Type
------------------------ | -------------------------- | ------------------------------
Stored in memory         | Value itself               | Reference to the value         
Examples                 | string, number, boolean    | object, array, function        
Copy behavior            | Copy by value              | Copy by reference              
Mutability              | Immutable (cannot change)  | Mutable (can change contents)  
Comparison               | Compared by value          | Compared by reference          
Use case                 | Simple data and settings   | Complex data and collections   

*/

// Primitive types example
let name = "Aisha";
let age = 10;
let isStudent = true;

console.log("Primitive values:", name, age, isStudent);

let newName = name; // copy by value
newName = "Aman";
console.log("name:", name);       // Aisha
console.log("newName:", newName); // Aman

// Reference types example
const student = {
    name: "Aisha",
    grade: 5
};

const anotherStudent = student; // copy by reference
anotherStudent.grade = 6;

console.log("student.grade:", student.grade);           // 6
console.log("anotherStudent.grade:", anotherStudent.grade); // 6

// Array example for reference type
const colors = ["red", "green", "blue"];
const moreColors = colors;
moreColors.push("yellow");

console.log("colors:", colors);       // [ 'red', 'green', 'blue', 'yellow' ]
console.log("moreColors:", moreColors); // same array, also updated

// Summary:
// - Primitive values are stored directly and copied by value.
// - Reference types store a pointer to the actual object.
// - Changing a reference type through one variable affects all references.
