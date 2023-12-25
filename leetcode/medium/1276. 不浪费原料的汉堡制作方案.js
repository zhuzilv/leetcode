/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */

// 数学公式题
// 解个方程组

var numOfBurgers = function(tomatoSlices, cheeseSlices) {
  // 偶数
  if(tomatoSlices%2!==0
  // t>=2c
  || tomatoSlices<cheeseSlices*2
  // 4c>=t
  || cheeseSlices*4<tomatoSlices
  )return []
  // t = t/2 -c
  // c = 2*c-t/2
  return [(tomatoSlices>>1)-cheeseSlices,cheeseSlices*2-(tomatoSlices>>1)]
};