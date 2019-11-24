/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  var list = [];

  function inOrder(root) {
    if (!root) return;
    inOrder(root.left);
    list.push(root.val);
    inOrder(root.right);
  }

  inOrder(root);

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] <= list[i]) return false;
  }
  return true;
};

var isValidBST = function (root) {
  return _isValidBST(root);
}

var _isValidBST = function (root, min=Number.MIN_SAFE_INTEGER, max=Number.MAX_SAFE_INTEGER) {
  if (!root) return true;
  if (root.val >= max || root.val <= min) {
    return false;
  }
  return _isValidBST(root.left, min, root.val) && _isValidBST(root.right, root.val, max);
}
