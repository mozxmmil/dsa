class Stack {
  constructor() {
    this.stack = [];
  }
  Length() {  // this is going to return the length of the stack 
    return this.stack.length;
  }

  push(data) {  // ye array me element me push krne wala hai since js me push method array ke start me push krta hai 
    this.stack.push(data);
  }
  pop() {

    if (this.stack.length === 0) return "Stack is empty";
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack[this.stack.length - 1]];
  }
  print() {
    return this.stack.toString();
  }
}


const stack  = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.print());

stack.pop()

console.log(stack.print())