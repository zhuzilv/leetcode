class MyQueue {
  constructor() {

  }
  pushArr = [];
  popArr = [];
  // 倒数方法
  private pushToPop (){
      if(this.popArr.length===0){
          while(this.pushArr.length>0){
              this.popArr.push(this.pushArr.pop())
          }
      }
  }
  push(x: number): void {
      this.pushArr.push(x);
      this.pushToPop();
  }

  pop(): number {
      if(this.popArr.length>0){
          return this.popArr.pop();
      }
      if(this.pushArr.length){
          this.pushToPop();
      }
      return this.popArr.pop();
  }

  peek(): number {
      this.pushToPop();
      return this.popArr[this.popArr.length-1];
  }

  empty(): boolean {
      this.pushToPop();
      if(this.popArr.length===0&& this.pushArr.length ===0) return true;
      return false;

  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/
