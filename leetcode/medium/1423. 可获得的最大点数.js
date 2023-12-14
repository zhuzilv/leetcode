/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
 var maxScore = function(cardPoints, k) {
  let minWindow = cardPoints.length-k;
  let sum = 0;
  let value=0;
  for(let i =0;i<minWindow;i++){
      value+=cardPoints[i];
  }
  let min = value;
  // console.log(value,'default')
  for(let i = 0;i<cardPoints.length;i++){
      sum+=cardPoints[i];
      if(i>=minWindow){
         value+= cardPoints[i]-cardPoints[i-minWindow];
         min= Math.min(min,value);
      }
  }
  // console.log(min,sum,'m-s')
  return sum-min;
};