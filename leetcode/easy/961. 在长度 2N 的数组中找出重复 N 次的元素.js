/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
  // set 结构 找偶数
  let set = new Set();
  for(const item of nums){
      if(set.has(item)){
          return item
      }else {
          set.add(item)
      }
  }
};