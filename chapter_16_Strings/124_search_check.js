let url = "https://staging.vwo.com/api/login";

let search = url.search("login");
console.log(search); // 30

url.startsWith("http"); // true
url.startsWith("https"); // false
console.log(url.startsWith("http")); // true

console.log(url.indexOf("a")); // 8
console.log(url.lastIndexOf("a")); // 8
console.log(url.indexOf("staging")); // 8

console.log(url.search("login")); // 30
