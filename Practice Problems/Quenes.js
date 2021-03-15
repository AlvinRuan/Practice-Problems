

// D =>  C =>  B =>  A

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    enqueue(val) {
  
      let newNode = new Node(val);
      if (!this.size) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.size +=1;
      return this;
    }
  
    dequeue() {
      if (!this.size) {
        return null;
      }
      let removedNode = this.first;
  
      if (this.size === 1) {
        this.last = null;
      }
      this.first = removedNode.next;
      removedNode.next = null;
      this.size -=1;
      return removedNode;
      
    }
  
  }
  
  let alvin = new Queue();
  alvin.enqueue("A");
  alvin.enqueue("B");
  alvin.enqueue("C");
  alvin.enqueue("D");