/*
Difference between String.slice() and String.substring()

Feature                   | slice()                       | substring()
------------------------- | ----------------------------- | ---------------------------
Parameters                | start, end                    | start, end
Negative index support    | Yes (counts from end)         | No (negative becomes 0)
Parameter swap behavior   | No                            | Yes (swaps if start > end)
Original string unchanged | Yes                           | Yes
Use case                  | extract by relative position  | extract by absolute position

Examples in code below.
*/

const text = "JavaScript string methods";

console.log("Original:", text);

const sliceResult = text.slice(0, 10);
console.log("slice(0, 10):", sliceResult); // "JavaScript"

const sliceNegative = text.slice(-7);
console.log("slice(-7):", sliceNegative); // "methods"

const substringResult = text.substring(0, 10);
console.log("substring(0, 10):", substringResult); // "JavaScript"

const substringSwapped = text.substring(10, 0);
console.log("substring(10, 0):", substringSwapped); // "JavaScript"

const substringNegative = text.substring(-7, 10);
console.log("substring(-7, 10):", substringNegative); // "JavaScript"
