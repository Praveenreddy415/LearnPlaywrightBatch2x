// chapter_19_Promise/01_promise_explained.js

// A Promise is a JavaScript object used for asynchronous operations.
// It represents a value that may be available now, later, or never.
// A Promise has three states:
// 1. pending  - initial state, operation not completed yet
// 2. fulfilled - operation completed successfully
// 3. rejected  - operation failed

// Create a Promise that resolves after 2 seconds:
const wait = new Promise((resolve, reject) => {
    const success = true; // change to false to see rejection

    setTimeout(() => {
        if (success) {
            resolve('Promise resolved: data is ready');
        } else {
            reject('Promise rejected: something went wrong');
        }
    }, 2000);
});

// Use the Promise with then, catch, and finally:
wait
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Promise finished (either fulfilled or rejected)');
    });

// Explanation:
// - The Promise constructor receives a callback with two functions: resolve and reject.
// - Call resolve(value) when the asynchronous task succeeds.
// - Call reject(error) when the task fails.
// - then() handles the success result.
// - catch() handles the error.
// - finally() runs after either outcome.

// Example: chaining Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'Sample item' });
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${data.name} processed`);
        }, 1000);
    });
}

fetchData()
    .then((data) => {
        console.log('Fetched:', data);
        return processData(data);
    })
    .then((processed) => {
        console.log('Processed:', processed);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
