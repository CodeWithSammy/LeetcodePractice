/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
    // If the depth is 1, we need to add a new row at the root level
    if (depth == 1) return new TreeNode(val, root);

    // Define a helper function to perform depth-first traversal and add new nodes at the specified depth
    var dfs = function (root, depth) {
        // If we reach the target depth or encounter a null node, stop traversing
        if (depth == 0 || root == null) return;

        // If we reach the target depth, add new nodes with the specified value
        if (depth == 1) {
            root.left = new TreeNode(val, root.left) // Add a new left child with the specified value
            root.right = new TreeNode(val, null, root.right) // Add a new right child with the specified value
        }
        
        // Continue traversing the left and right subtrees with decremented depth
        dfs(root.left, depth - 1)
        dfs(root.right, depth - 1)

        // Return the modified root node
        return root
    }

    // Start the depth-first traversal from the root with the target depth decremented by 1
    return dfs(root, depth - 1);
};
