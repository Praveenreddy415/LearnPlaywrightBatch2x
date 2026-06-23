let statuses= ["pass", "fail", "skip"];
console.log(statuses[0]); // pass
console.log(statuses[1]); // fail
console.log(statuses[2]); // skip
console.log(statuses[-1]); // skip
console.log(statuses[-2]); // fail
console.log(statuses[-3]); // pass
console.log(statuses.length); // 3

console.log(statuses.at(-1)); // skip
console.log(statuses.at(-2)); // fail
console.log(statuses.at(-3)); // pass

const lastStatus = statuses.pop();
console.log(lastStatus); // skip
console.log(statuses);  // [ 'pass', 'fail' ]`

