function countGoodRectangles(rectangles: number[][]): number {
  let max=0;
  let arr2=rectangles.map((e)=>Math.min(...e)).sort((a,b)=>a-b);
  for(let item of arr2){
      if(item===arr2[arr2.length-1]){
          max++
      }
  }
  return max;
};