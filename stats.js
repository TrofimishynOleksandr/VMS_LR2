const isOdd = require("./libs/is-odd");

function countOdd(numbers) {
  return numbers.filter((n) => isOdd(n)).length;
}

module.exports = { countOdd };
