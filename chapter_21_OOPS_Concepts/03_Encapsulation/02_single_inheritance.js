// chapter_21_OOPS_Concepts/04_Inheritance/02_single_inheritance.js

// Single inheritance is when one child class inherits from one parent class.
// The child gets features from the parent and can also add its own features.

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    startEngine() {
        console.log(`${this.brand} engine started.`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    showDetails() {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.startEngine();
myCar.showDetails();

// In simple words:
// - Vehicle is the parent class.
// - Car is the child class.
// - Car inherits startEngine() from Vehicle.
// - Car adds its own showDetails() method.
// - This is single inheritance because one class inherits from one parent.
