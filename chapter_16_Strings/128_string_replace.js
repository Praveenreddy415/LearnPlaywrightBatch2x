// String replace explained like you're in 5th grade
// Imagine your sentence is a toy train made of words.
// replace() lets you take one car off the train and put a new one in.

const sentence = "I love apples and apples are tasty.";
console.log("Original sentence:", sentence);

// replace() finds the first matching word and swaps it with another one.
const newSentence = sentence.replace("apples", "oranges");
console.log("After replace:", newSentence);

// replace() only changes the first match when using a string.
const onlyFirst = sentence.replace("apples", "bananas");
console.log("Only first replace:", onlyFirst);

// To replace all matches, use a regular expression with the g flag.
const allReplaced = sentence.replace(/apples/g, "bananas");
console.log("Replace all matches:", allReplaced);

// If the word is not found, the sentence stays the same.
const noChange = sentence.replace("grapes", "mangoes");
console.log("No match found:", noChange);

// Summary:
// - replace() finds text and swaps it with new text.
// - When you use a plain string, it swaps only the first match.
// - Use /text/g to replace all matches in the sentence.
