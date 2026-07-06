// chapter_19_Promise/06_promise_all_simple.js

// Promise.all() is like asking a group of friends to do tasks together.
// You wait until every friend finishes their task before you move on.
// If one friend fails, the whole group fails.

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Task 1 done');
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Task 2 done');
    }, 1500);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; // change to false to see Promise.all fail
        if (success) {
            resolve('Task 3 done');
        } else {
            reject('Task 3 failed');
        }
    }, 1200);
});

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log('All tasks finished:');
        console.log(results);
    })
    .catch((error) => {
        console.log('One task failed:', error);
    });

// In 5th-grade words:
// - Promise.all() waits for all promises to finish.
// - If all succeed, you get all answers together.
// - If any one fails, it goes to .catch().
// - It is useful when you need many things done before moving on.
