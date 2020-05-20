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

  inOrderTraversal(node) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.data);
      this.inOrderTraversal(node.right);
    }
  }

  preOrderTraversal(node) {
    if (node) {
      console.log(node.data);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  postOrderTraversal(node) {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
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
BST.inOrderTraversal(BST.root);

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
BST.inOrderTraversal(BST.root);

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
BST.inOrderTraversal(BST.root);

BST.remove(15);

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

console.log("inorder traversal");
BST.inOrderTraversal(BST.root);
console.log("preorder traversal");
BST.preOrderTraversal(BST.root);
console.log("postorder traversal");
BST.postOrderTraversal(BST.root);

// Credit: test cases are copied from https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
