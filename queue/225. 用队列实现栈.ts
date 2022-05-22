class MyStack {
  constructor() {

  }
  // 只有shift 和 push
  hash = {
      A: [],
      B: [],
      sta: 'A',
  }

  push(x: number): void {
      let s = this.hash.sta;
      this.hash[s].push(x);
  }

  pop(): number {
      let s = this.hash.sta;
      while(this.hash[s].length!==1){
          this.hash[s==='A'?'B':"A"].push(this.hash[s].shift())
      }
      let res =this.hash[s].shift();
      this.hash.sta=this.hash.sta==='A'?'B':"A";
      return res;
  }

  top(): number {
      let s = this.hash.sta
      return this.hash[s][this.hash[s].length-1];
  }

  empty(): boolean {
      return this.hash['A'].length === 0 && this.hash['B'].length ===0
  }
}

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/