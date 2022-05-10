function diStringMatch(s: string): number[] {
  // 如果是i 说明是递增，选当前数组中最小的，
      // 如果是 D 说明是递减，选当前数组最大的，
      let [l ,r] = [0,s.length] // 0 ,4
      let arr = [];
      for(let i  of s){
          if(i==='I'){
              arr.push(l);
              l++;
          }else {
              arr.push(r);
              r--;
          }
      }
      arr.push(l);
      return arr;
  };