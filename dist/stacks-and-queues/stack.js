var SNode = /** @class */ (function () {
    function SNode(value) {
        this.value = value;
        this.next = null;
    }
    return SNode;
}());
// The better and simplier approach is to use arrays instead of linked list structure
var Stack = /** @class */ (function () {
    function Stack(value) {
        this.top = value ? new SNode(value) : null;
        this.bottom = this.top;
        this.length = 0;
    }
    Stack.prototype.push = function (value) {
        var newNode = new SNode(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        }
        else {
            var temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        this.length++;
    };
    Stack.prototype.pop = function () {
        if (!this.top)
            return null;
        if (this.top === this.bottom) {
            this.bottom = null;
            return;
        }
        var temp = this.top;
        this.top = this.top.next;
        this.length--;
        return temp.value;
    };
    Stack.prototype.peek = function () {
        return this.top;
    };
    Stack.prototype.isEmpty = function () {
        if (!this.length)
            return true;
        return false;
    };
    return Stack;
}());
var myStack = new Stack();
myStack.push(1);
myStack.push("lol");
myStack.pop();
console.log(myStack);
