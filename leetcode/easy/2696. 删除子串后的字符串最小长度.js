/**
 * @param {string} s
 * @return {number}
 */
 var minLength = function(s) {
  let pre =s;
  while(true){
      pre = s;
      s=s.replace(/AB|CD/,'')
      if(s===pre) return s.length;
  }
};

// 理应解法
/**
 * @param {string} s
 * @return {number}
 */
 var minLength = function(s) {
  let stack = []
  for(let i=0;i<s.length;i++){
      if(stack.length&&['AB','CD'].includes(stack[stack.length-1]+s[i])){
          stack.pop();
      }else{
          stack.push(s[i])
      }
  }
  return stack.length
};