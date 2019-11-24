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
var isUnivalTree = function(root) {
    if (!root) return true;
    const queue = [];
    queue.push(root);
    const val = root.val;
    while (queue.length) {
        const r = queue.pop();
        if (val !== r.val) return false;
        if (r.left) queue.push(r.left);
        if (r.right) queue.push(r.right);
    }
    return true;
};