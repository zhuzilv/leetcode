var RecentCounter = function() {
  this.queue=[];
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
  // 阅读理解题 ，意思是 每新一个t 把过去小于t-3000的都移除
  // 采用 queue
  // O(n)
  this.queue.push(t);
  while(this.queue[0]<t-3000){
      this.queue.shift()
  }
  return this.queue.length;
};

/**
* Your RecentCounter object will be instantiated and called as such:
* var obj = new RecentCounter()
* var param_1 = obj.ping(t)
*/