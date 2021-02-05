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

  push(val) { // adding to the end of the list
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

  pop() { // removing the last node
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

  shift() { //Removing first item in the linked list
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

  unshift(val) { // adding a new node in the front of the list
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
    
    newNode.next = this.head;
    this.head = newNode;
    
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let currentIndex = 0;
    let currentNode = this.head;
    while(currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    return currentNode;
  }

  set(index, value) {
    if (this.get(index)) {
      this.get(index).val = value;  
      return true;
    }
      return false;
  }

  insert(index, value) {
    if(index >= this.length || index < 0) {
      return false;
    }

    if (index === 0) {
      return !!this.unshift(value);
    }

    if (index === this.length) {
      return !!this.push(value);
    }

    if (this.get(index)) {
      let priorNode = this.get(index-1);
      let afterNode = priorNode.next;
      let newNode = new Node(value);
      priorNode.next = newNode;
      newNode.next = afterNode;
      this.length += 1;
      return true;
    }
    return false
  }

  remove(index) {   //remove a node from given index
    if(index >= this.length || index < 0) {
      return false;
    }

    if (index === 0) {
      return !!this.shift();
    }

    if (index === this.length) {
      return !!this.pop();
    }

    if (this.get(index)) {
      let priorNode = this.get(index-1);
      let removedNode = priorNode.next;
      priorNode.next = removedNode.next;
      this.length -=1;
      return removedNode;
    }
    return false
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    // A B C

    for (var i = 0; i< this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      }
      return this;
    }
    
  
}

let alvin = new SLL;
alvin.push("Hi");
alvin.push("There");
alvin.push("Teletubbies");
alvin.push("End");

