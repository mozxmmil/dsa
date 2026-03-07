// here we have to make the binary tree using the linklist so let we start it

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// now i have to make the function which can print the all element of the tree

function preOrder(node) {
  if (node === null) {
    return;
  }

  console.log(node.data);
  preOrder(node.left);
  preOrder(node.right);
}

function inOrder(node) {
  // this is going to print the left element first then the root and then the right element

  if (node === null) return;
  inOrder(node.left);
  console.log(node.data);
  inOrder(node.right);
}

function postOrder(node) {
  // this is going to print the left element first then the right element and then the root
  if (node === null) return;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.data);
}

// this is the node and then we have to make the tree so this is very eassy
``;
const rool = new Node(10);
rool.left = new Node(20);
rool.right = new Node(30);

rool.left.left = new Node(40);
rool.left.right = new Node(50);

rool.right.left = new Node(60);
rool.right.right = new Node(70);

// console.log(rool)
preOrder(rool);

inOrder(rool);

console.log("In-order traversal:");

postOrder(rool);