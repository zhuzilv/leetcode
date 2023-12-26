// pp xd
// 单调队列
// 

var Checkout = function() {
  this.queue = new Array();
  this.sortQueue = new Array();
};

/**
* @return {number}
*/
Checkout.prototype.get_max = function() {
  if (this.sortQueue.length) return this.sortQueue[0];
  return -1;
};

/** 
* @param {number} value
* @return {void}
*/
Checkout.prototype.add = function(value) {
  this.queue.push(value);
  if (!this.sortQueue.length) {
      this.sortQueue.push(value);
  } else {
      while (this.sortQueue[this.sortQueue.length - 1] < value) {
          this.sortQueue.pop();
      }
      this.sortQueue.push(value);
  }
};

/**
* @return {number}
*/
Checkout.prototype.remove = function() {
  const tar = this.queue.shift();
  if (this.sortQueue.length && tar === this.sortQueue[0]) {
      this.sortQueue.shift();
  }
  return tar || -1;
};

/**
* Your Checkout object will be instantiated and called as such:
* var obj = new Checkout()
* var param_1 = obj.get_max()
* obj.add(value)
* var param_3 = obj.remove()
*/

// @ 我
var Checkout = function() {
  this.doubleQue=[];
  // mono
  this.deQue=[];
};

/**
* @return {number}
*/
Checkout.prototype.get_max = function() {
  if(this.doubleQue.length==0) return -1;
  return this.deQue[0]
};

/** 
* @param {number} value
* @return {void}
*/
Checkout.prototype.add = function(value) {
  this.doubleQue.push(value);
  for(let i=this.deQue.length-1;i>=0;i--){
      if(value>this.deQue[i]){
          this.deQue.pop();
      }
  }
  this.deQue.push(value);
};

/**
* @return {number}
*/
Checkout.prototype.remove = function() {
  if(this.doubleQue.length){

  const v = this.doubleQue.shift();
  if(v===this.deQue[0]){
      this.deQue.shift();
  }
  return v;
  }else{
      return -1;
  }
};

/**
* Your Checkout object will be instantiated and called as such:
* var obj = new Checkout()
* var param_1 = obj.get_max()
* obj.add(value)
* var param_3 = obj.remove()
*/