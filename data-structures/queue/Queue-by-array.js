class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  isEmpty() {
    return !this.data;
  }

  print() {
    return this.data;
  }
}

const test = () => {
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);

  console.log(queue.dequeue());
  console.log(queue.peek());
  console.log(queue.print());
};

// test();
