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
 * @return {TreeNode}
 */
 var bstToGst = function(root) {
  let num = 0;
  function recur(node){
      if(node!==null){
          recur(node.right);
          num+=node.val;
          node.val=num;
          recur(node.left);
      }
  }
  recur(root)
  return root;
};
