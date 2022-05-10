/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i ++) {
      //判断是否存在，存在删除之前所有
      if(arr.indexOf(s[i]) !== -1) {
          arr.splice(0, arr.indexOf(s[i]) + 1);
      }
      arr.push(s[i]);
      //每次比较一次
      max = Math.max(max, arr.length);
  }
  return max;
};


// @lc code=end

