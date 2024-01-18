var minimumRemoval = function(beans) {
  let n = beans.length
  // 排序
  beans.sort((a, b) => a - b);
  let total = beans.reduce((a, b) => a + b, 0); // 豆子总数
  let res = total; // 最少需要移除的豆子数
  for (let i = 0; i < n; i++) {
      //总数- 长方体长度等于剩余长度/剩余豆子数
      res = Math.min(res, total - beans[i] * (n - i));
  }
  return res;
};
