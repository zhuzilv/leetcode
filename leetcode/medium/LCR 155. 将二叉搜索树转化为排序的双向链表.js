/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */


 var treeToDoublyList = function (root) {
  if (!root) {
      return null;
  }
  // 取到头
  let head = null;
  // 定义前置节点指针
  let pre = null

  function dfs(cur) {
      if (!cur) {
          return null;
      }
      dfs(cur.left);
      // 中序
      if(!head){
          // 赋予头节点
          head = new Node(cur.val);
          // pre初始化
          pre = head;
      }else{
          let node = new Node(cur.val)
          // 双向链表 绑定
          pre.right=node;
          node.left=pre;
          // pre移动
          pre=node;
      }
      dfs(cur.right);

  }

  dfs(root);
  //pre 走到尾
  // 首位连环
  head.left = pre;
  pre.right = head;
  // 返回头
  return head;
};