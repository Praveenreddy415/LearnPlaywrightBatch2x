let env = "staging" // global variable

function setupConfig() {
    let timeout = 3000; // local variable
    console.log(env); // prints "staging"
    console.log(timeout); // prints 3000
}

setupConfig();
console.log(env); // prints "staging"
console.log(timeout); // ReferenceError: timeout is not defined