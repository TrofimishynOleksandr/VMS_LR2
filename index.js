const isOdd = require("./libs/is-odd");

function sum(numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return sum(numbers) / numbers.length;
}

function max(numbers) {
  return Math.max(...numbers);
}

const data = [1, 2, 3, 4, 5];
console.log("Sum:", sum(data));
console.log("Average:", average(data));
console.log("Max:", max(data));
console.log("Odd numbers:", data.filter((n) => isOdd(n)));
