// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let result = [0];
  const temp = [root, 'tk'];

  while (temp.length > 1) {
    const node = temp.shift();
    if (node === 'tk') {
      temp.push(node);
      result.push(0);
    } else {
      temp.push(...node.children);
      result[result.length - 1]++;
    }
  }
  return result;
}

module.exports = levelWidth;
