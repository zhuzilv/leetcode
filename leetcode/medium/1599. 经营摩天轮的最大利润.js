/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
// 模拟题，当成了队列做，超时了，不去动数组只动下标即可
 var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
  // 利润》0 ans 一定变
  let ans = -1;
  let [max,p,wait,i] = [0,0,0,0];
  while(wait>0 || i<customers.length){
      // wait 就是当前的人数
      wait+= i<customers.length? customers[i]:0;
      // 拿到当前人数
      let humans = Math.min(4,wait);
      // wait更改
      wait-=humans;
      // 利润计算
      p += humans * boardingCost - runningCost
      // 下标移动
      i++;
      // 找到最大利润
      if(p>max){
          max = p;
          ans = i;
      }
  }
  return ans;
};