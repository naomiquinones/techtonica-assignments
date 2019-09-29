class Node {
  constructor(data) {
    this.left = null 
    this.right = null
    this.value = value
  }
}

class BST {
  constructor() {
    var node = new Node(data);
    this.root = node;
  }
}

const inOrderTraversal = node => {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node);
    inOrderTraversal(node.right);
  }
}
