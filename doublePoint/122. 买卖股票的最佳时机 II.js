/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let l=0,r=1,count=0;
  while(r<prices.length){
      if(prices[l]>prices[r]){
          l=r;
      }else if(l===r){
          r++;
      } else {
          count+=(prices[r++]-prices[l++]);
      }
  }
  return count;
};