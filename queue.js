const arr = ["mozammil", "mohammad", "sami", "hassan", "ali"];

console.log(arr);

class Queue {
  constructor() {
    this.items = [];
  }
  add(element) {
    this.items.push(element); // push array ke last me element add krta hai
  }
  remove() {
    this.items.shift(); // shift array ke first element ko remove krta hai
  }
  peek() {
    return this.items.toString(); // peek array ke first element ko return krta hai
  }
}
const queue = new Queue();
queue.add("mozammil");
queue.add("mohammad");
queue.add("sami");
queue.add("hassan");
queue.add("ali");
console.log(queue.peek());

queue.remove();
console.log(queue.peek());