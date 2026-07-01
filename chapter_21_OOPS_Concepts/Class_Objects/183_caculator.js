class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }
    substraction() {
        return this.num1 - this.num2;
    }

    multyply() {
        return this.num1 * this.num2;
    }
    divide() {
        if (this.num2 === 0) {
            return "can not devide by zero"
        }
        return this.num1 / this.num2
    }
    modulus() {
        return this.num1 % this.num2
    }
}

//create object

const calc = new Calculator(20, 5)

console.log("Addition", calc.add())
console.log("Substraction", calc.substraction())
console.log("Multuplication", calc.multyply())
console.log("modulus", calc.modulus())