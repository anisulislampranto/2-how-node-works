// module.exports
// const Calculator = require("./test-module-1.js");
// const calc1 = new Calculator();
// console.log(calc1.devide(9, 5));

// exports
// const calc2 = require("./test-module-1");
const { multiply, devide, add } = require("./test-module-2");

console.log(multiply(2, 5));
console.log(devide(2, 5));
console.log(add(2, 5));

// chaching
require("./test-modules-3")();
require("./test-modules-3")();
require("./test-modules-3")();
require("./test-modules-3")();
