/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  // 数据栈
  this.arr = [];
  // 最小栈
  // 辅助栈做法
  this.arr2 = [Infinity];
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  let arr = this.arr;
  let arr2 = this.arr2;
  arr.push(x);
  arr2.push(Math.min(x,arr2[arr.length-1]))
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.arr.pop();
  this.arr2.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.arr[this.arr.length-1];
};

/**
* @return {number}
*/
MinStack.prototype.min = function() {
 return this.arr2[this.arr2.length-1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/