// 队列实现栈
// https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/description/
// 两个栈
// 向第一个栈推入内容，从第二个栈pop内容，
// 每次pop检测二栈长度，不足则将in栈清空，（while）
// 保持


var CQueue = function () {
  this.oneStack = [];
  this.twoStack = [];
};

/**
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function (value) {
  return this.oneStack.push(value);
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function () {
  if (this.twoStack.length) {
      return this.twoStack.pop();
  } else {
      if (this.oneStack.length) {
          while (this.oneStack.length) {
              this.twoStack.push(this.oneStack.pop());
          }
          return this.twoStack.pop();
      }else{
          return -1
      }

  }
};

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/