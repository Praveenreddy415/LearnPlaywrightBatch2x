// Class and Object explained like 5th grade
// A class is a blueprint, like a toy plan.
// An object is one real toy made from that plan.

class ToyCar {
    constructor(color, name) {
        this.color = color;
        this.name = name;
        this.wheels = 4;
    }

    drive() {
        console.log(`${this.name} is driving.`);
    }
}

const myCar = new ToyCar("red", "Speedy");
console.log("Car color:", myCar.color); // red
console.log("Car name:", myCar.name);   // Speedy
console.log("Car wheels:", myCar.wheels); // 4
myCar.drive(); // Speedy is driving.

// Simple explanation:
// - ToyCar is the plan (class).
// - myCar is one real toy made from the plan (object).
// - color, name, and wheels describe the toy car.
// - drive() is an action the toy car can do.
