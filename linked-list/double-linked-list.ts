interface ILinkedList {
  head: LNode;
  tail: LNode;
  length: number;
}

class LNode {
  value: number;
  next: LNode | null;
  prev: LNode | null;
  constructor(value: number, node?: LNode) {
    this.value = value;
    this.next = null;
    this.prev = node || null;
  }
}

class DoubleLinkedList implements ILinkedList {
  value: number;
  length: number;
  head: LNode;
  tail: LNode;
  constructor(value: number) {
    this.head = new LNode(value);
    this.tail = this.head;
    this.length = 0;
  }

  append(value: number): void {
    const newNode = new LNode(value, this.tail);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value: number): void {
    const newNode = new LNode(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index: number, value: number): void {
    if (index >= this.length) {
      this.append(value);
      this.length++;
      return;
    }

    if (index === 0) {
      this.prepend(value);
      this.length++;
      return;
    }

    const newNode = new LNode(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;

    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return;
  }

  public remove(index: number): void {
    let prev: LNode;

    if (index === 0) {
      this.head.prev = null;
      this.head = this.head.next;
      this.length--;
      return;
    }

    if (index >= this.length) {
      prev = this.traverseToIndex(this.length - 1);
      prev.next = null;
      this.length--;
      return;
    }

    prev = this.traverseToIndex(index - 1);
    const deletedNode = prev.next;
    deletedNode.next.prev = prev.next;
    prev.next = deletedNode.next;
    this.length--;
    return;
  }

  public getList(): number[] {
    const array: number[] = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  public valueAt(index: number): number {
    return this.traverseToIndex(index).value;
  }

  public printList(): void {
    console.log(this.getList());
  }

  private traverseToIndex(index: number): LNode {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

const myList = new DoubleLinkedList(10);
