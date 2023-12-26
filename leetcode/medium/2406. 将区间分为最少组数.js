/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 差分数组
// 再遍历一次取max
 var minGroups = function(intervals) {
  let max = 0;
  let arr = new Array(1000000+1).fill(0)
  for(let i =0;i<intervals.length;i++){
      const [l,r] = intervals[i];
      arr[l-1]++;
      if(r<1000000){
      arr[r]--
      }
      max = Math.max(r,max)
  }
  // 前缀和
  for(let i =1;i<max;i++){
      arr[i] = arr[i]+arr[i-1]
  }
  return Math.max(...arr)

};

// 拆分时候取最大值，Math.max()
