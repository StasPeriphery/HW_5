function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


function BaseBinaryTree() {
    this.root = null;
}

BaseBinaryTree.prototype.empty = function () {
};
BaseBinaryTree.prototype.toArray = function () {
};
BaseBinaryTree.prototype.toString = function () {
};
BaseBinaryTree.prototype.insert = function (value) {
};
BaseBinaryTree.prototype.find = function (value) {
};
BaseBinaryTree.prototype.remove = function (value) {
};
BaseBinaryTree.prototype.getBalanse = function () {
};


function BinaryTree() {
    this.root = null;
}


BinaryTree.prototype = Object.create(BaseBinaryTree.prototype);
BinaryTree.prototype.constructor = BinaryTree;


BinaryTree.prototype.empty = function () {
    this.root = null;
}

BinaryTree.prototype.toArray = function () {

    let result = [];
    let position = this.root;

    move(position, result);
    return result;
};

function move(position, result) {

    position.left && move(position.left, result);
    result.push(position.value);
    position.right && move(position.right, result);

};

BinaryTree.prototype.toString = function () {

    let arrEntryValue = this.toArray();
    let outEntryString = '';

    arrEntryValue.forEach(function (element) {
        outEntryString += element + ", ";
    });
    outEntryString = outEntryString.slice(0, -2);
    return outEntryString;
}


BinaryTree.prototype.insert = function (value) {

    if (this.root === null) {
        this.root = new Node(value);
    } else {
        recInsert(value, this.root);
    }

    function recInsert(value, entry) {
        if (value > entry.value) {
            if (entry.right === null) {
                entry.right = new Node(value);
            } else {
                recInsert(value, entry.right);
            }
        } else {
            if (entry.left === null) {
                entry.left = new Node(value);
            } else {
                recInsert(value, entry.left);
            }
        }
    }
}

BinaryTree.prototype.find = function (value) {

    if (this.root === null) {
        return null;
    } else {
        return findBelow(value, this.root);
    }

    function findBelow(value, entry) {

        if (value > entry.value) {
            if (entry.right === null) {
                return null;
            } else {
                return findBelow(value, entry.right);
            }
        } else {
            if (entry.left === null) {
                return null;
            } else {
                return findBelow(value, entry.left);
            }
        }
    }
}

BinaryTree.prototype.getBalanse = function () {

    let vec = this.toArray();
    this.root = null;

    this.insert(Math.floor(vec.length / 2)+1)

    for (let i = 0; i < vec.length; i++) {
        if(Math.floor(vec.length / 2) === i){
            continue;
        }
        this.insert(vec[i]);
    }

}






