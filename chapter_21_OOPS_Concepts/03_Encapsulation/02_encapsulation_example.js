// chapter_21_OOPS_Concepts/03_Encapsulation/02_encapsulation_example.js

// Encapsulation is like keeping your important stuff in a locked box.
// Only the right tools can open the box and change the things inside.
// This keeps the important stuff safe from mistakes.

class Car {
    constructor(model) {
        this._model = model; // private-like value inside the class
        this._speed = 0;
    }

    accelerate(amount) {
        if (amount > 0) {
            this._speed += amount;
            console.log(`${this._model} speed is now ${this._speed}.`);
        }
    }

    brake(amount) {
        if (amount > 0) {
            this._speed = Math.max(0, this._speed - amount);
            console.log(`${this._model} slows down to ${this._speed}.`);
        }
    }

    getSpeed() {
        return this._speed;
    }
}

const myCar = new Car('Mini');
myCar.accelerate(20);
myCar.brake(10);
console.log('Current speed:', myCar.getSpeed());

// In 5th-grader words:
// - The car keeps its speed hidden inside the class.
// - You cannot change the speed directly from outside.
// - You use methods like accelerate() and brake() to change it safely.
// - This is encapsulation: hiding details and using a safe interface.
