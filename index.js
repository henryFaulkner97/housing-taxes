const taxCalculator = require("./tax-Calculator.js");

let purchasePrice = -100;
let totalTax = taxCalculator.main(purchasePrice);

if (totalTax == "Invalid purchase price") {
    console.log(totalTax);

} else {
    console.log("Total stamp duty tax: £" + totalTax);
}