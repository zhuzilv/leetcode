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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  function isEqual(p,q){
      if (p?.val!==q?.val) {
          return false;
      }
       if (!p&&!q) {
          return true;
      }
     return isEqual(p.left,q.right)&&isEqual(p.right,q.left);
  }
  return isEqual(root.left,root.right)
};