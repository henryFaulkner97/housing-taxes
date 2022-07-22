const taxCalculator = require("./tax-Calculator.js");

let purchasePrice = 10000000;

console.log("Total stamp duty tax: £" + taxCalculator.main(purchasePrice));