// [5,3,4,1,1]
 // 5 3 3 1 1
 // 遍历 以每一个值为峰值时pre + suf 最后判断大小


var maximumSumOfHeights = function(maxHeights) {
  const n = maxHeights.length;
  const prefix = new Array(n).fill(0);
  const suffix = new Array(n).fill(0);
  let stack1 = [];
  let stack2 = [];
  let res = 0;
  for (let i = 0; i < n; i++) {

    let ans = 0;
    for (let j = i; j < n; j++) {
      if(stack1.length==0){
        stack1.push(maxHeights[j]);
      }else{
        if(maxHeights[j]>stack1[stack1.length-1]){
          stack1.push(stack1[stack1.length-1])
          ans+=stack1[stack1.length-1];
        }else{
          stack1.push(maxHeights[j]);
          ans+=stack1[stack1.length-1];
        }
      }
  }
  prefix[i] = ans+maxHeights[i];
  stack1=[];

  }
  console.log(prefix,'-----')

  for (let i = 0; i < n; i++) {

    let ans = 0;
    for (let j = i; j >=0; j--) {
      if(stack2.length==0){
        stack2.push(maxHeights[j]);
      }else{
        if(maxHeights[j]>stack2[stack2.length-1]){
          stack2.push(stack2[stack2.length-1])
          ans+=stack2[stack2.length-1];
        }else{
          stack2.push(maxHeights[j]);
          ans+=stack2[stack2.length-1];
        }
      }
  }
  res=Math.max(ans+prefix[i],res) ;
  stack2=[];

  }

  return res
};
