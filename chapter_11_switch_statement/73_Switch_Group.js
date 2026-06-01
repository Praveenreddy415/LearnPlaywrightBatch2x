// Grouped switch case example
const day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Work day");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Unknown day");
}

/*
  Explanation:
  - The switch checks the value of day.
  - Monday through Friday all share the same result: "Work day".
  - Saturday and Sunday share the same result: "Weekend".
  - This is called grouped or combined cases.
  - Grouping cases avoids repeating the same code for multiple values.
*/
