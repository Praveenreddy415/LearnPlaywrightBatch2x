// String concatenation examples
// Concatenation means joining two or more strings together.

const firstName = "Praveen";
const lastName = "Reddy";

// Using the + operator
const fullName = firstName + " " + lastName;
console.log("Using + operator:", fullName); // Praveen Reddy

// Using the concat() method
const fullName2 = firstName.concat(" ", lastName);
console.log("Using concat():", fullName2); // Praveen Reddy

// Using template literals (recommended)
const fullName3 = `${firstName} ${lastName}`;
console.log("Using template literal:", fullName3); // Praveen Reddy

// Concatenating more than two strings
const greeting = "Hello,";
const message = greeting + " " + firstName + "!";
console.log("More than two strings:", message); // Hello, Praveen!

// Summary:
// - + joins strings together.
// - concat() also joins strings.
// - Template literals are easier when you need variables inside the string.
