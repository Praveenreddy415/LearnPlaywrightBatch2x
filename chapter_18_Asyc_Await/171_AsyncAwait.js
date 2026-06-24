// Async and Await explained like a 5th grader
// Async lets a task run in the background while the program keeps doing other things.
// Await tells the code to wait for that background task to finish before moving on.

// Example 1: simple story
async function askFriendToMakeSandwich() {
  console.log("Friend starts making a sandwich");
  await wait(2000); // wait 2 seconds while friend makes the sandwich
  console.log("Friend finished the sandwich");
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

askFriendToMakeSandwich();
console.log("I am doing my homework while waiting");

// Output order:
// 1. Friend starts making a sandwich
// 2. I am doing my homework while waiting
// 3. Friend finished the sandwich

// Example 2: fetching data like checking for weather
async function checkWeather() {
  console.log("Ask the weather app for today's weather");
  const weather = await getWeather();
  console.log("Weather is:", weather);
}

function getWeather() {
  return new Promise(resolve => {
    setTimeout(() => resolve("sunny"), 1500);
  });
}

checkWeather();
console.log("I can do other things until weather arrives");

// What this means:
// async function -> says this function may need to wait for something.
// await -> pause inside the function until the waiting task finishes.
// The rest of the program keeps running while waiting.
