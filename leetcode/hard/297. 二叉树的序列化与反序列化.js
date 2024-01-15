/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 function dfs(root, str) {
  if (!root) {
      return str += '#,'
  }
  str += root.val.toString() + ','
  console.log(root, 'root')
  str = dfs(root.left, str);
  str = dfs(root.right, str);
  return str;
}
// 序列化
var serialize = function (root) {
  // 1,2,#,#,3,4,5
  return dfs(root, '')
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
// 反序列
const rdeserialize = (dataList) => {
  if (dataList[0] === "#") {
      dataList.shift();
      return null;
  }

  const root = new TreeNode(parseInt(dataList[0]));
  dataList.shift();
  root.left = rdeserialize(dataList);
  root.right = rdeserialize(dataList);

  return root;
}

var deserialize = function (data) {
  // 1,2,#,#,3,4,#,#,5,#,#
   const dataArray = data.split(",");
  return rdeserialize(dataArray);
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/