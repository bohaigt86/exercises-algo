// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max && node.data > max) {
    return false;
  }

  if (min && node.data < min) {
    return false;
  }
  // One way of doing it
  // if (node.left && !validate(node.left, min, node.data)) {
  //   return false;
  // }

  // if (node.right && !validate(node.right, node.data, max)) {
  //   return false;
  // }

  // Another way of doing it
  if (node.left) {
    return validate(node.left, min, node.data);
  }

  if (node.right) {
    return validate(node.right, node.data, max);
  }

  return true;
}

module.exports = validate;
