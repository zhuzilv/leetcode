/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
// math 做法
 function gcd(a,b){
  while(b){
      [a,b] = [b,a%b]
  }
  return a;
}
var canMeasureWater = function(x, y, z) {
  if(x+y<z){
      return false;
  }
  if(x==0||y==0){
      return z==0||x+y==z
  }
  console.log(z,gcd(x,y),'--')
  return z%gcd(x,y)==0
};

// bfs 
/**
* @param {number} x
* @param {number} y
* @param {number} z
* @return {boolean}
*/
var canMeasureWater = function(x, y, z) {
  let stack = [[0, 0]], set = new Set();
  while (stack.length) {
      let [remainX, remainY] = stack.pop();
      if (remainX === z || remainY === z || remainX + remainY === z) return true;
      if (set.has(remainX + "#" + remainY)) continue;
      set.add(remainX + "#" + remainY);
      // 把 x 壶倒满
      stack.push([x, remainY]);
      // 把 y 壶倒满
      stack.push([remainX, y]);
      // 把 x 壶倒空
      stack.push([0, remainY]);
      // 把 y 壶倒空
      stack.push([remainX, 0]);
      // 把 x 壶水倒向 y 壶，直至 x 壶倒空，或者 y 壶倒满
      stack.push([remainX - Math.min(remainX, y - remainY), remainY + Math.min(remainX, y - remainY)])
      // 把 y 壶水倒向 x 壶，直至 y 壶倒空，或者 x 壶倒满
      stack.push([remainX + Math.min(remainY, x - remainX), remainY -  Math.min(remainY, x - remainX)])
  }
  return false;
};
