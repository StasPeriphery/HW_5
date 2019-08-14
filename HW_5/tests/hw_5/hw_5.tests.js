
describe('Remove 3 value', () => {
    it('shoud return new vec ', () => {
        let tree = new BinaryTree();
        tree.insert(8);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.insert(3);
        tree.insert(6);
        tree.insert(2);
        tree.insert(4);
        tree.insert(7);
        tree.insert(9);
        tree.insert(1);
        tree.insert(5);

        tree.remove(3);

        const expected = [1,2,4,5,6,7,8,9,10,13,14];
        const actual = tree.toArray();
        assert.deepEqual(actual, expected);
    });
});

describe('Remove 6 value', () => {

    it('shoud return new vec ', () => {

        let tree = new BinaryTree();
        tree.insert(8);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.insert(3);
        tree.insert(6);
        tree.insert(2);
        tree.insert(4);
        tree.insert(7);
        tree.insert(9);
        tree.insert(1);
        tree.insert(5);

        tree.remove(7);

        const expected = [1,2,3,4,5,6,8,9,10,13,14];
        const actual = tree.toArray();
        assert.deepEqual(actual, expected);
    });
});


describe('Remove 4 value', () => {
    it('shoud return new vec ', () => {
        let tree = new BinaryTree();
        tree.insert(8);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.insert(3);
        tree.insert(6);
        tree.insert(2);
        tree.insert(4);
        tree.insert(7);
        tree.insert(9);
        tree.insert(1);
        tree.insert(5);

        tree.remove(4);

        const expected = [1,2,3,5,6,7,8,9,10,13,14];
        const actual = tree.toArray();
        assert.deepEqual(actual, expected);
    });
});


describe('Remove 5 value', () => {
    it('shoud return new vec ', () => {
        let tree = new BinaryTree();
        tree.insert(8);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.insert(3);
        tree.insert(6);
        tree.insert(2);
        tree.insert(4);
        tree.insert(7);
        tree.insert(9);
        tree.insert(1);
        tree.insert(5);

        tree.remove(5);

        const expected = [1,2,3,4,6,7,8,9,10,13,14];
        const actual = tree.toArray();
        assert.deepEqual(actual, expected);
    });
});

describe('Binary search tree constructor', () => {
    const testData = [
        {
        expected: `root`
        },
        {
            expected: `empty`
        },
        {
            expected: `toArray`
        },
        {
            expected: `toString`
        },
        {
            expected: `insert`
        },
        {
            expected: `remove`
        },
        {
            expected: `find`
        }];
    testData.forEach(function (data) {

        const {expected} = data;
        let tree = new BinaryTree();

        it(`should return True, when Binary search tree has ${expected} prop/method`, function () {
            const actual = expected in tree;
            assert.deepEqual(actual, true);
        });
    });
});

describe('Binary search tree Empty method', () => {
    it('shoud be null of mockTree', () => {

        let mockTree = new BinaryTree();
        mockTree.insert(8);
        mockTree.insert(10);
        mockTree.insert(14);
        mockTree.insert(13);
        mockTree.insert(3);
        mockTree.insert(6);
        mockTree.insert(4);
        mockTree.insert(7);
        mockTree.insert(1);
        mockTree.insert(5);
        mockTree.empty();
        assert.deepEqual(mockTree, new BinaryTree());
    });

    it('shoud be root == null of tree', () => {

        let tree = new BinaryTree();
        tree.insert(8);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.insert(3);
        tree.insert(6);
        tree.insert(4);
        tree.insert(7);
        tree.insert(1);
        tree.insert(5);
        tree.empty();
        assert.deepEqual(tree.root, null);
    });
});

describe('Binary search tree empty method', () => {
    it('shoud be root == null of tree', () => {

        let tree = new BinaryTree();
        tree.insert(8);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.insert(3);
        tree.insert(6);
        tree.insert(4);
        tree.insert(7);
        tree.insert(1);
        tree.insert(5);
        tree.empty();
        assert.deepEqual(tree.root, null);
    });
});

