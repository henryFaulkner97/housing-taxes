const taxCalculator = require("./tax-calculator.js");
const index = require("./index.js");

describe('first tax band', () => {
    test('lower limit', () => {
        const purchasePrice = 0;
        const expectedOutput = "0";

        let actualValue = taxCalculator.calculateTax(purchasePrice);

        expect(actualValue).toEqual(expectedOutput);
    });

    test('upper limit', () => {
        const purchasePrice = 125000;
        const expectedOutput = "0";

        let actualValue = taxCalculator.calculateTax(purchasePrice);

        expect(actualValue).toEqual(expectedOutput);
    });
});

describe('second tax band', () => {
    test('lower limit', () => {
        const remainingPrice = 1;
        const expectedOutput = 0.02;

        let actualValue = taxCalculator.secondTaxBand(remainingPrice);

        expect(actualValue).toEqual(expectedOutput);
    });

    test('upper limit', () => {
        const remainingPrice = 125000;
        const expectedOutput = 2500;

        let actualValue = taxCalculator.secondTaxBand(remainingPrice);

        expect(actualValue).toEqual(expectedOutput);
    });
});

describe('third tax band', () => {
    test('lower limit', () => {
        const remainingPrice = 1;
        const expectedOutput = 2500.05;

        let actualValue = taxCalculator.thirdTaxBand(remainingPrice);

        expect(actualValue).toEqual(expectedOutput);
    });

    test('upper limit', () => {
        const remainingPrice = 675000;
        const expectedOutput = 36250;

        let actualValue = taxCalculator.thirdTaxBand(remainingPrice);

        expect(actualValue).toEqual(expectedOutput);
    });
});

describe('fourth tax band', () => {
    test('lower limit', () => {
        const remainingPrice = 1;
        const expectedOutput = 36250.1;

        let actualValue = taxCalculator.fourthTaxBand(remainingPrice);

        expect(actualValue).toEqual(expectedOutput);
    });

    test('upper limit', () => {
        const remainingPrice = 575000;
        const expectedOutput = 93750;

        let actualValue = taxCalculator.fourthTaxBand(remainingPrice);

        expect(actualValue).toEqual(expectedOutput);
    });
});

describe('fifth tax band', () => {
    test('lower limit', () => {
        const remainingPrice = 1;
        const expectedOutput = 93750.12;

        let actualValue = taxCalculator.fifthTaxBand(remainingPrice);

        expect(actualValue).toEqual(expectedOutput);
    });
});

describe('extreme values', () => {
    test('purchase price is non-number', () => {
        const purchasePrice = "not a number";

        expect(() => { taxCalculator.calculateTax(purchasePrice); }).toThrow("Invalid purchase price");
    });

    test('purchase price is below 0', () => {
        const purchasePrice = -100;

        expect(() => { taxCalculator.calculateTax(purchasePrice); }).toThrow("Invalid purchase price");
    });

    test('extreme price', () => {
        const purchasePrice = 100000000
        const expectedOutput = "11,913,750";
    
        let actualValue = taxCalculator.calculateTax(purchasePrice);
    
        expect(actualValue).toEqual(expectedOutput);
    });
});

describe('index.js tests', () => {
    let captureConsoleLogs = (purchasePrice) => {
        let log = [];
        console.log = (output) => {
            log.push(output);
            process.stdout.write(output + '\n');
        };
    
        index.main(purchasePrice);
    
        return log;
    }

    test('normal purchase price', () => {
        const purchasePrice = 1250000;
        const expectedOutput = ["Purchase Price: £1,250,000", "Stamp Duty Tax: £68,750"];

        let actualValue = captureConsoleLogs(purchasePrice);

        expect(actualValue).toEqual(expectedOutput);
    });

    test('invalid purchase price', () => {
        const purchasePrice = "invalid";
        const expectedOutput = ["Invalid purchase price"];

        let actualValue = captureConsoleLogs(purchasePrice);

        expect(actualValue).toEqual(expectedOutput);
    })
})