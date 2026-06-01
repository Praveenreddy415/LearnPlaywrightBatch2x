const fruit = "mango";

switch (fruit) {
    case "apple":
        console.log("This is an apple");
        break;
    case "banana":
        console.log("This is a banana");
        break;
    default:
        console.log("Fruit not recognized");
}

/*
  Explanation:
  - switch(fruit) checks the value of the fruit variable.
  - case "apple" runs only if fruit is "apple".
  - case "banana" runs only if fruit is "banana".
  - default runs when no case matches.

  In simple terms:
  default is the fallback choice when the value does not match any case.
*/
