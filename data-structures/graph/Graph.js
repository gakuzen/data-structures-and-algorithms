const Queue = require("../queue/Queue-by-linked-list");
const Stack = require("../stack/Stack-by-linked-list");

class Graph {
  constructor() {
    this.adjList = [];
  }

  addEdge(u, v) {
    if (!this.adjList[u]) {
      this.adjList[u] = [v];
    } else {
      this.adjList[u].push(v);
    }

    if (!this.adjList[v]) {
      this.adjList[v] = [u];
    } else {
      this.adjList[v].push(u);
    }
  }

  print() {
    for (const [vertex, edges] of this.adjList.entries()) {
      if (vertex) {
        let str = `${vertex} ->`;
        for (const edge of edges) {
          str += " " + edge;
        }
        console.log(str);
      }
    }
  }

  breathFirstSearch(fromVertex) {
    const visited = [];

    const queue = new Queue();

    if (this.adjList[fromVertex]) {
      queue.enqueue(fromVertex);

      while (!queue.isEmpty()) {
        const first = queue.dequeue();

        if (!visited[first]) {
          console.log(first);
          visited[first] = true;
        }

        for (const edge of this.adjList[first]) {
          if (!visited[edge]) {
            queue.enqueue(edge);
          }
        }
      }
    }
  }

  depthFirstSearch(fromVertex) {
    const visited = [];

    const stack = new Stack();

    if (this.adjList[fromVertex]) {
      stack.push(fromVertex);

      while (!stack.isEmpty()) {
        const top = stack.pop();

        if (!visited[top]) {
          console.log(top);
          visited[top] = true;
        }

        for (const edge of this.adjList[top]) {
          if (!visited[edge]) {
            stack.push(edge);
          }
        }
      }
    }
  }
}

const test = () => {
  const graph = new Graph();

  graph.addEdge(1, 2);
  graph.addEdge(1, 4);
  graph.addEdge(1, 5);
  graph.addEdge(2, 3);
  graph.addEdge(4, 5);
  graph.addEdge(5, 6);
  graph.addEdge(5, 3);
  graph.addEdge(3, 6);

  graph.print();

  console.log("BFS");
  graph.breathFirstSearch(1);

  console.log("DFS");
  graph.depthFirstSearch(1);
};

test();
