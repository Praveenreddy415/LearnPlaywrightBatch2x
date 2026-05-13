# JavaScript Basics

## Introduction

Welcome to JavaScript Basics! This learning guide covers fundamental JavaScript concepts and basic syntax that every beginner should understand. The `05_JSBasics.js` file demonstrates essential programming patterns and provides hands-on examples to help you master the foundations of JavaScript.

---

## Topics Covered

### 1. Variables (var, let, const)

Variables are containers for storing data values. JavaScript has three ways to declare variables:

#### **var**
- Function-scoped (not block-scoped)
- Can be redeclared and updated
- Older way of declaring variables

```javascript
var name = "John";
var name = "Jane"; // Can be redeclared
console.log(name); // "Jane"
```

#### **let**
- Block-scoped (scoped to the block it's declared in)
- Can be updated but NOT redeclared in the same scope
- Recommended for modern JavaScript

```javascript
let age = 25;
age = 26; // Can be updated
// let age = 27; // Error: already declared
console.log(age); // 26
```

#### **const**
- Block-scoped
- Cannot be updated or redeclared
- Used for values that should not change

```javascript
const PI = 3.14159;
// PI = 3.14; // Error: assignment to constant variable
console.log(PI); // 3.14159
```

---

### 2. Data Types

JavaScript has several primitive data types:

#### **String**
Text data enclosed in quotes
```javascript
let name = "Alice";
let greeting = 'Hello';
let message = `Welcome, ${name}!`; // Template literal
console.log(message); // Welcome, Alice!
```

#### **Number**
Integer or floating-point numbers
```javascript
let age = 30;
let price = 19.99;
let infinity = Infinity;
console.log(age + price); // 49.99
```

#### **Boolean**
True or false values
```javascript
let isActive = true;
let isComplete = false;
console.log(isActive && isComplete); // false
```

#### **null and undefined**
- `null`: intentionally empty value
- `undefined`: variable declared but not assigned

```javascript
let x = null;
let y;
console.log(x); // null
console.log(y); // undefined
```

#### **Object and Array**
Complex data types
```javascript
let person = { name: "Bob", age: 25 };
let colors = ["red", "green", "blue"];
```

---

### 3. Operators

#### **Arithmetic Operators**
```javascript
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (remainder)
console.log(a ** b); // 1000 (exponent)
```

#### **Assignment Operators**
```javascript
let x = 5;
x += 3; // x = x + 3 → 8
x -= 2; // x = x - 2 → 6
x *= 2; // x = x * 2 → 12
x /= 3; // x = x / 3 → 4
```

#### **Comparison Operators**
```javascript
console.log(5 == "5");    // true (loose equality)
console.log(5 === "5");   // false (strict equality)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true
console.log(5 > 3);       // true
console.log(5 < 3);       // false
console.log(5 >= 5);      // true
```

#### **Logical Operators**
```javascript
let a = true;
let b = false;
console.log(a && b); // false (AND)
console.log(a || b); // true (OR)
console.log(!a);     // false (NOT)
```

---

### 4. Conditional Statements

#### **if...else**
Execute code based on conditions
```javascript
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

#### **if...else if...else**
Multiple conditions
```javascript
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
```

#### **switch Statement**
When you have many conditions
```javascript
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}
```

#### **Ternary Operator**
Shorthand for if...else
```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

---

### 5. Loops

#### **for Loop**
Repeat code a specific number of times
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}
```

#### **while Loop**
Repeat while a condition is true
```javascript
let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;
}
```

#### **do...while Loop**
Executes at least once, then checks condition
```javascript
let i = 0;
do {
    console.log("i = " + i);
    i++;
} while (i < 3);
```

#### **for...of Loop**
Iterate through array values
```javascript
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}
```

#### **forEach Loop**
Array method for iteration
```javascript
let numbers = [1, 2, 3];
numbers.forEach((num) => {
    console.log(num * 2);
});
```

---

### 6. Functions

Functions are reusable blocks of code.

#### **Function Declaration**
```javascript
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Alice")); // Hello, Alice
```

#### **Function Expression**
```javascript
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8
```

#### **Arrow Function**
Modern syntax using =>
```javascript
const multiply = (x, y) => {
    return x * y;
};
console.log(multiply(4, 5)); // 20

// Short syntax
const square = (x) => x * x;
console.log(square(5)); // 25
```

#### **Function with Default Parameters**
```javascript
function introduce(name = "Guest") {
    console.log("Hello, " + name);
}
introduce();        // Hello, Guest
introduce("John");  // Hello, John
```

---

### 7. Arrays

Arrays store multiple values in a single variable.

#### **Creating Arrays**
```javascript
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "text", true, null];
```

#### **Accessing Array Elements**
```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits.length); // 3
```

#### **Array Methods**
```javascript
let arr = [1, 2, 3];

arr.push(4);           // Add to end → [1, 2, 3, 4]
arr.pop();             // Remove from end → [1, 2, 3]
arr.unshift(0);        // Add to beginning → [0, 1, 2, 3]
arr.shift();           // Remove from beginning → [1, 2, 3]

