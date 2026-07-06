// chapter_21_OOPS_Concepts/04_Inheritance/07_hierarchical_inheritance.js

// Hierarchical inheritance means one parent class is shared by many child classes.
// It is like one teacher teaching several students.
// Each student learns from the same teacher but can do different things.

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Cat extends Animal {
    meow() {
        console.log(`${this.name} says meow.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} says woof.`);
    }
}

const kitty = new Cat('Kitty');
const doggy = new Dog('Doggy');

kitty.eat();
kitty.meow();

doggy.eat();
doggy.bark();

// In simple words:
// - Animal is the parent class.
// - Cat and Dog are child classes.
// - Both child classes inherit the eat() method from Animal.
// - Each child also has its own special method.
// - This is hierarchical inheritance because one parent has many children.
