// Objects explained like you're in 5th grade
// An object is like a backpack with labeled pockets.
// Each label is a key, and the thing inside is the value.

const schoolBag = {
    color: "blue",
    books: 5,
    hasLunch: true,
    studentName: "Aisha"
};

console.log("Backpack color:", schoolBag.color);      // blue
console.log("Number of books:", schoolBag.books);    // 5
console.log("Has lunch?:", schoolBag.hasLunch);      // true
console.log("Student name:", schoolBag.studentName); // Aisha

// You can change values too
schoolBag.books = 6;
console.log("Updated books:", schoolBag.books);      // 6

// You can add new pockets (new properties)
schoolBag.pencilCase = "red";
console.log("Pencil case:", schoolBag.pencilCase);   // red

// Summary:
// - Objects store many pieces of information together.
// - Use keys to label each piece.
// - Use dot notation to read or change values.
