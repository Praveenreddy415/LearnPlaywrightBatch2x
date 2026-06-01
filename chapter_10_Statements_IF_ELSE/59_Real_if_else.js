let username = "Developer";
let password = "password123";
let isAccountLocked = false;
if (isAccountLocked) {
    console.log("Your account is locked. Please contact support.");
} else if (username === "Developer" && password === "password123") {
    console.log("Login successful! Welcome, " + username + "!");
} else {
    console.log("Login failed! Invalid username or password.");
}