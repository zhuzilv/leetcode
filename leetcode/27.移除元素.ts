function removeElement(nums: number[], val: number): number {
  let [left,right]=[0,nums.length];
       while (left < right) {
      if (nums[left] === val) {
          nums[left] = nums[right - 1];
          right--;
      } else {
          left++;
      }
  }
  return left;
}; 