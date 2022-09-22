const taxCalculator = require("./tax-Calculator.js");

const main = (userInput) => {

    try {
        let purchasePrice = parseInt(userInput);
        let finalTax = taxCalculator.calculateTax(purchasePrice);


        console.log("Purchase Price: £" + purchasePrice.toLocaleString());
        console.log("Stamp Duty Tax: £" + finalTax);

    } catch(err) {
        console.log(err);
    }
}

main(process.argv.slice(2));

module.exports = {main};