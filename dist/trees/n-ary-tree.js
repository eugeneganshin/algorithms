var TreeNode = /** @class */ (function () {
    function TreeNode(info) {
        this.info = info;
        this.children = [];
    }
    TreeNode.prototype.addCildren = function (childNode) {
        childNode.parent = this;
        this.children.push(childNode);
    };
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree() {
    }
    Tree.prototype.addRoot = function (info) {
        this.root = new TreeNode(info);
        this.root.parent = null;
        this.root.children = [];
    };
    return Tree;
}());
