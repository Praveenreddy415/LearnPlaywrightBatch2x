//empty object
let obj={}

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

//person is  a object reference variable which is pointing to the object in memory

///JSON example
// {"name":"John","age":30,"city":"New York"}
let jsonString = JSON.stringify(person);    

console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}