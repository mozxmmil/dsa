class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkList {
  constructor() {
    this.head = null;
  }

  // from the here we are going to make the custom methods to manuculate this double link list

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let temp = this.head; // this is going to store the head node
    while (temp.next != null) {
      temp = temp.next;
    }
    // ONCE I REACHED THE THE LAST NODE I WILL PUT THE NEW NODE
    temp.next = newNode;
    newNode.prev = temp;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  insertAtMiddle(data, position) {
    let current = this.head;
    while (current !== null && current.data !== position) {
      current = current.next;
    }
    if (current === null) {
      console.log("Position not found");
      return;
    }
    let newNode = new Node(data);
    newNode.next = current.next;
    if (current.next !== null) {
      current.next.prev = newNode;
    }
    current.next = newNode;
    newNode.prev = current;
  }

  deleteNode(data) {
    // first we need to find the that node is'nt first into the entire node

    let currentNode = this.head;

    if (this.head.data == data) {
      this.head = currentNode.next;
      this.head.prev = null;
      return;
    }

    while (currentNode.next != null) {
      if (currentNode.data == data) {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        return;
      }
      currentNode = currentNode.next;
    }

    if (currentNode.data == data) {
      currentNode.prev.next = null;
      return;
    }
  }
  print() {
    let temp = this.head;
    let result = [];
    while (temp != null) {
      result.push(temp.data);
      temp = temp.next;
    }
    console.log(result.join("->"));
  }
}

const dubbleLinkList = new DoubleLinkList();

dubbleLinkList.insertAtEnd(10);
dubbleLinkList.insertAtEnd(20);
dubbleLinkList.insertAtEnd(30);
dubbleLinkList.insertAtBeginning(1);
dubbleLinkList.insertAtBeginning(5);
dubbleLinkList.insertAtMiddle(15, 30);

dubbleLinkList.deleteNode(5);
dubbleLinkList.print(); // 10->20->30
