
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
if (this.rootGlobal.data==data && !this.rootGlobal.right && !this.rootGlobal.left){
  this.rootGlobal=null;
  return
} else if (this.rootGlobal.data==data){
    if (!this.rootGlobal.left){
      this.rootGlobal = this.rootGlobal.right;
      return
    } else if (!this.rootGlobal.right){
      this.rootGlobal = this.rootGlobal.left;
      return
    } else {
      if (this.rootGlobal.left){
          let currentPeriodic = this.rootGlobal.left;
          let previosPeriodic;
          while (currentPeriodic.right !== null) {
            previosPeriodic = currentPeriodic; 
            currentPeriodic = currentPeriodic.right
          }

        this.rootGlobal.data = currentPeriodic.data;
        previosPeriodic.right = null;
        return
      } else {

        if (this.rootGlobal.right){
          let currentPeriodic = this.rootGlobal.right;
          let previosPeriodic;
         
          while (currentPeriodic.left !== null) {
            previosPeriodic = currentPeriodic; 
            currentPeriodic = currentPeriodic.left
          }

        this.rootGlobal.data = currentPeriodic.data;
        previosPeriodic.left = null;
        return
        }
          
      }
      
    }
}


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

// const tree = new BinarySearchTree();

// tree.add(1);
// tree.add(-1);
// tree.add(-11);
// tree.add(2);

// tree.add(3);

// tree.add(4);

// tree.add(5);

// console.log(tree.root().data); //1

// console.log(tree.min()) //1

// console.log(tree.max()) // 5
// tree.remove(1);
// tree.remove(2);
// tree.remove(5); 
// console.log(tree.min()) 

// console.log(tree.has(5)) 
// console.log(tree.has(2))
// console.log(tree.has(1))// false

// console.log(tree.max()) // 4
// console.log(tree)
// console.log(tree.root().data);


// class Node {
//   constructor(data, left = null, right = null) {
//       this.data = data
//       this.left = left
//       this.right = right
//   }
// }

// class BinarySearchTree{
  
//   constructor() {
//   this.rootGlobal = null;
// }

//   root() {
//  return this.rootGlobal;
// }

// add(data) {
//   const newNode = new Node(data);
  
//   if (!this.rootGlobal) {
//       this.rootGlobal = newNode;
//       return
//   }
//     let node = this.rootGlobal;

//   while (node){
//     if (newNode.data < node.data){
//       if (!node.left){
//           node.left = newNode;
//           return
//       } 
//           node=node.left;
//       } else {
//   if (!node.right){
//       node.right=newNode;
//       return
//   }
//   node = node.right
//   } 
// }
// }
// }



// const tree = new BinarySearchTree();
// tree.add(10);

// tree.add(15);
// tree.add(7);
// tree.add(2);
// tree.add(9);
// tree.add(12);
// tree.add(11);
// tree.add(8);
// tree.remove(7);
// tree.remove(2);
// tree.remove(9);
// tree.remove(11);
// tree.remove(12);
// tree.remove(8);
// tree.remove(10);
// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.has(9));
// console.log(tree.min());
// console.log(tree);
// console.log(tree.find(9));
// console.log(tree.find(1));


const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.has(14)); // false);
console.log(tree.has(8)); //, false);
console.log(tree.has(9)); //false);
console.log(tree.has(2)); //true);
console.log(tree.has(6)); //, true);
console.log(tree.has(128)); //, true);
console.log(tree.has(31)); //, true);
console.log(tree.has(54)); //, true);
console.log(tree.has(1)); //, true);
// console.log(tree)