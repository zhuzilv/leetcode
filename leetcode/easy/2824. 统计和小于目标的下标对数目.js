

/** 蠢模拟
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var countPairs = function(nums, target) {
  let count = 0;
for(let i = 0 ;i<nums.length;i++){
  for(let j = i+1 ;j<nums.length;j++){
      if(i>=0&&j>i&&nums[i]+nums[j]<target){
          count++;
      }
  }
}
  return count;
};
/** sort+二分
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // nums = [-1,1,2,3,1] target 2
 var countPairs = function(nums, target) {
  // 先排序，因为数组乱了，ij的顺序将不会影响后续的行为
  nums.sort((a,b)=>a-b); // [-1,1,1,2,3]
  //从末尾遍历，在数组中找到满足条件的数 [-1,1,1,2] 3
  let len = nums.length,ans = 0;
  // 末位向前便利
  for(let i =len-1;i>=0;i--){
      let [l,r]=[0,i-1];
      // 二分查找，在有序中查找符合条件的数
      while(r>=l){
          let m = l+r>>1;
          if(nums[m]+nums[i]<target){
              l=m+1;
          }else{
              r=m-1;
          }
      }
      if(nums[r]+nums[i]<target){
          ans+=r+1
      }
  }
  return ans;
};