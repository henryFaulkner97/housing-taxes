const secondTaxBand = (remainingPrice) => {
    let totalTax = remainingPrice * 0.02;

    return totalTax;
}

const thirdTaxBand = (remainingPrice) => {
    let totalTax = 2500 + remainingPrice * 0.05;

    return totalTax;
}

const fourthTaxBand = (remainingPrice) => {
    let totalTax = 36250 + remainingPrice * 0.1;

    return totalTax;
} 

const fifthTaxBand = (remainingPrice) => {
    let totalTax = 93750 + remainingPrice * 0.12;

    return totalTax;
}

const calculateTax = (purchasePrice) => {

    if (typeof purchasePrice != "number" || purchasePrice < 0 || isNaN(purchasePrice) == true) {
        throw "Invalid purchase price";
    }

    if (purchasePrice <= 125000) {
        var totalTax = 0;

    } else if (purchasePrice <= 250000 ) {
        var totalTax = secondTaxBand(purchasePrice - 125000);

    } else if (purchasePrice <= 925000) {
        var totalTax = thirdTaxBand(purchasePrice - 250000);

    } else if (purchasePrice <= 1500000) {
        var totalTax = fourthTaxBand(purchasePrice - 925000);

    } else {
        var totalTax = fifthTaxBand(purchasePrice - 1500000);
    } 

    return totalTax.toLocaleString();
}

module.exports = {calculateTax, secondTaxBand, thirdTaxBand, fourthTaxBand, fifthTaxBand};
