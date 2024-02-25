/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var flipEquiv = function (root1, root2) {
  // 都不存在为真
  if (!root1 && !root2) return true;
  // root1 root2 都不存在/有一个不存在
  if (root1?.val !== root2?.val) return false;
  // 左左 / 左右
  let l = flipEquiv(root1.left, root2.left) ||flipEquiv(root1.left, root2.right) 
  // 右右 / 右左
  let r = flipEquiv(root1.right, root2.right)||flipEquiv(root1.right, root2.left) 
  // true && true 方
  return l && r;
};