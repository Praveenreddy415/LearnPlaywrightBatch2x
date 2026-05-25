// Non-Primitive Data Types in JavaScript
// ========================================
// Non-primitive data types are also called Reference Types or Objects
// They are mutable (can be changed) and stored by REFERENCE (memory address)
// Common non-primitive types: Object, Array, Function, Date, RegExp, Map, Set
//Non-primitive data types are complex data structures created by programmers (or built-in as objects) 
// that store multiple values or complex entities. 
// Unlike primitive types, they do not hold data values directly.
//  Instead, they store a reference (memory address) pointing to where the actual data resides.
// -----------------------------------------------
// 1. Object
// -----------------------------------------------
console.log("--- Object ---");

let person = {
    name: "John",
    age: 25,
    city: "New York"
};

console.log(person);              // { name: 'John', age: 25, city: 'New York' }
console.log(typeof person);       // "object"
console.log(person.name);         // John
console.log(person["age"]);       // 25

// Objects are mutable
person.age = 26;  // can change properties
person.country = "USA";  // can add new properties
console.log(person.age);  // 26

// -----------------------------------------------
// 2. Array
// -----------------------------------------------
console.log("--- Array ---");

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);              // [ 'Apple', 'Banana', 'Mango' ]
console.log(typeof fruits);       // "object"  ← arrays are objects!
console.log(fruits[0]);           // Apple
console.log(fruits.length);       // 3

// Arrays are mutable
fruits[1] = "Orange";  // change element
fruits.push("Grapes");  // add element
console.log(fruits);    // [ 'Apple', 'Orange', 'Mango', 'Grapes' ]

// -----------------------------------------------
// 3. Function
// -----------------------------------------------
console.log("--- Function ---");

function greet(name) {
    return "Hello, " + name;
}

console.log(greet("John"));       // Hello, John
console.log(typeof greet);        // "function"

// Functions are objects too
greet.custom = "I am a property";  // functions can have properties!
console.log(greet.custom);        // I am a property

let arrow = (x) => x * 2;
console.log(arrow(5));            // 10
console.log(typeof arrow);        // "function"

// -----------------------------------------------
// 4. Date
// -----------------------------------------------
console.log("--- Date ---");

let today = new Date();
console.log(today);               // 2026-05-25T...
console.log(typeof today);        // "object"

let specificDate = new Date("2025-12-25");
console.log(specificDate);        // Christmas 2025

console.log(today.getFullYear()); // 2026
console.log(today.getMonth());    // 4 (0-based, so May)
console.log(today.getDate());     // 25

// -----------------------------------------------
// 5. RegExp (Regular Expression)
// -----------------------------------------------
console.log("--- RegExp ---");

let pattern = /hello/i;  // 'i' = case insensitive
console.log(typeof pattern);      // "object"

let text = "Hello World";
console.log(pattern.test(text));  // true (found "hello")

let regex = new RegExp("world", "i");
console.log(regex.test(text));    // true

// -----------------------------------------------
// 6. Map
// -----------------------------------------------
console.log("--- Map ---");

let map = new Map();
map.set("name", "John");
map.set("age", 25);
map.set(1, "one");  // keys can be any type

console.log(map);                 // Map(3) { 'name' => 'John', 'age' => 25, 1 => 'one' }
console.log(typeof map);          // "object"
console.log(map.get("name"));     // John
console.log(map.size);            // 3
console.log(map.has("age"));      // true

map.delete("age");
console.log(map.size);            // 2

// -----------------------------------------------
// 7. Set
// -----------------------------------------------
console.log("--- Set ---");

let set = new Set([1, 2, 3, 3, 3]);  // duplicates removed
console.log(set);                 // Set(3) { 1, 2, 3 }
console.log(typeof set);          // "object"
console.log(set.size);            // 3
console.log(set.has(2));          // true

set.add(4);
console.log(set);                 // Set(4) { 1, 2, 3, 4 }

// -----------------------------------------------
// 8. Stored by REFERENCE (Key Difference)
// -----------------------------------------------
console.log("--- Reference vs Value ---");

// Primitives - stored by VALUE
let a = 10;
let b = a;
b = 20;
console.log("a:", a, "b:", b);    // a: 10 b: 20  ← separate values

// Non-primitives - stored by REFERENCE
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name);           // Jane ← both point to same object!
console.log(obj2.name);           // Jane

// They point to the same object in memory
console.log(obj1 === obj2);       // true

// -----------------------------------------------
// 9. Mutability (Changing Values)
// -----------------------------------------------
console.log("--- Mutability ---");

// Primitives are immutable
let str = "hello";
str[0] = "H";  // this doesn't work
console.log(str);                 // "hello"

// Objects are mutable
let car = { brand: "Toyota", year: 2020 };
car.brand = "Honda";  // this works!
car.year = 2023;
console.log(car);                 // { brand: 'Honda', year: 2023 }

// -----------------------------------------------
// 10. Comparison
// -----------------------------------------------
console.log("--- Comparison ---");

// Primitives - compared by VALUE
console.log(10 === 10);           // true
console.log("hello" === "hello"); // true

// Objects - compared by REFERENCE (memory address)
let person1 = { name: "John" };
let person2 = { name: "John" };
console.log(person1 === person2); // false ← different objects in memory!

let person3 = person1;
console.log(person1 === person3); // true ← same reference

// -----------------------------------------------
// 11. Nested Objects and Arrays
// -----------------------------------------------
console.log("--- Nested Structures ---");

let employee = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York"
    },
    skills: ["JavaScript", "React", "Node.js"]
};

console.log(employee.address.city);     // New York
console.log(employee.skills[0]);        // JavaScript

employee.address.city = "Boston";
employee.skills.push("MongoDB");
console.log(employee);

// -----------------------------------------------
// Summary Table
// -----------------------------------------------
// Type         | Mutable? | Stored By     | Example
// -------------|----------|---------------|------------------
// Primitive    | No       | Value         | 10, "hello", true
// Object       | Yes      | Reference     | { name: "John" }
// Array        | Yes      | Reference     | [1, 2, 3]
// Function     | Yes      | Reference     | function() {}
// Date         | Yes      | Reference     | new Date()
// RegExp       | Yes      | Reference     | /pattern/
// Map          | Yes      | Reference     | new Map()
// Set          | Yes      | Reference     | new Set()
//
// Key Differences:
// ✓ Primitives: immutable, compared by value
// ✓ Objects: mutable, compared by reference
// ✓ Objects stored in HEAP memory (larger)
// ✓ Variables store REFERENCE (address), not actual value
