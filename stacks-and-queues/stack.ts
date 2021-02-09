class SNode {
  value: any;
  next: SNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
// The better and simplier approach is to use arrays instead of linked list structure
class Stack {
  top: SNode | null;
  bottom: SNode | null;
  length: number;
  constructor(value?: number) {
    this.top = value ? new SNode(value) : null;
    this.bottom = this.top;
    this.length = 0;
  }

  push(value: any): void {
    const newNode = new SNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
  }

  pop(): any {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
      return;
    }

    const temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp.value;
  }

  peek() {
    return this.top;
  }

  isEmpty(): boolean {
    if (!this.length) return true;
    return false;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push("lol");
myStack.pop();
console.log(myStack);
