var SmallestInfiniteSet = function() {
  // 最小值
  this.min = 1
  // 已经删除的数字集合
  this.remove = new Set
};

/**
* @return {number}
*/
SmallestInfiniteSet.prototype.popSmallest = function() {
  // 将最小值添加到删除的数字集合里面
  this.remove.add(this.min)
  // 寻找下一个不在集合里面的最小数字
  let re = this.min
  // TODO： 
  while(this.remove.has(this.min)) this.min++
  // 返回刚才删除的最小值
  return re
};

/** 
* @param {number} num
* @return {void}
*/
SmallestInfiniteSet.prototype.addBack = function(num) {
  // 如果该值在删除的集合里面，从集合里面移除
  if (this.remove.has(num)) {
      this.remove.delete(num)
      // 如果该值比最小值小，将该值作为最小值
      // TODO：
      if (this.min > num) this.min = num
  } 
};

/**
* Your SmallestInfiniteSet object will be instantiated and called as such:
* var obj = new SmallestInfiniteSet()
* var param_1 = obj.popSmallest()
* obj.addBack(num)
*/
