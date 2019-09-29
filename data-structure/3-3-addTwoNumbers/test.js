const addTwoNumbers = require('./index');
const Node = require('./Node');

test('function addTwoNumbers is defined', () => {
  expect(typeof addTwoNumbers).toEqual('function');
});

test('', () => {
  const l1 = new Node(2);
  l1.next = new Node(4);
  l1.next.next = new Node(3);

  const l2 = new Node(5);
  l2.next = new Node(6);
  l2.next.next = new Node(4);

  const l3 = new Node(7);
  l3.next = new Node(0);
  l3.next.next = new Node(8);

  const result = addTwoNumbers(l1, l2);

  expect(result).toEqual(l3);
});
