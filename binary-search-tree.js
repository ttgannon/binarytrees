class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return this;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {
    if (!node) {
      this.root = new Node(val);
      return this;
    }
    if (val < node.val) {
      if (!node.left) {
        node.left = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, node.left);
      }
    } else if (val > node.val) {
      if (!node.right) {
        node.right = new Node(val);
      } else {
        return this.insertRecursively(val, node.right);
      }
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return undefined
    }
    let current = this.root;
    while (true) {
      if (val === current.val) {
        return current;
      }
      if (val < current.val) {
        if (!current.left) {
          return undefined;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          return undefined;
        }
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
    if (!node) {
      return undefined;
    }
    //check for return case
    if (val === node.val) {
      return node;
    }
    //do the actual work
    if (val < node.val) {
      if (!node.left) {
        return undefined;
      }
      node = node.left;
      return this.findRecursively(val, node)
    } else if (val > node.val) {
      if (!node.right) {
        return undefined;
      }
      node = node.right;
      return this.findRecursively(val, node);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visited = []) {
    if (!node) {
      return visited;
    }
  
    visited.push(node.val); 
  
    if (node.left) {
      this.dfsPreOrder(node.left, visited); 
    }
  
    if (node.right) {
      this.dfsPreOrder(node.right, visited);
    }
  
    return visited;
  }
  

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, visited = []) {
    if (!node) {
      return visited;
    }
  
    if (node.left) {
      this.dfsInOrder(node.left, visited); // Recur on the left subtree
    }
  
    visited.push(node.val); // Visit the current node
  
    if (node.right) {
      this.dfsInOrder(node.right, visited); // Recur on the right subtree
    }
  
    return visited;
  }
  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visited = []) {
    if (!node) {
      return visited;
    }
  
    if (node.left) {
      this.dfsPostOrder(node.left, visited); // Recur on the left subtree
    }
  
    if (node.right) {
      this.dfsPostOrder(node.right, visited); // Recur on the right subtree
    }
  
    visited.push(node.val); // Visit the current node
  
    return visited;
  }
  

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [];
    const visited = [];
    let current = this.root;
  
    if (current) {
      queue.push(current);
    }
  
    while (queue.length > 0) {
      current = queue.shift(); 
      visited.push(current.val);
  
      if (current.left) {
        queue.push(current.left);
      }
  
      if (current.right) {
        queue.push(current.right);
      }
    }
  
    return visited;
  }
  

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
