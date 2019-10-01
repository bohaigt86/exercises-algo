// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const Node = require('./Node.js');
// function Node(value) {
//   this.value = value;
//   this.next = null;
// }

const addTwoNumbers = (l1, l2) => {
  let anchor = new Node();
  let cur = anchor;

  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let val1 = l1 !== null ? l1.value : 0;
    let val2 = l2 !== null ? l2.value : 0;
    let sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    sum = sum % 10;
    cur.next = new Node(sum);

    cur = cur.next;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  if (carry === 1) {
    cur.next = new Node(1);
  }
  return anchor.next;
};

module.exports = addTwoNumbers;
