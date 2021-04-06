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

    DFS_Pre() { // DFS Pre Order
      let data = [];
      let current = this.root;

      function traverse(node) {
        data.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }

      traverse(current);
      return data;

    }

    DFS_Post() {
      let data = [],
      current = this.root;

      function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node.val);
      }

      traverse(current);
      return data;
    }

    DFS_Inorder() {
      let data = [],
      current = this.root;

      function traverse(node) {
        if (node.left) traverse(node.left);
        data.push(node.val);
        if (node.right) traverse(node.right);
      }

      traverse(current);
      return data;
    }

    

  }

let alvin = new BST();
alvin.addNode(10);
alvin.addNode(6);
alvin.addNode(15);
alvin.addNode(3);
alvin.addNode(8);
alvin.addNode(20);