/**
 * @param {string} word
 * @return {number}
 */
// 自己的做法
// 一次遍历 后比前打-1 默认加2
 var addMinimum = function(word) {
  let ans = 0;
  for(let i =0;i< word.length;i++){
      if(word[i]>word[i-1]){
          ans-=1;
      }else{
          ans+=2;
      }
  }
  return ans;
};

// 标准做法
// dp

var addMinimum = function(word) {
  const n = word.length;
  // 递推数组
  const d = new Array(n + 1).fill(0);
  // 从1开始
  for (let i = 1; i <= n; i++) {
  // i = i-1 +2
      d[i] = d[i - 1] + 2;
      // i-1 > i-2
      // i = i-1 -1
      if (i > 1 && word[i - 1] > word[i - 2]) {
          d[i] = d[i - 1] - 1;
      }
  }
  // 返回最后
  return d[n];
};

