//差分数组经典题


/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
  //   1 2 2 4   1 3 5 9 ->  1 2 2 4  .   1 1 0 2 ->  1 2 2 4
    // yuan    -> 前缀和-》差分。         差分 -〉 前缀 
  
      // 1 2 2 4 ——》 1 4 4 4
      // 1 1 0 2 -》 1 3 0 0 
      //               2  -2
      let arr = new Array(n).fill(0);
      for(let i = 0;i<bookings.length;i++){
          const [l,r, v ] = bookings[i];
          arr[l-1] =arr[l-1] + v;
          // 最后一项不存
          if(r<n){
              arr[r] = arr[r] - v;
          }
      }
      for(let i = 1;i<arr.length;i++){
          arr[i]=arr[i]+arr[i-1];
      }
      
      return  arr;
  };
  
  