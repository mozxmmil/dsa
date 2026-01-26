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
dubbleLinkList.insertAtBeginning(1)
dubbleLinkList.insertAtBeginning(5)
dubbleLinkList.print(); // 10->20->30