let doubled = arr.map(x => x * 2);  // [2, 4, 6]
let evens = arr.filter(x => x % 2 === 0); // [2]
let sum = arr.reduce((a, b) => a + b, 0); // 6
```

---

### 8. Objects

Objects store key-value pairs.

#### **Creating Objects**
```javascript
let person = {
    name: "John",
    age: 30,
    email: "john@example.com"
};
```

#### **Accessing Object Properties**
```javascript
console.log(person.name);      // John
console.log(person["age"]);    // 30
```

#### **Adding/Modifying Properties**
```javascript
person.city = "New York";      // Add new property
person.age = 31;               // Update property
```

#### **Object Methods**
```javascript
let person = {
    name: "Alice",
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};
console.log(person.greet()); // Hello, I'm Alice
```

#### **Object Shortcuts**
```javascript
const name = "Bob";
const age = 25;

// Without shorthand
let user1 = { name: name, age: age };

// With shorthand
let user2 = { name, age };
```

---

### 9. Scope

Scope determines where variables can be accessed.

#### **Global Scope**
Variables accessible everywhere
```javascript
let globalVar = "I'm global";

function test() {
    console.log(globalVar); // Can access
}
```

#### **Function Scope**
Variables accessible only within the function
```javascript
function test() {
    let localVar = "I'm local";
    console.log(localVar); // Works
}
console.log(localVar); // Error: not defined
```

#### **Block Scope (let, const)**
Variables accessible only within the block
```javascript
if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar); // Works
}
console.log(blockVar); // Error: not defined
```

#### **Scope Chain**
Inner functions can access outer variables
```javascript
let outer = "outer";
function outer_func() {
    let middle = "middle";
    function inner_func() {
        let inner = "inner";
        console.log(inner, middle, outer); // Works
    }
    inner_func();
}
```

---

### 10. Template Literals

String interpolation using backticks

#### **Basic Template Literal**
```javascript
let name = "World";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, World!
```

#### **Multi-line Strings**
```javascript
let multiline = `This is a
multi-line
string`;
console.log(multiline);
```

#### **Expressions in Template Literals**
```javascript
let a = 5;
let b = 10;
console.log(`${a} + ${b} = ${a + b}`); // 5 + 10 = 15
```

---

### 11. Type Conversion

Converting between data types.

#### **String to Number**
```javascript
let str = "42";
let num1 = Number(str);        // 42
let num2 = parseInt(str);      // 42
let num3 = parseFloat("3.14"); // 3.14
console.log(num1 + 10);        // 52
```

#### **Number to String**
```javascript
let num = 42;
let str1 = String(num);        // "42"
let str2 = num.toString();     // "42"
let str3 = `${num}`;           // "42"
```

#### **To Boolean**
```javascript
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("text"));  // true
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
```

#### **Implicit Type Conversion**
```javascript
console.log("5" + 3);         // "53" (string concatenation)
console.log("5" - 3);         // 2 (numeric conversion)
console.log("5" * 2);         // 10
console.log(true + 1);        // 2 (true becomes 1)
```

---

### 12. Basic Debugging with console.log()

Debug your code by printing values to the console.

#### **Basic Logging**
```javascript
let name = "Alice";
console.log(name); // Alice
```

#### **Multiple Values**
```javascript
let age = 25;
console.log("Name:", name, "Age:", age);
// Name: Alice Age: 25
```

#### **Other Console Methods**
```javascript
console.log("Info message");    // Standard log
console.error("Error occurred"); // Error message
console.warn("Warning!");        // Warning message
console.table([{id: 1, name: "Alice"}, {id: 2, name: "Bob"}]);

// Log object
let person = { name: "John", age: 30 };
console.log(person);

// Count occurrences
for (let i = 0; i < 3; i++) {
    console.count("loop"); // Counts how many times called
}

// Time measurement
console.time("timer");
// some code
console.timeEnd("timer");
```

---

## Code Examples

The `05_JSBasics.js` file contains practical examples demonstrating:
- Variable declaration using `var`, `let`, and `const`
- Redeclaration restrictions with `let`
- How `var` allows redeclaration
- Console logging for debugging

Review the file to see these concepts in action!

---

## How to Run

### Prerequisites
- Node.js installed on your system
- Command line/Terminal access

### Steps

1. **Open Terminal/Command Prompt**
   - Navigate to the directory containing `05_JSBasics.js`
   ```bash
   cd path/to/chapter_02_javascript_concepts
   ```

2. **Run the File**
   ```bash
   node 05_JSBasics.js
   ```

3. **View Output**
   - The output will be displayed in your terminal/console

### Example Output
```
20
10
```

---

## Tips for Learning

1. **Experiment**: Modify the examples and run them to see how they work
2. **Practice**: Write your own examples for each concept
3. **Console Logging**: Use `console.log()` frequently to understand what's happening
4. **Read Error Messages**: They tell you what went wrong and where
5. **Take Breaks**: Learning programming is a marathon, not a sprint

---

## Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Codecademy JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript)

---

## Next Steps

Once you master these basics, explore:
- Advanced functions and closures
- ES6+ features
- Asynchronous JavaScript (Promises, async/await)
- DOM manipulation
- APIs and Fetch
- Testing with frameworks like Jest

Happy coding! 🚀
