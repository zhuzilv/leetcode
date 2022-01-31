function numberOfSteps(num: number): number {
  let step=0;
  while(num>0){
      if(num%2===0){
          num=num/2;
          step++
      }else{
          num--;
          step++
      }
  }
  return step;
};