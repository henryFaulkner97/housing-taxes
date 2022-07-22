const secondTaxBand = (remainingPrice) => {
    let totalTax = remainingPrice * 0.05;

    return totalTax;
}

const thirdTaxBand = (remainingPrice) => {
    let totalTax = 15000 + remainingPrice * 0.05;

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

const intToString = (totalTax) => {

}

const main = (purchasePrice) => {
    if (purchasePrice <= 300000) {
        var totalTax = 0;

    } else if (purchasePrice > 300000 & purchasePrice <= 500000 ) {
        var totalTax = secondTaxBand(purchasePrice - 300000);

    } else if (purchasePrice <= 925000) {
        var totalTax = thirdTaxBand(purchasePrice - 500000);

    } else if (purchasePrice <= 1500000) {
        var totalTax = fourthTaxBand(purchasePrice - 925000);

    } else {
        var totalTax = fifthTaxBand(purchasePrice - 1500000);
    } 

    return totalTax.toLocaleString();
}

module.exports = {main};
