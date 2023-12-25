/**
 * @param {number[]} cost
 * @return {number}
 */
 // 前置需要 fibonacci ，爬楼梯 等dp基础
 var minCostClimbingStairs = function(cost) {
  let n = cost.length;
  // 一个n+1长度的数组
  let dp =new Array(n+1)
  // 初始化dp数组 为 两个 0
  // 因为题意是跳上去才消耗体力
   dp[0]=dp[1]=0
   // 从2到n 构建dp数组，最后一项为调到n时最小体力消耗
   for(let i=2;i<=n;i++){
       dp[i]=Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
   }
   return dp[n]
};