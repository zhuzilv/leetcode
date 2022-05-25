function mergeSort(arr){
  if(arr.length<=1)return arr;

  return recursionSort(arr,0,arr.length-1)

}
function recursionSort(arr,l,r){
  if(l===r) return ;
  let mid =(l+r)/2 |0
  recursionSort(arr,l,mid);
  recursionSort(arr,mid+1,r);
  merge(arr,l,mid,r)
  return arr;
}
// [ 4, 8 ,2 ,6]
//  0  1   2  3     mid =1 ,
function merge(arr,l,m,r){
  let help = new Array(r-l+1);
  let p1=l,p2=m+1;
  let i =0;
  while(p1<=m&&p2<=r){
    help[i++]=arr[p1]<=arr[p2]?arr[p1++]:arr[p2++];
  }
  while(p1<=m){
    help[i++]=arr[p1++];
  }
  while(p2<=r){
    help[i++]=arr[p2++];
  }
  console.log(help,arr);
  for(let i =0;i<help.length;i++){
    arr[l+i] = help[i]
  }
  // console.log(arr,'arr')
}
let arr = [ 8,4,6,2]
console.log(mergeSort(arr));
