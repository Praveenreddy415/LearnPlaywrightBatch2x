// User input with switch example
const userChoice = prompt("Choose a color: red, blue, or green");

switch (userChoice) {
    case "red":
        console.log("You chose red - the color of passion");
        break;
    case "blue":
        console.log("You chose blue - the color of calm");
        break;
    case "green":
        console.log("You chose green - the color of nature");
        break;
    default:
        console.log("Invalid choice. Please choose red, blue, or green");
}

/*
  Explanation:
  - prompt() asks the user to enter a color.
  - The input is stored in the variable userChoice.
  - The switch statement checks what the user typed.
  - Each case handles a different color choice.
  - default handles invalid input.

  Example runs:
  1. User types "red" → Output: "You chose red - the color of passion"
  2. User types "blue" → Output: "You chose blue - the color of calm"
  3. User types "yellow" → Output: "Invalid choice. Please choose red, blue, or green"
*/
