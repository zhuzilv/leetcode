
var inorderTraversal = function(root) {
  const res = [];
  const stk = [];
  while (root || stk.length) {
      // 遍历推入所有左子树
      while (root) {
          // 存入节点
          stk.push(root);
          root = root.left;
      }
      // 退出栈内元素 赋值指针root
      root = stk.pop();
      // 推入结果数组
      res.push(root.val);
      // 找右子树
      root = root.right;
  }
  return res;
};
