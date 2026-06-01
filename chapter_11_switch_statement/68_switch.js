// Simple switch example and explanation

const color = "blue";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "blue":
        console.log("Go ahead");
        break;
    default:
        console.log("Color not recognized");
}

/*
  How it works:
  1. switch(color) checks the value stored in the variable color.
  2. Each case compares that value to a possible option.
  3. When case "blue" matches, its code runs.
  4. break stops the switch after a match is found.
  5. If no case matches, default runs.

  In simple terms:
  - The switch looks at one value.
  - It chooses the matching case.
  - It runs only that block of code.
*/
