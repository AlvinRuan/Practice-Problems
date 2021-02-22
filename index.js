// Doubly Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let pushNode = new Node(val);
    if (this.length === 0) {
      this.head = pushNode;
      this.tail = pushNode;
    } else {
      pushNode.prev = this.tail;
      this.tail.next = pushNode;
      this.tail = pushNode;
    }
    this.length += 1;    
    return this;
  }

  pop() {
    let removedNode = this.tail;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      removedNode.prev = null;
    }
    this.length -= 1;
    return removedNode;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.lenght === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let removedHead = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      removedHead.next = null;
    }
    this.length -= 1;
    return removedHead;
  } 
}

let alvin = new DLL();
alvin.push(1);
alvin.push(2);
alvin.push(3);