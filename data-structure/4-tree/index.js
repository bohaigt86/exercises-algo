// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children = this.children.filter(child => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    if (!this.root) return;
    let arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      if (node.children) {
        arr.push(...node.children);
      }
      fn(node);
    }
  }
  traverseDF(fn) {
    if (!this.root) return;
    let arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      if (node.children) {
        arr = [...node.children, ...arr];
      }
      fn(node);
    }
  }
}

// const tree = new Tree();
// tree.root = new Node(10);
// tree.root.add(4);
// tree.root.add(26);

// tree.traverseBF(node => console.log('this:', node.data));
module.exports = { Tree, Node };