describe('Binary search tree ToArray method', () => {
    it('shoud return new sorted array of mockTree --> ["A", "C", undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14]', () => {

        let tree = new BinaryTree();
        tree.insert(8);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.insert(3);
        tree.insert(6);
        tree.insert(null);
        tree.insert(4);
        tree.insert(7);
        tree.insert(undefined);
        tree.insert(1);
        tree.insert(5);
        tree.insert("A");
        tree.insert("C");

        let vec = ["A", "C", undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14];
        const actual = tree.toArray();
        assert.deepEqual(actual, vec);
    });
});

describe('Binary search tree ToString method', () => {
    it('shoud return new string (sorted) of mockTree --> A, C, undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14', () => {

        let tree = new BinaryTree();
        tree.insert(8);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.insert(3);
        tree.insert(6);
        tree.insert(null);
        tree.insert(4);
        tree.insert(7);
        tree.insert(undefined);
        tree.insert(1);
        tree.insert(5);
        tree.insert("A");
        tree.insert("C");

        let mockStr = 'A, C, undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14';
        const actual = tree.toString();
        assert.deepEqual(actual, mockStr);
    });
});

describe('Binary search tree Insert method', () => {
    const testData = [
        {
            value: 8,
            expected: [8]
        },
        {
            value: 10,
            expected: [8, 10]
        },
        {
            value: 14,
            expected: [8, 10, 14]
        },
        {
            value: 13,
            expected: [8, 10, 13, 14]
        },
        {
            value: 3,
            expected: [3, 8, 10, 13, 14]
        },
        {
            value: 6,
            expected: [3, 6, 8, 10, 13, 14]
        },
        {
            value: null,
            expected: [null, 3, 6, 8, 10, 13, 14]
        },
        {
            value: 4,
            expected: [null, 3, 4, 6, 8, 10, 13, 14]
        },
        {
            value: 7,
            expected: [null, 3, 4, 6, 7, 8, 10, 13, 14]
        },
        {
            value: undefined,
            expected: [undefined, null, 3, 4, 6, 7, 8, 10, 13, 14]
        },
        {
            value: 1,
            expected: [undefined, null, 1, 3, 4, 6, 7, 8, 10, 13, 14]
        },
        {
            value: 5,
            expected: [undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14]
        },
        {
            value: 'A',
            expected: ['A', undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14]
        },
        {
            value: 'C',
            expected: ['A', 'C', undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14]
        },
        {
            value: {
                name: 'Oleg',
                age: 45
            },
            expected: ['A', 'C', {
                name: 'Oleg',
                age: 45
            }, undefined, null, 1, 3, 4, 5, 6, 7, 8, 10, 13, 14]
        }];

    let tree = new BinaryTree();
    testData.forEach(function (data) {

        const {value,expected} = data;
        it(`shoud insert element = ${value} in Binary Search Tree`, () => {
            let outStr = [];
            tree.insert(value);
            outStr = tree.toArray();
            assert.deepEqual(outStr, expected);
        });
    });
});

describe('Binary search tree getBalanse method [1,2,3,4,5,6,7,8,9,10,13,14]', () => {
    it('shoud return new vec ', () => {

        let tree = new BinaryTree();
        tree.insert(8);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.insert(3);
        tree.insert(6);
        tree.insert(2);
        tree.insert(4);
        tree.insert(7);
        tree.insert(9);
        tree.insert(1);
         tree.insert(5);

        tree.getBalanse();
        const expected = [1,2,3,4,5,6,7,8,9,10,13,14];
        const actual = tree.toArray();
        assert.deepEqual(actual, expected);
    });
});


describe('Binary search tree getBalanse method [1,2,3,4,5,6,7,8,9,10,13,14]', () => {
    it('shoud return new vec ', () => {

        let tree = new BinaryTree();
        tree.insert(8);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.insert(3);
        tree.insert(6);
        tree.insert(2);
        tree.insert(4);
        tree.insert(7);
        tree.insert(9);
        tree.insert(1);
        tree.insert(5);


        const expected = [1,2,3,4,5,6,7,8,9,10,13,14];
        const actual = tree.toArray();
        assert.deepEqual(actual, expected);
    });
});







