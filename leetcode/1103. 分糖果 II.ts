/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
 var distributeCandies = function(candies, num_people) {
  // 第一个小朋友分一颗，1，2，3，4依次
  // 初始化结果集
  let result = new Array(num_people).fill(0);
  // 计算分配到了第几个小朋友
  let index = 0;
  // 如果有糖果时，就继续分配
  while(candies > 0){
      result[index % num_people] += Math.min(candies, index + 1);
      // 计算剩余的糖果
      candies -= (index + 1);
      index++;
  }
  return result;
};
