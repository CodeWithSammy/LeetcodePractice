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
    const que = [root];
    let sum =0;
    while(que.length >0){
        const node =que.shift();
        if(node.left){
            if(!node.left.left && !node.left.right){
                sum+= node.left.val;
            }
            else{
                que.push(node.left)
            }
        }
        if(node.right){
            que.push(node.right)
        }
    }
    return sum
};