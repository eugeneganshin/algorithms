class _Node {
  value: number;
  next: _Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  head: _Node;
  tail: _Node | null = null;
  length: number = 0;

  constructor(value: number) {
    this.head = new _Node(value);
    this.tail = this.head;
    this.length++;
  }

  append(value: number): void {
    let node = new _Node(value);
    // here `head.next` is overwritten
    this.tail.next = node;
    // here `tail` break the reference to `head` so `head` is not overwritten
    this.tail = node;
    this.length++;
  }

  prepend(value: number): void {
    let node = new _Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insert(index: number, value: number): void {
    if (index < 0) {
      throw new Error("Index must be positive integer");
    } else if (index === 0) {
      this.prepend(value);
      return;
    } else if (index >= this.length) {
      this.append(value);
      return;
    }

    let i = this.traverse(index - 1);
    let node = new _Node(value);
    let temp = i.next;
    i.next = node;
    node.next = temp;
    this.length++;
  }

  delete() {}

  lookup(index: number): _Node {
    return this.traverse(index)
  }

  print(): void {
    let array = [];
    let current = this.head;
    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }

    console.log(array);
  }

  private traverse(index: number) {
    let current = this.head;
    while (index !== 0) {
      current = current.next;
      index--;
    }

    return current;
  }

  // try to implement appendSorted
}

let list = new SingleLinkedList(1);
list.append(2);
list.prepend(0);
list.insert(1, 3);
list.insert(0, 5);
// console.log(list);

// console.log(list.traverse(2))
list.print();
