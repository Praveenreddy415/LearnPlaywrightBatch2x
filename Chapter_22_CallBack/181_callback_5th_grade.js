// ===================================================
// CALLBACK - Explained like you're in 5th Grade! 🎉
// ===================================================

// Think of a CALLBACK like asking your friend to do something
// and then do another thing AFTER they finish!

// EXAMPLE 1: Real-World Callback
// ================================
// Imagine you call your mom and say:
// "Mom, when you finish cooking dinner, THEN call me so I can come eat!"

// In code, that looks like:

function finishCooking(callMeWhenDone) {
    console.log("👩 Mom: I'm cooking dinner...");
    console.log("👩 Mom: Dinner is ready!");

    // When mom finishes, she calls you back!
    callMeWhenDone();
}

function comeEatDinner() {
    console.log("🤸 Me: Yay! I'm coming to eat!");
}

// I'm asking mom to call me back when dinner is ready
finishCooking(comeEatDinner);

console.log("\n");

// ===================================================
// EXAMPLE 2: Callback with Information
// ===================================================
// Your friend orders pizza and says:
// "When the pizza arrives, TELL ME what toppings it has!"

function orderPizza(tellMeWhenArrives) {
    console.log("🍕 Ordering pizza...");
    console.log("🍕 Pizza is here!");

    // Pizza arrived! Now tell the customer about it
    tellMeWhenArrives("pepperoni, cheese, and mushrooms");
}

function pizzaArrived(toppings) {
    console.log("😋 Yes! Pizza with " + toppings + " is here!");
}

orderPizza(pizzaArrived);

console.log("\n");

// ===================================================
// EXAMPLE 3: Simple Callback with Numbers
// ===================================================
// Teacher says: "Add these numbers, and THEN tell me the answer"

function addNumbers(num1, num2, whatToDoNext) {
    const result = num1 + num2;
    whatToDoNext(result);
}

function showAnswer(answer) {
    console.log("📊 The answer is: " + answer);
}

addNumbers(5, 3, showAnswer);

console.log("\n");

// ===================================================
// EXAMPLE 4: Understanding the Flow
// ===================================================
// Step 1: Call a function
// Step 2: Inside that function, do something
// Step 3: When done, call the callback function
// Step 4: The callback function runs!

console.log("⏱️  Understanding Callback Flow:");
console.log("Step 1: Asking friend to do homework");

function doHomework(callback) {
    console.log("Step 2: Friend is doing homework...");
    console.log("Step 2: Homework done!");

    console.log("Step 3: Friend calls you back!");
    callback();
}

function hangout() {
    console.log("Step 4: We're hanging out now! 🎮");
}

doHomework(hangout);

console.log("\n");

// ===================================================
// KEY TAKEAWAY:
// ===================================================
// A CALLBACK is just a function that you pass to another function,
// and it gets called (executed) AFTER something happens.
//
// It's like saying: "Do this, and when you're done, do THAT!"
//
// Why use callbacks?
// - To do something AFTER a task is finished
// - To wait for something to complete before moving on
// - To handle what happens when something is done
// ===================================================
