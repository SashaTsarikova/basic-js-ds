
// let ListNode = function (x) {
//     this.value = x;
//     this.next = null;
//   }

//   class Queue {
//     length = 0;
//     head = null;
  
  
    
//       enqueue(element) {
//         var node = new ListNode(element);
//         if (this.head === null) {
//           this.head = node;
//         } else {
//           var currentNode = this.head;
    
//           while (currentNode.next) {
//             currentNode = currentNode.next;
//           }
    
//           currentNode.next = node;
//         }
    
//         this.length++;
//   } 
    
//       dequeue() {
//         var currentNode = this.head;
//         let a = currentNode.value;
//     currentNode.value= currentNode.next.value;
//     currentNode.next= currentNode.next.next;
//     this.length--;
//     return a;
        
//         }

//         getUnderlyinglist() {
//             return this.head;
//           }
//     }
  



// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue())

// console.log(queue.getUnderlyinglist()) // returns { value: 3, next: nul }
// console.log(String(queue.getUnderlyingList()));



class Node {
  constructor(data, left = null, right = null) {
      this.data = data
      this.left = left
      this.right = right
  }
}

class BinarySearchTree{
  
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

const tree = new BinarySearchTree();

tree.add(1);

tree.add(2);

tree.add(3);

tree.add(4);

tree.add(5);

console.log(tree.root().data); //1

console.log(tree.min()) //1

console.log(tree.max()) // 5

tree.remove(5); 

console.log(tree.has(5)) // false

console.log(tree.max()) // 4