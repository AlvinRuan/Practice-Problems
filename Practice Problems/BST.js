// BINARY SEARCH TREES

class BST { // you really only need a root for a Binary search tree
    constructor() {
      this.root = null;
    }
  
    addNode(val) {
        let newNode = new Node(val);
          
         if (this.root === null) {
             this.root = newNode;
             return this;
         } 
  
        let current = this.root;
        while(current) {
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                  current = current.left;
               }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                current = current.right;
                }
            }
        }
    }
  
    find(val) {
      if (this.root === null) return false;
      
      if (this.root.val === val) {
        return true;
      }
  
      let current = this.root,
          found = false;
      while(current.val != null && !found) {
        if (current.val > val) {
          current = current.left;
        } else if (current.val < val) {
          current = current.right;
        } else {
          found = true;
        }
  
        return found;
        
      }
      
    }
  }
  
  class Node {
    constructor(val) {
      this.val = val;
      this.right = null;
      this.left = null;
    }
  }
  
  let alvin = new BST();
  alvin.root = new Node (10);
  alvin.root.left = new Node(7);
  alvin.root.right = new Node(15);
  alvin.root.left.right = new Node(9);
  
  