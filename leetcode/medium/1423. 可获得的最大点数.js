/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
//滑动窗口/逆向思维
// 每次从数组两端拿最大的值
// 逆向思维成 找一个滑动窗口最小数组
 var maxScore = function(cardPoints, k) {
// 最小窗口长度
  let minWindow = cardPoints.length-k;、
  // 所有值的和，答案= sum - min
  let sum = 0;
  // 当前滑动窗口的值
  let value=0;
  // 初始化窗口
  for(let i =0;i<minWindow;i++){
      value+=cardPoints[i];
  }
  let min = value;
  // console.log(value,'default')
  // 遍历一次
  // 同时存储一个sum
  // 同时滑动窗口比对，增加一个减少一个，检测出最小值，然后替换
  for(let i = 0;i<cardPoints.length;i++){
      sum+=cardPoints[i];
      if(i>=minWindow){
         value+= cardPoints[i]-cardPoints[i-minWindow];
         min= Math.min(min,value);
      }
  }
  // console.log(min,sum,'m-s')
  // 所有值的和减去最小值
  return sum-min;
};