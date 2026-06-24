function getStatus() {
    if (code >= 200 && code < 300) return "Success";

    if (code >= 400 && code < 500) return "Client Error";
    if (code >= 500 && code < 600) return "Server Error";
    return "Unknown Status";
}
getStatus(200); // "Success"
getStatus(404); // "Client Error"
getStatus(500); // "Server Error"

getStatus(999); // "Unknown Status"

function logTest(name) {
    console.log(`Test logged for ${name}`);
}
let result = logTest("Alice");
console.log(result); // undefined, because logTest does not return a value
