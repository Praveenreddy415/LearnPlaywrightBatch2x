// chapter_19_Promise/02_then_catch_simple.js

// Imagine a Promise is a promise from a friend.
// Your friend says, "I will tell you the answer later." That is like a Promise.
// .then() is used when the friend keeps the promise and gives you the answer.
// .catch() is used when the friend cannot keep the promise and tells you there is a problem.

const promise = new Promise((resolve, reject) => {
    const gotIt = true; // change to false to see catch()

    setTimeout(() => {
        if (gotIt) {
            resolve('Yay! The promise worked.');
        } else {
            reject('Oops! The promise failed.');
        }
    }, 1000);
});

promise
    .then((message) => {
        console.log('Then:', message);
    })
    .catch((errorMessage) => {
        console.log('Catch:', errorMessage);
    });

// In simple words:
// - .then() waits for the promise to succeed and then runs code.
// - .catch() waits for the promise to fail and then runs code.
// - You can use them to handle good results and bad results separately.
