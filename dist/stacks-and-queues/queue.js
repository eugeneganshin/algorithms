var QNode = /** @class */ (function () {
    function QNode(value) {
        this.value = value;
        this.next = null;
    }
    return QNode;
}());
// The better and simplier approach is to use arrays instead of linked list structure
var Queue = /** @class */ (function () {
    function Queue(value) {
        this.first = value ? new QNode(value) : null;
        this.last = this.first;
        this.length = 0;
    }
    Queue.prototype.enqueue = function (value) {
        var newNode = new QNode(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = this.last.next;
        }
        this.length++;
    };
    Queue.prototype.dequeue = function () {
        if (this.length === 0)
            return null;
        if (this.first === this.last) {
            var val_1 = this.last.value;
            this.last = null;
            this.length--;
            return val_1;
        }
        var val = this.first.value;
        this.first = this.first.next;
        this.length--;
        return val;
    };
    Queue.prototype.peek = function () {
        return this.first.value;
    };
    return Queue;
}());
var myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue());
// console.log(myQueue);
