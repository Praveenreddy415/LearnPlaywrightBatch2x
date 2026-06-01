let statusCode = 200;
if (statusCode >= 200 && statusCode < 300) {
    console.log("OK");
} else if (statusCode >= 300 && statusCode < 400) {
    console.log("Redirection");
}   else if (statusCode >= 400 && statusCode < 500) {
    console.log("Client Error");
} else if (statusCode >= 500 && statusCode < 600) {
    console.log("Server Error");
} else {
    console.log("Invalid Status Code");
}