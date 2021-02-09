export class LLNode {
  value: number;
  next: null | LLNode;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: LLNode;
  tail: LLNode | null;
  length: number;

  constructor(value: number) {
    this.head = new LLNode(value);
    this.tail = this.head;
    this.length = 0;
  }

  append(value: number): void {
    const newNode = new LLNode(value);

    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;
  }

  prepend(value: number): void {
    const newNode = new LLNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index: number, value: number): void {
    if (index === 0) {
      this.prepend(value);
      this.length++;
      return;
    }

    if (index >= this.length) {
      this.append(value);
      this.length++;
      return;
    }

    const newNode = new LLNode(value);
    const prev = this.traverseToIndex(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
  }

  remove(index: number): void {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
    }

    if (index >= this.length) {
      const prev = this.traverseToIndex(this.length - 1);
      prev.next = null;
      this.length--;
    }

    const prev = this.traverseToIndex(index - 1);
    const deleted = prev.next;
    prev.next = deleted.next;
    this.length--;
  }

  public reverseLinkedList(): void {
    let prev = null;
    let curr = this.head;

    while (curr) {
      const temp = curr.next; // store the next of a head
      curr.next = prev; // reverse the current
      prev = curr; // one step to the right for prev
      curr = temp; // one step to the right for current
    }

    this.head = prev;
  }

  public printValues() {
    console.log(this.values);
  }

  public get values(): number[] {
    const array: number[] = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  private traverseToIndex(index: number): LLNode {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

const list = new LinkedList(0);
list.append(1);
list.append(2);
list.printValues();
list.reverseLinkedList();
list.printValues();
