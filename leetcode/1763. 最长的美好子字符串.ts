/**
 * @param {string} s
 * @return {string}
 */
 var longestNiceSubstring = function (s):string {
  //精髓
  //如何判断一个字符串是美好字符串
  let isPerfectStr=(s:string):boolean=>{
      let oldLen=(new Set(s.split(''))).size;
      let upperLen=(new Set(s.toUpperCase().split(''))).size;
      if(oldLen===upperLen*2){
        return true
      }
  }
  //双重for判断，如果大于max，就替换截取位
  //max 定义长度，pos 定义截取的前后下标
  //slice [),包左不包右
  let len=s.length+1;
  let max=0;
  let pos=[0,0]
  for(let i=0;i<len;i++){
      for(let j=1;j<len;j++){
        let str=s.slice(i,j);
        //如果符合完美字符串，并且长度大于已知最大
        if(isPerfectStr(str)&&(j-i)>max){
            //替换调换位置和最大值
            pos=[i,j]
            max=j-i;
        }
    }
  }
  return s.slice(...pos)
};
