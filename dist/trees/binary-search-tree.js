var BNode = /** @class */ (function () {
    function BNode(value) {
        this.value = value ? value : null;
        this.left = null;
        this.right = null;
    }
    return BNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(value) {
        this.root = value ? new BNode(value) : null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new BNode(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            var currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return;
                    }
                    else {
                        currentNode = currentNode.left;
                    }
                }
                else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return;
                    }
                    else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    };
    BinarySearchTree.prototype.lookup = function (value) {
        if (!this.root)
            return null;
        var currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else if (value === currentNode.value) {
                return currentNode;
            }
            else {
                return null;
            }
        }
    };
    BinarySearchTree.prototype.remove = function (value) {
        if (!this.root) {
            return false;
        }
        var currentNode = this.root;
        var parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else if (currentNode.value === value) {
                //We have a match, get to work!
                //Option 1: No right child:
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    }
                    else {
                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                            //if parent < current value, make left child a right child of parent
                        }
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                    //Option 2: Right child which doesnt have a left child
                }
                else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    }
                    else {
                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                            //if parent < current, make right child a right child of the parent
                        }
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                    //Option 3: Right child that has a left child
                }
                else {
                    //find the Right child's left most child
                    var leftmost = currentNode.right.left;
                    var leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;
                    if (parentNode === null) {
                        this.root = leftmost;
                    }
                    else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        }
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    };
    BinarySearchTree.prototype.traverse = function (node) {
        var tree = { value: node.value, left: node.left, right: node.right };
        tree.left = node.left === null ? null : this.traverse(node.left);
        tree.right = node.right === null ? null : this.traverse(node.right);
        return tree;
    };
    return BinarySearchTree;
}());
var tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.remove(4));
console.log(tree.traverse(tree.root));
