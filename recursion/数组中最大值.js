let arr = [ 2, 6, 7 ,9];
// l-> 2,6 r->7,9
// l 2 r 6 
// l -> 6 r-> 7,9
// l->6 r->9
// 9
function findMax (arr){

  return recursionMax(arr,0,arr.length-1)
}

function recursionMax(arr,l,r){
// base case 
 if(l===r){
   return arr[l];
 }
 let mid = l + ((r-l)>>1)
 let leftMax = recursionMax(arr,l,mid);
 let rightMax = recursionMax(arr,mid+1,r);
 return Math.max(leftMax,rightMax);
}

console.log(findMax(arr))