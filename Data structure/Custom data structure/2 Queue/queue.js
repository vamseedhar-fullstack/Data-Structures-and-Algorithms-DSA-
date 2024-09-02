class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(e) {
    this.items.push(e);
  }

  dequeue() {
    this.items.shift();
  }

  isempty() {
   return  this.items.length === 0
  }

  peek() {
    if (!this.isempty()) {
      return this.items[0];
    }
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();
console.log(queue.isempty())
console.log(queue.size())
console.log(queue.peek())

queue.print();
