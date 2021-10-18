const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
//   constructor(data, left = null, right = null) {
//       this.data = data
//       this.left = left
//       this.right = right
//   }
// }

module.exports = class BinarySearchTree{
    
    constructor() {
    this.rootGlobal = null;
  }
  
    root() {
   return this.rootGlobal;
  }
  
  add(data) {
    const newNode = new Node(data);
    const node = this.rootGlobal;
    if (!node) {
        this.rootGlobal = newNode;
        return
    } else {
        const searchTree = function(node) {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                    return
                } else if (node.left !== null) {
                    return searchTree(node.left)
                }
            } else if (data > node.data) {
                if (node.right === null) {
                    node.right = newNode;
                    return
                } else if (node.right !== null) {
                    return searchTree(node.right)
                }
            } else {
                return null
            }
        }
        return searchTree(node)
    }
  }
  
  has(data) {
    let current = this.rootGlobal;
    while (current) {
        if (data === current.data) {
            return true
        }
        data < current.data ? current = current.left : current = current.right
    }
    return false
  }
  
  find(data) {
    let current = this.rootGlobal;
    while (current.data !== data) {
        if (data < current.data) {
            current = current.left
        } else {
            current = current.right
        }
        if (current === null) {
            return null
        }
    }
    return current
  }
  
  remove(data) {
    const removeNode = function(node, data) {
        if (node === null) return null
        if (data === node.data) {
            // потомки отсутствуют
            if (node.left === null && node.right === null) return null
            // отсутствует левый узел
            if (node.left === null) return node.right
            // отсутствует правый узел
            if (node.right === null) return node.left
            // имеется два узла
            let tempNode = node.right
            while (tempNode.left !== null) {
                tempNode = tempNode.left
            }
            node.data = tempNode.data
            node.right = removeNode(node.right, tempNode.data)
            return node
        } else if (data < node.data) {
            node.left = removeNode(node.right, data)
            return node
        } else {
            node.right = removeNode(node.right, data)
            return node
        }
    }
    removeNode(this.rootGlobal, data)
  }
  
  min() {
    let current = this.rootGlobal;
    while (current.left !== null) {
        current = current.left
    }
    return current.data
  }
  
  max() {
    let current = this.rootGlobal;
    while (current.right !== null) {
        current = current.right
    }
    return current.data
  }
  }


