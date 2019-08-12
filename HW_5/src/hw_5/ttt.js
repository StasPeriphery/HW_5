// function factorial(numb) {
//     if (numb!=1)
//         return numb * factorial(--numb);
//     return 1;
// }
//
// function getCounter(){
//     let count = 0;
//
//     return function () {
//         return count++
//     }
// }
//
// function quickSort(vec, left, right) {
//
//     let index;
//
//     if (vec.length > 1)
//     {
//         index = partition(vec, left, right);
//         if (left < index - 1)
//             quickSort(vec, left, index - 1);
//
//         if (index < right)
//             quickSort(vec, index, right);
//     }
//     return vec;
// }
//
// function swap(vec, firstIndex, secondIndex){
//     const temp = vec[firstIndex];
//     vec[firstIndex] = vec[secondIndex];
//     vec[secondIndex] = temp;
// }
//
// function partition(vec, left, right) {
//     let pivot   = vec[Math.floor((right + left) / 2)],
//         i       = left,
//         j       = right;
//     while (i <= j) {
//         while (vec[i] < pivot)
//             i++;
//
//         while (vec[j] > pivot)
//             j--;
//
//         if (i <= j)
//         {
//             swap(vec, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }
//
// function fibonachi(value){
//
//     return value <= 1 ? value : fibonachi(value - 1) + fibonachi(value - 2);
// }
//
//
//
//
// function Node(data) {
//
//     this.data = data;
//     this.left = null;
//     this.right = null;
// };
// function BinaryTree() {
//
//     this.root = null;
//     this.length = 0;
//     this.arr = [];
//
//     this.push = function (insertValue) {
//
//         let leftRight = false;
//         this.length++;
//
//         if (this.root === null) {
//             this.root = new Node(insertValue);
//             return;
//         }
//
//         let temp = null;
//         temp = this.root;
//
//         while (true) {
//
//             if (insertValue < temp.data) {
//                 if (!temp.right) {
//                     leftRight = true;
//                     break;
//                 }
//                 temp = temp.right;
//             } else {
//                 if (!temp.left) {
//                     leftRight = false;
//                     break;
//                 }
//                 temp = temp.left;
//             }
//         }
//
//         if (leftRight) {
//             temp.left = new Node(insertValue);
//         } else {
//             temp.right = new Node(insertValue);
//         }
//     }
//
//     this.init = function (vec) {
//         for (let i = 0; i < vec.length; i++) {
//             this.push(vec[i]);
//         }
//     }
//
//     this.getVec = function () {
//
//         let vec = [];
//
//         this.move(this.root);
//
//         return this.arr;
//
//     }
//
//     this.move = function (node) {
//
//         if (node.left) {
//             this.move(node.left);
//         }
//         this.arr.push = node.data;
//
//         if (node.right) {
//             this.move(node.right);
//         }
//         this.arr.push = node.data;
//
//     }
//
//     this.getBalanse = function () {
//
//         let vec = this.getVec();
//         this.root = null;
//
//         for (let i = vec.length / 2; i < vec.length; i++) {
//             this.push(vec[i]);
//         }
//         for (let i = 0; i < vec.length / 2; i++) {
//             this.push(vec[i]);
//         }
//     }
//
//     this.get = function (value) {
//
//         let node = this.root;
//         let nodeBefor = null;
//         let leftRight = true;
//         //right
//         while (node) {
//             if (node.data === value) {
//                 break;
//             }
//             nodeBefor = node;
//             if (node.data < value) {
//                 node = node.right;
//                 leftRight = true;
//             } else {
//                 node = node.left;
//                 leftRight = false;
//             }
//         }
//         if (leftRight) {
//             nodeBefor.right = node.right;
//
//         } else {
//             nodeBefor.left = node.left;
//         }
//
//         let tempNode = nodeBefor;
//
//         if (leftRight) {
//             while (tempNode.right) {
//                 tempNode = tempNode.right;
//             }
//             if (tempNode.left) {
//                 tempNode.right = tempNode.left;
//             }
//         } else {
//             while (tempNode.left) {
//                 tempNode = tempNode.left;
//             }
//             if (tempNode.right) {
//                 tempNode.left = tempNode.right;
//             }
//         }
//
//         return node;
//     }
//
//     function findNode(value, node) {
//
//         let nodeTemp = null;
//         let rez = null;
//     }
//
//     this.moveNodeR = function (nodeMove) {
//
//         if (nodeMove.left !== null) {
//             nodeMove.right = nodeMove.left;
//         }
//         this.moveNodeR(nodeMove.right);
//
//     }
//
//     this.moveNodeL = function (nodeMove) {
//
//         if (nodeMove.left !== null) {
//             nodeMove.left = nodeMove.right;
//         }
//
//         this.moveNodeL(nodeMove.left);
//     }
//
//     this.getMinValue = function () {
//         let rez = 0;
//         let node = this.root;
//         while (node.left) {
//             node = node.left;
//         }
//
//         return node.value;
//     }
//
//     this.getMaxValue = function (node) {
//
//         if (!node.right) {
//             return node.data;
//         }
//         node = node.right;
//
//         return this.getMaxValue(node);
//     }
// }





