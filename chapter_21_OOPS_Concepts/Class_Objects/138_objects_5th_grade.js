// Objects explained for a 5th grader
// Think of an object like a toy box with labeled pockets.
// Each label (key) tells you what's inside that pocket (value).

const dog = {
    name: "Buddy",
    age: 4,
    breed: "Labrador",
    isFriendly: true,
    bark() {
        console.log(this.name + " says: Woof!");
    }
};

console.log("Dog's name:", dog.name);       // Buddy
console.log("Dog's age:", dog.age);         // 4
console.log("Dog is friendly:", dog.isFriendly); // true

// Call the action (method)
dog.bark(); // Buddy says: Woof!

// You can change pockets (properties)
dog.age = 5;
console.log("After birthday, age:", dog.age); // 5

// Add a new pocket
dog.favoriteToy = "ball";
console.log("Favorite toy:", dog.favoriteToy); // ball

// Summary:
// - Objects store many facts about one thing.
// - Keys are labels, values are what's inside.
// - Methods are actions the object can do.
