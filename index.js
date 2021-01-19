// Linked List is just a connection of nodes
//
//Stores a piece of data and reference to next node.

// Nodes
// piece of data - val
// refernce to next node 

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

let first = new Node(13);
first.next = new Node(14);


class SLL{
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

}