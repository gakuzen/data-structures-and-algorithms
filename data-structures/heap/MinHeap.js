class MinHeap {
  constructor() {
    this.data = [];
  }

  // O(1)
  getMin() {
    if (this.data.length === 0) return null;
    return this.data[0];
  }

  // O(log n)
  insert(value) {
    this.data.push(value);
    this.heapifyLastElement();
  }

  // O(1)
  getParentIndex(index) {
    if (index === 0) return null;

    const isLastIndexEven = index % 2 === 0;
    const parentIndex = (isLastIndexEven ? index - 2 : index - 1) / 2;
    return parentIndex;
  }

  // O(log n)
  heapifyLastElement() {
    const lastIndex = this.data.length - 1;
    const isLastIndexEven = lastIndex % 2 === 0;
    const parentIndex = (isLastIndexEven ? lastIndex - 2 : lastIndex - 1) / 2;

    let currentIndex = lastIndex;
    let currentParentIndex = parentIndex;

    while (
      currentIndex !== null &&
      currentParentIndex !== null &&
      currentIndex >= 0 &&
      currentParentIndex >= 0 &&
      currentIndex !== currentParentIndex &&
      this.data[currentIndex] < this.data[currentParentIndex]
    ) {
      [this.data[currentIndex], this.data[currentParentIndex]] = [
        this.data[currentParentIndex],
        this.data[currentIndex],
      ];

      currentIndex = currentParentIndex;
      currentParentIndex = this.getParentIndex(currentIndex);
    }
  }

  // O(log n)
  removeMin() {
    if (this.data.length === 0) return null;
    if (this.data.length === 1) return this.data.pop();

    const min = this.data[0];
    this.data[0] = this.data.pop();

    this.heapifyFirstElement();

    return min;
  }

  // O(log n)
  heapifyFirstElement() {
    const leftChildIndex = 1;
    const rightChildIndex = 2;

    let currentIndex = 0;
    let currentLeftChildIndex = leftChildIndex;
    let currentRightChildIndex = rightChildIndex;

    while (
      (currentLeftChildIndex <= this.data.length - 1 &&
        this.data[currentIndex] > this.data[currentLeftChildIndex]) ||
      (currentRightChildIndex <= this.data.length - 1 &&
        this.data[currentIndex] > this.data[currentRightChildIndex])
    ) {
      let leftIsSmaller;
      if (currentLeftChildIndex > this.data.length - 1) {
        leftIsSmaller = false;
      } else if (currentRightChildIndex > this.data.length - 1) {
        leftIsSmaller = true;
      } else {
        leftIsSmaller =
          this.data[currentLeftChildIndex] < this.data[currentRightChildIndex]
            ? true
            : false;
      }

      if (leftIsSmaller) {
        [this.data[currentLeftChildIndex], this.data[currentIndex]] = [
          this.data[currentIndex],
          this.data[currentLeftChildIndex],
        ];

        currentIndex = currentLeftChildIndex;
      } else {
        [this.data[currentRightChildIndex], this.data[currentIndex]] = [
          this.data[currentIndex],
          this.data[currentRightChildIndex],
        ];

        currentIndex = currentRightChildIndex;
      }

      currentLeftChildIndex = 2 * currentIndex + 1;
      currentRightChildIndex = 2 * currentIndex + 2;
    }
  }

  // O(n)
  traversal() {
    console.log(this.data.join(" "));
  }
}

const minHeap = new MinHeap();

minHeap.insert(4);
minHeap.insert(5);
minHeap.insert(6);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(9);
minHeap.insert(8);

minHeap.traversal();

minHeap.removeMin();

minHeap.traversal();
