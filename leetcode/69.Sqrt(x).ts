function mySqrt(x: number): number {
  //O(logn)
  let [l,r]=[0,x];
  while(l<=r){
      let mid=l+(r-l)/2 |0;
      let mid2=mid*mid
      console.log(l,r,mid)
      if(mid2<=x){
          l=mid+1
      }else{
          r=mid-1;
      }
  }
  return r;
};