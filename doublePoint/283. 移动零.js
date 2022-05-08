/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  //快慢指针，快指针不指0，慢指针只指0
  // 末尾结束，满足条件交换，
  //            l
  //.                 r
  // [4,2,4,0,0,3,0,5,1,0]
  function swap(arr,a,b) {
      if(a===b) return null;
      arr[a]^=arr[b];
      arr[b]^=arr[a];
      arr[a]^=arr[b];
  }
  let len = nums.length;
  let [l,r] = [0,0];
  while(l<len && r<len ){
      if(nums[l]!==0){
          l++;
          r++;
      };
      if(nums[r]===0) r++;
      if(nums[l]===0 && nums[r]){
          swap(nums,l,r);
          l++;
          r++;
      }
  }

};