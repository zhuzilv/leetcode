// https://leetcode.cn/problems/min-stack/solutions/242190/zui-xiao-zhan-by-leetcode-solution/
// 一个栈无法实现O(1)操作，gemin
// 构造一个辅助栈数组，存非严格递减值 eg：
// [-2,0,-3]
// [-2,-3]
// 两个数组分担功能

/**
 * initialize your data structure here.
 */
 var MinStack = function () {
  this.value = [];
  this.stack = [];
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this.value.push(x);
  if (this.stack.length) {
      if (x <= this.stack[this.stack.length - 1]) {
          this.stack.push(x)
      }
  } else {
      this.stack.push(x)
  }
  console.log(this.value,this.stack)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  const res = this.value.pop();
 if(this.stack[this.stack.length-1]==res){
     this.stack.pop()
 }
  return res;
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.value[this.value.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/