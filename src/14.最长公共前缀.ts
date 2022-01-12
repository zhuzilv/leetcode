function longestCommonPrefix(strs: string[]): string {
  if(strs.length===1) return strs[0];
  let n=strs[0].length;
  for(let i=1;i<n+1;i++){
  let content=strs[0].substr(0,i);
  const result= strs.every(e=>content===e.substr(0,i))
  if(!result){
      return  content.substr(0,content.length-1)
    } 
  }
  return strs[0];
  //解法二，排序后比较第一个和最后一个的相同部分；
};