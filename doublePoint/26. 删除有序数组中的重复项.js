/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let l=0,r=1;
  while(r<nums.length){
      if(nums[l]!==nums[r]){
          nums[l+1]=nums[r];
          l++;
          r++;
      }else {
       r++;
      }
  } 
  return l+1;
};