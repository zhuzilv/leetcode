/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */
// 1，有序，2，不重复
// 每次取中间位置，一直替换mid的值，定义高低位
// @lc code=start
function search(nums: number[], target: number): number {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    //位运算取整
    let mid = (high + low)/2 |0;
    if (target > nums[mid]) {
      //右移一位
      low = mid + 1;
    } else if (target < nums[mid]) {
      //左移一位
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1
};
// @lc code=end
