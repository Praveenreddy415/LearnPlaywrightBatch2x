function add(a, b) {
  return a + b;
}

for (let i = 1; i <= 1000; i++) {
  let result = add(i, i);
  console.log(`Iteration ${i}: ${result}`);
}