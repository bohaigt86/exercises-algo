const reverseList = require('./index');
const Node = require('./node');

test('function reverseList is defined', () => {
  expect(typeof reverseList).toEqual('function');
});

test('function reverseList reverses 1=>2=>3 to 3=>2=>1', () => {
  const input = new Node(1);
  input.next = new Node(2);
  input.next.next = new Node(3);
  const expected = new Node(3);
  expected.next = new Node(2);
  expected.next.next = new Node(1);

  expect(reverseList(input)).toEqual(expected);
});
