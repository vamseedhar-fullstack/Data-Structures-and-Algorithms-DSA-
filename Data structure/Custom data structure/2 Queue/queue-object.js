class Queue{
  constructor(){
    this.items = {},
    this.start = 0,
    this.rear = 0
  }

  enqueue(e){
      this.items[this.rear] = e;
      this.rear++;
  }

  dequeue(){
    let item = this.items[this.start]
    delete this.items[this.start]
    this.start++
    return item
  }

  isempty(){
    return this.start - this.rear === 0
  }

  peak(){

      return this.items[this.start]

  }

  size(){
    return  this.rear - this.start 
  }

  clear(){
    this.items = {};
    this.start = 0;
    this.rear = 0;
  }

  print(){
    console.log(this.items)
  }
}


const que = new Queue();

que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
que.dequeue();
console.log(que.peak());
console.log(que.size());
que.print();