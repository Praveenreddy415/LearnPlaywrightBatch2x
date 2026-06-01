let isLoggedIn=true;
let userRole="admin";

if(isLoggedIn){
    if(userRole === "admin"){
        console.log("Welcome, admin!");
    } else {
        console.log("Welcome, user!");
    }
} else {
    console.log("Please log in.");
}   