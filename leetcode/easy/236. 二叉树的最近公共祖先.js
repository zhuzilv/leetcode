 // 个人解法
 // 自下而上
 // 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 定义返回值
    let value;
    //递归返回子节点 是否查到状态

    function dfs(cur){
        // 标准后序遍历行为
        if(!cur)return false;
        let l = dfs(cur.left);
        let r = dfs(cur.right);
        // 如果当前节点是查找对象，返回true/false
        let item =[p.val,q.val].includes(cur.val);
        // 如果左子和右子是查找则 赋值value
        if(l&&r){
            value = cur;
        // 如果左子和右子中有一个与当前节点构成 赋值value
        }else if((l||r)&&item){
            value = cur;
        }
        // 返回值控制部分 ，如果是查找的值则返回true，左右合并节点
        // 如果当前点是查找的值返回true
        if([p.val,q.val].includes(cur.val)){
            return true;
        }
        // 否则返回左右节点 逻辑或
        return l||r
    }
    dfs(root)
    return value;
};

// 0x3f 的
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q)
      return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right)
      return root;
  return left ?? right;
};
