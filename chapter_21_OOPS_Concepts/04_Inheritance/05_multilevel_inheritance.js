// chapter_21_OOPS_Concepts/04_Inheritance/05_multilevel_inheritance.js

// Multilevel inheritance is like a family with a grandparent, parent, and child.
// The child gets things from the parent, and the parent gets things from the grandparent.
// In programming, one class inherits from another class, which inherits from a third class.

class Grandparent {
    shareStory() {
        console.log('Grandparent shares a story.');
    }
}

class Parent extends Grandparent {
    teach() {
        console.log('Parent teaches a lesson.');
    }
}

class Child extends Parent {
    play() {
        console.log('Child plays with toys.');
    }
}

const littleOne = new Child();
littleOne.shareStory();
littleOne.teach();
littleOne.play();

// In 5th-grade words:
// - Grandparent is at the top.
// - Parent is in the middle.
// - Child is at the bottom.
// - Child can do what the parent does and also what the grandparent does.
// - This is multilevel inheritance: one chain of inheritance with more than one level.
