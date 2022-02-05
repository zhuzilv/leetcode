function sumOfUnique(nums: number[]): number {
  // 取只有当前元素的数组的长度是否为1，来比较O(n2)
      // return nums.filter(a=>nums.filter(e=>e==a).length==1).reduce((e,a)=>e+a,0)
  //前后指针查找，如果相同则只有一个，不同则放弃(n2)
      // return nums.filter(e=>nums.indexOf(e)===nums.lastIndexOf(e)).reduce((e,n)=>e+n,0)
  //正常做法，两次循环，一次模拟hash，一次遍历O(n)
      // let map={};
      // let sum=0;
      // for(let item of nums){
      //     if(map[item.toString()]){
      //         map[item.toString()]++;
      //     }else{
      //         map[item]=1;
      //     }
      // }
      //  for(let item of nums){
      //     if(map[item.toString()]===1){
      //         map[item.toString()]++;
      //         sum+=item;
      //     }
      // }
      // return sum;
  //一次循环的解法，需要三种状态，加两次时需要减去，超过两次就不动O(n)
      let map={};
      let sum=0;
      for(let item of nums){
          if(map[item.toString()]===2){
              continue;
          }else if(map[item.toString()]===1){
              sum-=item;
              map[item]++;
          }else{
              sum+=item;
              map[item]=1;
          }
      }
      return sum;
      
  };