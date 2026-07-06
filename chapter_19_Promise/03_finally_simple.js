// chapter_19_Promise/03_finally_simple.js

// Imagine you clean up your toys after playing. No matter if playtime was fun or not,
// you still put the toys away. In Promise code, .finally() is like that cleanup step.

const myPromise = new Promise((resolve, reject) => {
    const playWasGood = true; // change this to false to see the reject path

    setTimeout(() => {
        if (playWasGood) {
            resolve('The promise worked!');
        } else {
            reject('The promise failed.');
        }
    }, 1000);
});

myPromise
    .then((result) => {
        console.log('Then:', result);
    })
    .catch((error) => {
        console.log('Catch:', error);
    })
    .finally(() => {
        console.log('Finally: cleanup happens here.');
    });

// In simple terms:
// - .then() runs when the promise succeeds.
// - .catch() runs when the promise fails.
// - .finally() runs no matter what happened, just like putting toys away after play.
// - Use .finally() for cleanup work or steps you always want to do.
