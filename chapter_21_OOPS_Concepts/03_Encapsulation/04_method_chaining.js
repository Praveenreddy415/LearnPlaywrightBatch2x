// chapter_21_OOPS_Concepts/03_Encapsulation/04_method_chaining.js

// Method chaining is when you call many methods one after another on the same object.
// It is like building a tower by stacking blocks, one block after another.
// Each method returns the object itself so the next method can be called right away.

class CakeMaker {
    constructor() {
        this.cake = {
            flavor: '',
            layers: 0,
            decorated: false,
        };
    }

    setFlavor(flavor) {
        this.cake.flavor = flavor;
        return this; // return the same object for chaining
    }

    addLayer() {
        this.cake.layers += 1;
        return this; // return the same object for chaining
    }

    decorate() {
        this.cake.decorated = true;
        return this; // return the same object for chaining
    }

    bake() {
        console.log('Baking cake:', this.cake);
        return this;
    }
}

const myCake = new CakeMaker();
myCake
    .setFlavor('chocolate')
    .addLayer()
    .addLayer()
    .decorate()
    .bake();

// In 5th-grade words:
// - Method chaining is like stepping stones where each step leads to the next.
// - The object lets you do one action and then another right away.
// - This makes the code shorter and easier to read.
// - Here the CakeMaker fills details, adds layers, decorates, and bakes in one line.
