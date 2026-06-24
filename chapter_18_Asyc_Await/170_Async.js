// Async explained like a 5th grader
// Think of asking a friend to make a sandwich while you pack your bag.
// You do not wait standing still; you keep packing and come back when the sandwich is ready.

async function makeSandwich() {
  console.log("Start making sandwich");
  await wait(2000); // pretend this takes 2 seconds
  console.log("Sandwich is ready!");
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

makeSandwich();
console.log("I am packing my backpack");

// Output order:
// 1. Start making sandwich
// 2. I am packing my backpack
// 3. Sandwich is ready!
