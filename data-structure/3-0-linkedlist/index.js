// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prevNode = this.head;
    let curNode = prevNode.next;
    while (curNode.next) {
      prevNode = curNode;
      curNode = curNode.next;
    }
    prevNode.next = null;
  }
  insertLast(data) {
    const node = new Node(data);
    const last = this.getLast();
    if (last) {
      last.next = node;
    } else {
      this.head = node;
    }
  }
  getAt(index) {
    if (!this.head) return null;

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prev = this.getAt(index - 1) || this.getLast();

    const node = new Node(data, prev.next);
    prev.next = node;
  }
}

module.exports = { Node, LinkedList };
