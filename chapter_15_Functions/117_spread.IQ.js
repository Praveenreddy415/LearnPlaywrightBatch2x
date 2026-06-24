function add(a, b, c) {
    return a + b + c;

}
let numbers = [1, 2, 3];
add(...numbers); // 6   

let responseCodes = [200, 404, 500];
function hasError(...codes) {
    return codes.some(code => code >= 400);
}
hasError(...responseCodes); // true, because 404 and 500 are error codes