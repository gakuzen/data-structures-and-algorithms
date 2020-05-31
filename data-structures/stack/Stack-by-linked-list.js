class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    const node = {
      value: item,
      next: null,
    };

    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) throw new Error("empty stack");

    const top = this.top;
    this.top = top.next;

    return top.value;
  }

  peek() {
    if (!this.top) throw new Error("empty stack");
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }

  print() {
    let array = [];

    let node = this.top;
    while (node) {
      array.push(node.value);
      node = node.next;
    }

    return array.join("->");
  }
}

const test = () => {
  let s = new Stack();

  s.push(1);
  s.push(2);
  s.push(3);
  s.pop();

  console.log(s.peek());
  console.log(s.isEmpty());
  console.log(s.print());
};

// test();

module.exports = Stack;
