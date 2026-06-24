// 119_Closures.js
// Closure example in JavaScript
// A closure is created when a function remembers variables from its outer scope even after that outer function has finished executing.


function outer(){
    let message= "Hello from outer function!";
    console.log("Outer function executed.");
    function inner(){
        console.log(message);
    }
    return inner;   
}
let innerFunction = outer(); // Outer function executed.
innerFunction(); // Hello from outer function!  








function createCounter() {
    let count = 0;

    return function () {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// The inner function keeps access to the count variable even after createCounter() returns.

function createGreeter(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    };
}

const greetAlice = createGreeter('Alice');
greetAlice(); // Hello, Alice!

const greetBob = createGreeter('Bob');
greetBob(); // Hello, Bob!

// Closure can also store private data.
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) {
                return 'Insufficient funds';
            }
            balance -= amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100
console.log(account.deposit(50)); // 150
console.log(account.withdraw(30)); // 120

// Summary:
// - A closure allows a function to access variables from its parent scope.
// - The parent function can finish executing, but the inner function still holds references to its variables.
// - Closures are useful for creating private state and factory functions.
