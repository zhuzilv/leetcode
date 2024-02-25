var findMin = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
      // 拿中间
      const m = l + ((r-l)>>1)
      // 如果中间小于右
      if (nums[m] < nums[r]) {
          // 有序 在左 考虑中点
          r = m;
      } else if (nums[m] > nums[r]) {
          // 无序在右 不考虑中
          l = m + 1;
      } else {
          // 相等，中点和右同时左移
          r -= 1;
      }
  }
  return nums[l];
};
