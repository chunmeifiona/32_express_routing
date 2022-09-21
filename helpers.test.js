const { average, midpoint, mostFrequent } = require('./helpers');

describe('average function', function () {
    test('average of numbers', function () {
        const res = average([1, 2, 3]);
        expect(res).toEqual(2);
    })
    test('average of numbers', function () {
        const res = average([1, 2, 3, -3]);
        expect(res).toEqual(0.75);
    })
})

describe('midpoint function', function () {
    test('midpoint of an even set', function () {
        const res = midpoint([1, 2, 3, 4]);
        expect(res).toEqual(2.5);
    })
    test('midpoint of an odd set', function () {
        const res = midpoint([1, 2, 3]);
        expect(res).toEqual(2);
    })
})

describe('mostFrequent function', function () {
    test('mostFrequent numbers', function () {
        const res1 = mostFrequent([1, 2, 2, 2, 5, 5, 5, 5, 3]);
        expect(res1).toEqual(5);

        const res2 = mostFrequent([-1, -1, -1, -1, 2, 2, 2, 5, 3]);
        expect(res2).toEqual(-1);
    })
})