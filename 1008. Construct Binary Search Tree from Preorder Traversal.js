/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    const root = new TreeNode(preorder[0])
    for (let i = 1; i < preorder.length; i++) {
        insert(root, preorder[i]);
    }
    return root;
};

var insert = function(root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    if (val < root.val){
        root.left = insert(root.left, val);
    } else {
        root.right = insert(root.right, val);
    }
    return root;
}