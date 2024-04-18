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
 * @return {string}
 */
 var smallestFromLeaf = function(root) {
    let smallest = '{'; // Initialize smallest string as the largest character
    
    // Define the DFS function
    var dfs = function(node, current) {
        if (!node) return;
        
        // Update the current string by appending the character represented by the node's value
        current = String.fromCharCode(node.val + 97) + current;
        
        // If the node is a leaf, update the smallest string if the current string is smaller
        if (!node.left && !node.right) {
            if (current < smallest) {
                smallest = current;
            }
            return;
        }
        
        // Recursively call dfs for the left and right children
        dfs(node.left, current);
        dfs(node.right, current);
    };
    
    // Start the DFS traversal from the root with an empty current string
    dfs(root, '');
    
    return smallest;
};
