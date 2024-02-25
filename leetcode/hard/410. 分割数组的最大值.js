var splitArray = function(nums, k) {
  // 判断段成立，cnt是分段数
  function check(mx) {
      let cnt = 1;
      let s = 0;
      for (const x of nums) {
          if (s + x <= mx) {
              s += x;
          } else { // 新划分一段
              if (cnt++ === k) {
                  return false;
              }
              s = x;
          }
      }
      return true;
  }
  
  let right = _.sum(nums);
  console.log(right,'right')
  //   左范围越大越好， 考虑到 子最大，平均值
  let left = Math.max(Math.max(...nums) - 1, (right - 1) / k);
  // 二分找中位数 check 
  while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2);
      if (check(mid)) {
          right = mid;
      } else {
          left = mid;
      }
  }
  return right;
};
