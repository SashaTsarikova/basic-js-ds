
let ListNode = function (x) {
    this.value = x;
    this.next = null;
  }

  class Queue {
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
  



const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue())

console.log(queue.getUnderlyinglist()) // returns { value: 3, next: nul }
console.log(String(queue.getUnderlyingList()));
