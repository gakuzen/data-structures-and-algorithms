class Stack {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
  }

  pop() {
    if (this.data.length === 0) throw new Error("empty stack");
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  print() {
    return this.data.reverse().join(" ");
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
