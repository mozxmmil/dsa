// const arr = ["mozammil", "mohammad", "sami", "hassan", "ali"];

// console.log(arr);

// class Queue {
//   constructor() {
//     this.items = [];
//   }
//   add(element) {
//     this.items.push(element); // push array ke last me element add krta hai
//   }
//   remove() {
//     this.items.shift(); // shift array ke first element ko remove krta hai
//   }
//   peek() {
//     return this.items.toString(); // peek array ke first element ko return krta hai
//   }
// }
// const queue = new Queue();
// queue.add("mozammil");
// queue.add("mohammad");
// queue.add("sami");
// queue.add("hassan");
// queue.add("ali");
// console.log(queue.peek());

// queue.remove();
// console.log(queue.peek());

// this is going to be the testing section of the queue

class Queue {
  constructor() {
    this.queue = [];
  }

  insert(data) {
    this.queue.push(data);
  }

  remove() {
    return this.queue.shift();
  }

  // from here i'm going to impliement the dubble ended queue

  intertAtFront(data) {
    this.queue.unshift(data);
  }

  removeFromEnd() {
    this.queue.pop();
  }
}

const queue1 = new Queue();

queue1.insert("mozammil");
queue1.insert("mohammad");
queue1.insert("sami");
queue1.insert("hassan");
queue1.insert("ali");
console.log(queue1.queue);

queue1.remove();
console.log(queue1.queue);  
queue1.intertAtFront("new");
console.log(queue1.queue);  
queue1.removeFromEnd();
console.log(queue1.queue);    
