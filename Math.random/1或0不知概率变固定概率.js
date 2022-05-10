// 第一个函数的0和1 概率84%

function no50(){
  return Math.random()>0.84?1:0;
}

// 转换成均等的1 0 概率
function yes50(){
  // 1 1  或者 00 情况为 不等
  let ans =0;
  do{
    ans =no50();
  }while(ans===no50())
  return ans;
}