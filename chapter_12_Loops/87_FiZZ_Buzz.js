let i = 10;
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("FiZZ");
    } else if (i % 5 == 0) {
        console.log("BuZZ");
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FiZZBuZZ");
    } else {
        console.log(i);
    }
}