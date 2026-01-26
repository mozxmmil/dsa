class Node {
  constructor(data, next = null) {
    ((this.data = data), (this.next = next));
  }
}
class SingleLinkList {
  constructor() {
    this.head = null;
  }

  // here we are going to make the add data to the linkList
  addData(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  print() {
    let current = this.head;
    let print = [];
    while (current !== null) {
      print.push(current.data);
      current = current.next;
    }
    console.log(print.join("-->"));
  }

  addAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}

const link = new SingleLinkList();

// console.log(link, "link");
link.addData(4);
link.addData(5);
link.addAtBeginning(1);

link.print();
