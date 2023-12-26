/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  let n = nums.length;

  let dp = new Array(n);
  dp[0]=nums[0];
  dp[1]=Math.max(nums[0],nums[1]);
  // dp[i] = 前一个dp ， 前二个+ 自身 取最大
  // dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
  for(let i = 2;i<n;i++){
      dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
  }
  return dp[n-1]
};