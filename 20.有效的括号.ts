function isValid(s: string): boolean {
  // 用栈做，类似于函数调用，进入左括号不动，进入右括号检查上一个左括号是否匹配；
  let n=s.length;
  if(n%2!==0) return false;
  let stack =[];
  let map={
      ']':'[',
      ')':'(',
      '}':'{',
  }
  for (let item of s){
       if(!!map[item]){
              if(map[item]!==stack[stack.length - 1]){
          return false;
          }else if(item){
              stack.pop()
          }
     }else {
         stack.push(item)
     }
  }
  return stack.length==0
};