class Circular {
  constructor(size) {
    this.queue = new Array(size);

    this.front = -1;
    this.reare = -1;
    this.size = size;
  }

  insert(data) {
    // first we have to check kya queue full hai

    if ((this.reare + 1) % this.size === this.front) {
      console.log("Queue is full ");
    } else if ((this.front = -1)) {
      this.front = this.reare = -1;
      this.insert[this.reare] = data;
    } else {
      this.reare = (this.reare + 1) % this.size;
      this.insert[this.reare] = data;
    }
  }

  delete() {
    // chcking kya khali to nhi hia

    if ((this.front = -1)) console.log("this is empty ");
    else if (this.front == this.reare) {
      this.front = this.reare = -1;
      this.front  = (this.front + 1)% this.size
    }
    else {
      this.front = (this.front+1) % this.size
      
    }
  }
}
