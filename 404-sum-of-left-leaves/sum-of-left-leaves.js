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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    // Initialize a queue with the root node
    const que = [root];
    // Initialize the sum variable to store the sum of left leaves
    let sum = 0;
    
    // Loop until the queue is empty
    while (que.length > 0) {
        // Dequeue the first node from the queue
        const node = que.shift();
        
        // Check if the left child of the current node exists
        if (node.left) {
            // If the left child is a leaf node (both left and right children are null),
            // add its value to the sum
            if (!node.left.left && !node.left.right) {
                sum += node.left.val;
            }
            // If the left child is not a leaf node, enqueue it for further processing
            else {
                que.push(node.left);
            }
        }
        
        // If the right child of the current node exists, enqueue it for further processing
        if (node.right) {
            que.push(node.right);
        }
    }
    
    // Return the sum of left leaves
    return sum;
};
