function sortArrayByParity(nums: number[]): number[] {
  if(nums.length<=0) return nums;
  let [left, right] = [0,nums.length-1];
  function swap(arr,a,b){
      [arr[a],arr[b]]=[arr[b],arr[a]]
  }
  while(left <right){
      if(nums[right] & 1){
          right--;
          continue;
      }
      if((nums[left] & 1)===0){
          left++;
          continue;
      }
      swap(nums,left,right);
      left++;
      right--;
  }
  return nums;
};