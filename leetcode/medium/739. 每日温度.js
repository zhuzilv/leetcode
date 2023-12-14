/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function (temperatures) {
  // 单调栈 例题
  let stack = [];
  // 同等数组，超出位刚好符合题意
  let res = new Array(temperatures.length).fill(0);
  // 遍历一次 数组
  for (let i = 0; i < temperatures.length; i++) {
      // 先判断当前数是否大于栈数， 如果大于则循环替换并赋值，
      while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
          // 先弹出栈顶元素
          let pre = stack.pop();
          // 给结果数组赋值
          res[pre] = i - pre;
      }
      // 均匀添加下标志，每次一个
      stack.push(i)
  }
  
  return res;
};