class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    setDetails(name, age) {
        this.name = name;
        this.age = age;
    }
}

let user1 = new User("Alice", 30);
let user2 = new User("Bob", 25);

console.log(user1.getDetails());
console.log(user2.getDetails());