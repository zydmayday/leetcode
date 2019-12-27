/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return root;
    if (root.val === key) {
        if (isLeaf(root)) return null;
        return remove(root);
    }
    deleteInside(root, key);
    return root;
};

const deleteInside = function (root, key) {
    if (!root) return;
    if (key < root.val && root.left) {
        if (root.left.val === key) {
            root.left = remove(root.left);
        } else {
            deleteInside(root.left, key);
        }
    } else if (root.right) {
        if (root.right.val === key) {
            root.right = remove(root.right);
        } else {
            deleteInside(root.right, key);
        }
    }
};

const remove = function (root) {
    if (root.right) {
        let minRight = minNode(root.right);
        minRight.left = root.left;
        return root.right;
    } else {
        return root.left;
    }
}

const minNode = function(root) {
    if (!root) return null;
    while (!isLeaf(root) && root.left) {
        root = root.left;
    }
    return root;
}

const isLeaf = function(root) {
    return !root.left && !root.right;
}