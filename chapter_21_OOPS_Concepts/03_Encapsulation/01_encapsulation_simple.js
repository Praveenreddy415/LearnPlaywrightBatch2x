// chapter_21_OOPS_Concepts/03_Encapsulation/01_encapsulation_simple.js

// Encapsulation explained for a 5th grader:
// Encapsulation is like a treasure chest that keeps some things locked inside.
// Only special keys (functions) can look at or change what's inside the chest.
// This keeps the important stuff safe and stops others from breaking it.

// Simple JavaScript example using a closure to hide the "balance":
function createBankAccount(initialBalance = 0) {
    let balance = initialBalance; // hidden inside the chest

    return {
        deposit(amount) {
            if (amount > 0) balance += amount;
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) balance -= amount;
            else console.log('Not allowed');
        },
        getBalance() {
            return balance;
        },
    };
}

const account = createBankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log('Balance:', account.getBalance()); // Balance: 120

// Trying to access balance directly doesn't work:
console.log('Direct access:', account.balance); // undefined

// In 5th-grade words:
// - The balance is kept inside the chest (not directly reachable).
// - Only deposit, withdraw, and getBalance are keys to interact safely.
// - This prevents mistakes and keeps the account safe.
