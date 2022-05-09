function test(e){
  testTimes= 1000000;
  let count = 0;
  for(let i = 0; i<testTimes;i++){
    // console.log(e())
    if(e()===1){
      count ++;
    }
  }
  return count / testTimes;
}

// 1-5 随机
function random15(){
  return( Math.random()*5 | 0) +1;
}

// 1- 5的 随机函数变为 0 和 1等概率的随机函数
function binary01(){
  //  1 2 3 4 5
  let ans = 0;
  do{
    ans=random15()
  }while(ans===3)
  return ans>3?1:0;
}

// 1-7 如何根据0和1随机拼出来
// 000～ 111 0到7
function random07(){
  //  1 2 3 4 5
  let ans =0;
  do{
    ans=(binary01()<<0)+(binary01()<<1)+(binary01()<<2)
  }while(ans===0)
  return ans;
}
// 01 随机
function random01(){
  return Math.random()>0.5?1:0;
}

console.log(
  test(random01)
)