// chapter_21_OOPS_Concepts/03_Inheritance/01_single_level_inheritance.js

// Single level inheritance is when one child class inherits from one parent class.
// It is like a student learning from one teacher.
// The child gets the parent's abilities and can add its own abilities.

class Parent {
    sayHello() {
        console.log('Hello from Parent');
    }
}

class Child extends Parent {
    sayHi() {
        console.log('Hi from Child');
    }
}

const child = new Child();
child.sayHello(); // from Parent
child.sayHi();    // from Child

// In 5th-grade words:
// - Parent is the teacher.
// - Child is the student.
// - Child learns what the parent can do.
// - Child can also do something new by itself.
