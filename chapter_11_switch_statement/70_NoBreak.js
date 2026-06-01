const grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent");
    case "B":
        console.log("Good");
    case "C":
        console.log("Needs improvement");
        break;
    default:
        console.log("Unknown grade");
}

/*
  Explanation:
  - grade is "B", so the switch looks for a matching case.
  - case "B" matches, so it prints "Good".
  - Because there is no break after case "B", the code falls through to case "C".
  - It also prints "Needs improvement" and then stops at the break.

  No break means the switch continues to the next case.
  This is called fall-through.
*/