// ymgm code 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var secondGreaterElementYMGM = function (nums) {
  const leftStack = [], rightStack = [], value = new Array(nums.length).fill(-1);


  for (let i = 0; i < nums.length; i++) {


      const current = nums[i];


      while (current > nums[rightStack[rightStack.length - 1]]) {
          value[rightStack.pop()] = current; 
      }

      let index = leftStack.length - 1;
      while (index >= 0 && nums[leftStack[index]] < current) {
          index--;
      }
      rightStack.push(...leftStack.splice(index + 1));

      leftStack.push(i);
  }
  return value;
};


// 费劲巴力写的，头大
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var secondGreaterElement = function (nums) {
  //单调栈问题，因为需要保留检索过的数字
  // 对于medium 单调栈，此题需要引入一个 遍历栈

  // 单调检查栈顶 与当前比较
  let monoStack = [];
  // 存储答案
  let ansArr = new Array(nums.length).fill(-1);
  // 遍历用，实际也是单调栈，让栈顶是最大数，持续比较栈顶
  let travStack = [];

  for (let i = 0; i < nums.length; i++) {
      // 检查mono栈顶元素与当前大小
      let item = nums[i];

      //判断当前是否比遍历栈数大
      // 大则找到第二次大的数
      while(item > nums[travStack[travStack.length-1]]){
          ansArr[travStack[travStack.length-1]] = nums[i];
          travStack.pop();
      }
      // splice 一次完成 有栈全部添加
      let index = monoStack.length -1;
      while (item > nums[monoStack[index]]) {
         index--;
      }
      // index+1 😡mlgbd
      let s = monoStack.splice(index+1)
      // 结构才能push
      travStack.push(...s);
      //每次稳定推送
      monoStack.push(i);
  }
  return ansArr;
};