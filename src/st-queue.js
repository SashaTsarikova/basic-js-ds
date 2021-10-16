const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue{
  length = 0;
  head = null;

  
    enqueue(element) {
      var node = new ListNode(element);
      if (this.head === null) {
        this.head = node;
      } else {
        var currentNode = this.head;
  
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
  
        currentNode.next = node;
      }
  
      this.length++;
} 
  
dequeue() {
  var currentNode = this.head;
  let a = currentNode.value;
currentNode.value= currentNode.next.value;
currentNode.next= currentNode.next.next;
this.length--;
return a;
  
  }

  getUnderlyinglist() {
    return this.head;
  }
}
