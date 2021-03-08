// // Doubly Linked List

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DLL {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     let pushNode = new Node(val);
//     if (this.length === 0) {
//       this.head = pushNode;
//       this.tail = pushNode;
//     } else {
//       pushNode.prev = this.tail;
//       this.tail.next = pushNode;
//       this.tail = pushNode;
//     }
//     this.length += 1;    
//     return this;
//   }

//   pop() {
//     let removedNode = this.tail;
//     if (this.length === 0) {
//       return undefined;
//     } else if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail.prev.next = null;
//       this.tail = this.tail.prev;
//       removedNode.prev = null;
//     }
//     this.length -= 1;
//     return removedNode;
//   }

//   shift() {
//     if (!this.head) return undefined;
//     let oldHead = this.head;
//     if (this.lenghth === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = this.head.next;
//       this.head.prev = null;
//       oldHead.next = null;
//     }
//     this.length -= 1;
//     return oldHead;
//   }

//   unshift(val) {
//     let newHead = new Node(val);
//     if (this.lenghth === 0) {
//       this.head = newHead;
//       this.tail = newHead;
//     } else {
//       newHead.next = this.head;
//       this.head.prev = newHead;
//       this.head = newHead;
//     }
//     this.length += 1;
//     return this;
//   }

//   get(index) {
//     if (index < 0 || index > this.length) return null;
//     if (index === 0) return this.head;
//     if (index === this.length) return this.tail;

//     if((index-0) < (this.length - index) || index === (this.length/2)) {
//       let indexNode = this.head.next;
//       for (var i = 1; i < index; i++) {
//         indexNode = indexNode.next;
//       }
//       return indexNode;
//     } else {
//       let indexNode = this.tail.prev;
//       for (var i = this.length-1; i > index; i--) {
//         indexNode = indexNode.prev;
//         }
//       return indexNode;
//     }
//   }

//   set(index, value) {
    
//     let setNode = this.get(index);
//     setNode.val = value;
//     return setNode;
//   } 
// }

// let alvin = new DLL();
// alvin.push(1);
// alvin.push(2);
// alvin.push(3);
// alvin.push(4);
// alvin.push(5);
// alvin.push(6);
// alvin.push(7);
// alvin.push(8);
// alvin.push(9);
// alvin.push(10);
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
    let oldHead = this.head;
    if (this.lenghth === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length -= 1;
    return oldHead;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (this.lenghth === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head.prev = newHead;
      this.head = newHead;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head;
    if (index === this.length-1) return this.tail;

    if(index < (this.length/2)) {
      let indexNode = this.head.next;
      for (var i = 1; i < index; i++) {
        indexNode = indexNode.next;
      }
      return indexNode;
    } else {
      let indexNode = this.tail;
      for (var i = this.length-1; i > index; i--) {
        indexNode = indexNode.prev;
        }
      return indexNode;
    }
  }
  set(index, value) {
    
    let setNode = this.get(index);
    if (setNode != null) {
      setNode.val = value;
    }
    return setNode;
  }

  insert(index, val) { 

    if (index >= this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
    let insertNode = new Node(val);

    let previousNode = this.get(index);
    let nextNode = previousNode.next;
    
    previousNode.next = insertNode;
    insertNode.prev = previousNode;

    nextNode.previous =insertNode;
    insertNode.next = nextNode;
    }
    this.length +=1;
    return this;
  }  

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return !!this.shift();
    if (index === (this.length-1)) return !!this.pop();

    let removeNode = this.get(index);
    let prevNode = removeNode.prev;
    let nextNode = removeNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removeNode.next = null;
    removeNode.prev = null;

    this.length -= 1;
    return removeNode;

  }

}

let alvin = new DLL();
alvin.push(1);
alvin.push(2);
alvin.push(3);
alvin.push(4);
alvin.push(5);
alvin.push(6);
alvin.push(7);
alvin.push(8);
alvin.push(9);
alvin.push(10);