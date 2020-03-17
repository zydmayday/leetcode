/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if (!root) return;
    if (d < 2) {
        const node = TreeNode(v);
        node.left = root;
        return node;
    }
    if (d == 2) {
        const nodeLeft = new TreeNode(v);
        const nodeRight = new TreeNode(v);
        nodeLeft.left = root.left;
        nodeRight.right = root.right;
        root.left = nodeLeft;
        root.right = nodeRight;
        return root;
    }
    root.left = addOneRow(root.left, v, d - 1);
    root.right = addOneRow(root.right, v, d - 1);
    return root;
};