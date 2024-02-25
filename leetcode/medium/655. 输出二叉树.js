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
 * @return {string[][]}
 */
 var printTree = function(root) {
  // 求height 边数量
  function heightDfs(cur){
      if(!cur) return 0;
     let l =  heightDfs(cur.left);
     let r =  heightDfs(cur.right);
      return Math.max(l,r)+1;
  }
  let h = heightDfs(root);
  // console.log(h,'h')
  // 构造二维数组‘’
  let m = h;
  let n = Math.pow(2,h)-1;
  let arr=[];
  // console.log(m,n,'m-n')
  for(let i = 0;i<m;i++){
      arr[i]=new Array(n).fill('')
  }
  // 遍历 赋值
  function localDfs(cur,l,r){
      if(!cur)return null;
      arr[l][r] = cur?.val+'';
      localDfs(cur.left,l+1,r-Math.pow(2,m-1-1-l));
      localDfs(cur.right,l+1,r+Math.pow(2,m-1-1-l));
  }
  localDfs(root,0,(n-1)/2);
  return arr;
};