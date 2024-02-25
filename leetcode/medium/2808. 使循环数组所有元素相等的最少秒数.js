var minimumSeconds = function(nums) {
  const mp = new Map();
  let n = nums.length, res = n;
  for (let i = 0; i < n; ++i) {
      if (!mp.has(nums[i])) {
          mp.set(nums[i], []);
      }
      mp.get(nums[i]).push(i);
  }
  console.log(mp,'mp')
  for (const pos of mp.values()) {
      // 头尾差
      let mx = pos[0] + n - pos[pos.length - 1];
      for (let i = 1; i < pos.length; ++i) {
          console.log(mx, pos[i] - pos[i - 1],'---')
          // 想临两项差和首尾差 取max
          mx = Math.max(mx, pos[i] - pos[i - 1]);
      }
      //为何 是最远距离除2向下取整
      res = Math.min(res, Math.floor(mx / 2));
  }
  return res;
};
