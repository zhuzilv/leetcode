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
 * @return {number[][]}
 */
//  BFS 广度搜 
// 每次只清空队列

 var levelOrder = function (root) {
  // 定义结果集
  let ans = [];
  // 推下头
  root && ans.push([root?.val])
  function recursion(res) {
      if (res.length == 0) return [];
      let item = []
      // recursion
      let times = res.length;
      // 只执行times 次
      while (times--) {
        // 取到左右节点
          let l = res[0]?.left;
          l && res.push(l) && item.push(l?.val);
          let r = res[0]?.right;
          r && res.push(r) && item.push(r?.val);
          res.shift();
      }

      item?.length && ans.push(item);

      recursion(res)
  }
  root && recursion([root])

  return ans;
};