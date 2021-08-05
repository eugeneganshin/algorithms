var _Node = /** @class */ (function () {
    function _Node(value) {
        this.value = value;
        this.next = null;
    }
    return _Node;
}());
var SingleLinkedList = /** @class */ (function () {
    function SingleLinkedList(value) {
        this.tail = null;
        this.length = 0;
        this.head = new _Node(value);
        this.tail = this.head;
        this.length++;
    }
    SingleLinkedList.prototype.append = function (value) {
        var node = new _Node(value);
        // here `head.next` is overwritten
        this.tail.next = node;
        // here `tail` break the reference to `head` so `head` is not overwritten
        this.tail = node;
        this.length++;
    };
    SingleLinkedList.prototype.prepend = function (value) {
        var node = new _Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    };
    SingleLinkedList.prototype.insert = function (index, value) {
        if (index < 0) {
            throw new Error("Index must be positive integer");
        }
        else if (index === 0) {
            this.prepend(value);
            return;
        }
        else if (index >= this.length) {
            this.append(value);
            return;
        }
        var i = this.traverse(index - 1);
        var node = new _Node(value);
        var temp = i.next;
        i.next = node;
        node.next = temp;
        this.length++;
    };
    SingleLinkedList.prototype.delete = function () { };
    SingleLinkedList.prototype.lookup = function () { };
    SingleLinkedList.prototype.traverse = function (index) {
        var current = this.head;
        while (index !== 0) {
            current = current.next;
            index--;
        }
        return current;
    };
    SingleLinkedList.prototype.print = function () {
        var array = [];
        var current = this.head;
        while (current !== null) {
            array.push(current.value);
            current = current.next;
        }
        console.log(array);
    };
    return SingleLinkedList;
}());
var list = new SingleLinkedList(1);
list.append(2);
list.prepend(0);
list.insert(1, 3);
list.insert(0, 5);
// console.log(list);
// console.log(list.traverse(2))
list.print();
