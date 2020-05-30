class Queue {
  constructor() {
    this.front = null;
    this.end = null;
  }

  enqueue(item) {
    const node = {
      value: item,
      next: null,
    };

    if (!this.front) this.front = node;
    if (this.end) this.end.next = node;
    this.end = node;
  }

  dequeue() {
    if (!this.front) throw new Error("empty queue");

    const front = this.front;
    this.front = front.next;
    if (!this.front) {
      this.end = null;
    }

    return front.value;
  }

  peek() {
    if (!this.front) throw new Error("empty queue");
    return this.front.value;
  }

  isEmpty() {
    return !this.front;
  }

  print() {
    const array = [];
    let node = this.front;

    while (node) {
      array.push(node.value);
      node = node.next;
    }

    return array.join("->");
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

test();

module.exports = Queue;
