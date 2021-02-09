class QNode {
  value: any;
  next: QNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
// The better and simplier approach is to use arrays instead of linked list structure
class Queue {
  first: QNode | null;
  last: QNode | null;
  length: number;
  constructor(value?: number) {
    this.first = value ? new QNode(value) : null;
    this.last = this.first;
    this.length = 0;
  }

  enqueue(value: any): void {
    const newNode = new QNode(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    this.length++;
  }

  dequeue(): any | null {
    if (this.length === 0) return null;
    if (this.first === this.last) {
      const val = this.last.value;
      this.last = null;
      this.length--;
      return val;
    }
    const val = this.first.value;
    this.first = this.first.next;
    this.length--;
    return val;
  }

  peek(): any {
    return this.first.value;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue());
// console.log(myQueue);
