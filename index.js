// Linked List is just a connection of nodes
//
//Stores a piece of data and reference to next node.

// Nodes
// piece of data - val
// refernce to next node 


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
      let newNode = new Node(val);
      if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length ++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let finalTail = this.head;
    let newTail = this.head;
    while(finalTail.next) {
      newTail = finalTail;
      finalTail = finalTail.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return finalTail;
  }

  shift() {
    if(!this.head) {
      return undefined;
    }
    let removedNode = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if(this.length === 0) {
      this.tail = null;
    }
    return removedNode;
  }
}

let alvin = new SLL;
alvin.push("Hi");
alvin.push("There");
alvin.push("Teletubbies");

