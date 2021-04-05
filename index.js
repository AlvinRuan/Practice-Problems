// Tree Traversal

// 2 ways to traverse a tree
// Breadth First Search (Side ways => A => B => C)
// Visit every node on the same level first
// create a quene
// place root node in the quene
// loop as long as there is something in the quene

//  Depth First Search

class Node {
    constructor(val) {
      this.val = val;
      this.right = null;
      this.left = null;
    }
  }

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

    DFS() {
        var data = [];
        var current = this.root;

        function traverse(node) {
            data.push(node.val);
            if (current.left) traverse(node.left);
            if (current.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    

  }
  


