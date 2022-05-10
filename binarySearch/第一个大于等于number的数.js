function mostNumber(arr,number){
  let [l , r , t] = [ 0 , arr.length , -1];
  while(l<=r){
    let mid = (l&r) +((l^r)>>1);
    if(arr[mid]>=number){
      t= arr[mid];
      r= mid -1;
    }else {
      l = mid +1;
    }
  }
  console.log(t,'t')
  return t;
}
mostNumber([1,1,2,3,4,5,6,7],2)