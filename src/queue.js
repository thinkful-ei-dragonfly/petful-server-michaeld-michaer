// _Node for que (first in que has next=null => is next out of Queue)
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    // make the NEW _Node the last item on the queue
    this.last = node;
  }
  dequeue() {
    // if Queue is empty => exit function
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    // if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

module.exports = Queue;
