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
    
    if (!this.rootGlobal) {
        this.rootGlobal = newNode;
        return
    }
      let node = this.rootGlobal;
  
    while (node){
      if (newNode.data < node.data){
        if (!node.left){
            node.left = newNode;
            return
        } 
            node=node.left;
        } else {
    if (!node.right){
        node.right=newNode;
        return
    }
    node = node.right
    } 
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

    let current = this.rootGlobal;
    let previousLeft;
    let previousRight;
    while (current.data !== data) {
        if (data < current.data) {
          previousLeft=current;
            current = current.left
        } else {
          previousRight=current;
            current = current.right
        }
        if (current === null) {
            return null
        }
    }
  
    if(!current.left && !current.right){
          if (previousRight){
            previousRight.right = null;
            return
          } else{
            previousLeft.left = null;
            return
          }
  
    } else if(!current.left || !current.right){
          if (current.left){
              if (previousRight){
              previousRight.right = current.left;
              return
            } else{
              previousLeft.left = current.left;
              return
            }
          } else {
            if (current.right){
              if (previousRight){
              previousRight.right = current.right;
              return
            } else{
              previousLeft.left = current.right;
              return
            }
          }
      } 
    } else {
  
      let currentPeriodic = current;
      let previosPeriodic = previousLeft || previousRight;
      while (currentPeriodic.left !== null) {
        previosPeriodic = currentPeriodic; 
        currentPeriodic = currentPeriodic.left
      }
  
     current.data = currentPeriodic.data;
     previosPeriodic.left = null;
    return
  
    }
  
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


