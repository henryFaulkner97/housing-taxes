const taxCalculator = require("./tax-Calculator.js");

let purchasePrice = 10000000;

try {
    let finalTax = taxCalculator.calculateTax(purchasePrice);

    console.log("Stampy Duty Tax: £" + finalTax);
} catch(err) {
    console.log(err);
}