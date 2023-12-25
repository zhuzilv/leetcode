/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function (nums, k) {
  if (k == 1) return nums;
  // 递减队列
  let deStack = [];
  // 结果数组
  let ans = [];
  //从 -k 到 结尾
  for (let i = 0; i < nums.length; i++) {
    // 此处要有等于，等于数时已经删掉数
     while(deStack.length&&nums[i]>nums[deStack[deStack.length-1]]){
         deStack.pop();
     }
      deStack.push(i);
      // 下标
      if(i-k>=deStack[0]){
          deStack.shift();
      }
     i>=k-1 && ans.push(nums[deStack[0]])
  //    console.log(deStack,i,'---')
  }
  return ans;
};



//老版本 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function (nums, k) {
  if (k == 1) return nums;
  // 递减队列
  let deStack = [];
  // 结果数组
  let ans = [];
  //从 -k 到 结尾
  for (let i = 0; i < nums.length; i++) {
     while(deStack.length&&nums[i]>deStack[deStack.length-1]){
         deStack.pop();
     }
      deStack.push(nums[i]);
      if(nums[i-k]===deStack[0]){
          deStack.shift();
      }
     i>=k-1 && ans.push(deStack[0])
  }
  return ans;
};