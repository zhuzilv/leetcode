// 二分查找问题
// 死循环/边界
// [] / [)
// <= m-1 / < m 

// 以下为[) 的例子
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
  let [i,j] = [0,nums.length]
  while(i<j){
      let m = i+((j-i)>>1)
      console.log(i,j,m,'m')
      if(nums[m]>nums[m+1]&&nums[m]>nums[m-1]){
          console.log('run')
          return m;
      }else if(nums[m]<nums[m+1]){
          console.log('run1')
          i=m+1
      }else{
          console.log('run2')
          j=m;
      }
  }
  return i;
};

// 以下为[] 的例子

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
  let [i,j] = [0,nums.length-1]
  while(i<=j){
      let m = i+((j-i)>>1)
      if(nums[m]>nums[m+1]&&nums[m]>nums[m-1]){
          console.log('run')
          return m;
      }else if(nums[m]<nums[m+1]){
          console.log('run1')
          i=m+1
      }else{
          console.log('run2')
          j=m-1;
      }
  }
  return i;
};