const Queue = require("../queue/Queue-by-linked-list");

class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new BinaryTreeNode(data);

    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(toNode, node) {
    if (!toNode) throw new Error("insert to null node");

    if (node.data <= toNode.data) {
      if (!toNode.left) {
        toNode.left = node;
      } else {
        this.insertNode(toNode.left, node);
      }
    } else {
      if (!toNode.right) {
        toNode.right = node;
      } else {
        this.insertNode(toNode.right, node);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  getMinNode(node) {
    if (!node.left) return node;

    return this.getMinNode(node.left);
  }

  removeNode(fromNode, data) {
    if (!fromNode) return null;

    if (data < fromNode.data) {
      fromNode.left = this.removeNode(fromNode.left, data);
      return fromNode;
    } else if (data > fromNode.data) {
      fromNode.right = this.removeNode(fromNode.right, data);
      return fromNode;
    } else {
      if (!fromNode.left && !fromNode.right) {
        fromNode = null;
        return null;
      } else if (!fromNode.right) {
        fromNode = fromNode.left;
        return fromNode;
      } else if (!fromNode.left) {
        fromNode = fromNode.right;
        return fromNode;
      } else {
        const rightMin = this.getMinNode(fromNode.right);

        fromNode.data = rightMin.data;
        fromNode.right = this.removeNode(fromNode.right, rightMin.data);

        return fromNode;
      }
    }
  }

  inOrderTraversalRecursive(node) {
    if (node) {
      this.inOrderTraversalRecursive(node.left);
      console.log(node.data);
      this.inOrderTraversalRecursive(node.right);
    }
  }

  preOrderTraversalRecursive(node) {
    if (node) {
      console.log(node.data);
      this.preOrderTraversalRecursive(node.left);
      this.preOrderTraversalRecursive(node.right);
    }
  }

  postOrderTraversalRecursive(node) {
    if (node) {
      this.postOrderTraversalRecursive(node.left);
      this.postOrderTraversalRecursive(node.right);
      console.log(node.data);
    }
  }

  getRootNode() {
    return this.root;
  }

  search(node, data) {
    if (!node) return null;
    if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  breathFirstSearch(node) {
    const queue = new Queue();
    queue.enqueue(node);
    while (!queue.isEmpty()) {
      const tmp = queue.dequeue();

      console.log(tmp.data);

      if (tmp.left) {
        queue.enqueue(tmp.left);
      }
      if (tmp.right) {
        queue.enqueue(tmp.right);
      }
    }
  }

  inOrderTraversalIterative(node) {
    if (!node) return;

    const stack = [];
    let current = node;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();

      console.log(current.data);

      current = current.right;
    }
  }

  preOrderTraversalIterative(node) {
    if (!node) return;

    const stack = [];
    stack.push(node);

    while (stack.length > 0) {
      const top = stack.pop();
      console.log(top.data);

      if (top.right) {
        stack.push(top.right);
      }
      if (top.left) {
        stack.push(top.left);
      }
    }
  }

  postOrderTraversalIterative(node) {
    if (!node) return;

    const stack1 = [];
    const stack2 = [];

    stack1.push(node);

    while (stack1.length > 0) {
      const top = stack1.pop();

      stack2.push(top);

      if (top.left) {
        stack1.push(top.left);
      }
      if (top.right) {
        stack1.push(top.right);
      }
    }

    while (stack2.length > 0) {
      const top = stack2.pop();
      console.log(top.data);
    }
  }
}

const BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

// prints 5 7 9 10 13 15 17 22 25 27
BST.inOrderTraversalRecursive(BST.root);

// Removing node with no children
BST.remove(5);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17

// prints 7 9 10 13 15 17 22 25 27
BST.inOrderTraversalRecursive(BST.root);

// Removing node with one children
BST.remove(7);

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17

// prints 9 10 13 15 17 22 25 27
BST.inOrderTraversalRecursive(BST.root);

BST.remove(15);

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

console.log("recursive inorder traversal");
BST.inOrderTraversalRecursive(BST.root);
console.log("iterative inorder traversal");
BST.inOrderTraversalIterative(BST.root);

console.log("recursive preorder traversal");
BST.preOrderTraversalRecursive(BST.root);
console.log("iterative preorder traversal");
BST.preOrderTraversalIterative(BST.root);

console.log("recursive postorder traversal");
BST.postOrderTraversalRecursive(BST.root);
console.log("iterative postorder traversal");
BST.postOrderTraversalIterative(BST.root);

console.log("BFS");
BST.breathFirstSearch(BST.root);

// Credit: test cases are copied from https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
