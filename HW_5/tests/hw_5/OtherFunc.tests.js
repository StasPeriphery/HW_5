describe('Factorial method', () => {
    const testData = [
        {
            number: 4,
            expected: 24,
        },
        {
            number: 5,
            expected: 120,
        },
        {
            number: 1,
            expected: 1,
        },
        {
            number: 2,
            expected: 2,
        },
        {
            number: null,
            expected: null,
        },
        {
            number: undefined,
            expected: undefined,
        },
        {
            number: -5,
            expected: -5,
        }];
    testData.forEach(function (data) {

        const {number, expected} = data;
        const actual = factorial(number);

        it(`should return ${expected} method`, function () {
            assert.deepEqual(actual, expected);
        });
    });
});


describe('getCounter method', () => {
    const testData = [
        {
            number: 1,
            expected: 1,
        },
        {
            number: 5,
            expected: 5,
        },
        {
            number: 1,
            expected: 1,
        },
        {
            number: 2,
            expected: 2,
        },
        {
            number: 5,
            expected: 5,
        }];
    testData.forEach(function (data) {

        const {number, expected} = data;
        let actual = 0;

        const func = getCounter();

        for (let i = 0; i < number; i++) {
            actual = func();
        }
        it(`should return ${expected} method`, function () {
            assert.deepEqual(actual, expected);
        });
    });
});

describe('Fibonachi method', () => {
    const testData = [
        {
            number: 1,
            expected: 1,
        },
        {
            number: 2,
            expected: 1,
        },
        {
            number: 3,
            expected: 2,
        },
        {
            number: 4,
            expected: 3,
        },
        {
            number: 5,
            expected: 5,
        },
        {
            number: 0,
            expected: 0,
        },
        {
            number: undefined,
            expected: undefined,
        },
        {
            number: null,
            expected: null,
        },
        {
            number: -5,
            expected: -5,
        }

    ];
    testData.forEach(function (data) {

        const {number, expected} = data;

        const actual = fibonachi(number);

        it(`should return  ${expected} method`, function () {
            assert.deepEqual(actual, expected);
        });
    });
});


describe('quickSort', () => {
    const testData = [
        {
            vec: [2],
            expected: [2],
        },
        {
            vec: [2, 7, 1, 6, 3],
            expected: [1, 2, 3, 6, 7],
        },
        {
            vec: [1, 2, -2],
            expected: [-2, 1, 2],
        },
        {
            vec: [2, 4, 1, 0, 2, 11, 5],
            expected: [0, 1, 2, 2, 4, 5, 11],
        },
        {
            vec: [],
            expected: [],
        },
    ];

    testData.forEach(data => {
        const {vec, expected} = data;
        const actual = quickSort(vec, 0, vec.length - 1);

        it(`should return ${expected}, mark = ${vec} `, () => {
            assert.deepEqual(actual, expected);
        });
    });
});
