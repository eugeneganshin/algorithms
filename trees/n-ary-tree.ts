class TreeNode {
  parent: TreeNode;
  children: TreeNode[];
  info: any;

  constructor(info) {
    this.info = info;
    this.children = [];
  }

  addCildren(childNode: TreeNode) {
    childNode.parent = this;
    this.children.push(childNode);
  }
}

class Tree {
  root: TreeNode | null

  addRoot(info :any ) {
    this.root = new TreeNode(info)
    this.root.parent = null
    this.root.children = []
  }

  
}