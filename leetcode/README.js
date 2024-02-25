// 二分模版
function binarySearchIndex(arr,i){
        let [l,r] = [0,arr.length];
        while(r>l){
            let mid = l+((r-l)>>1)
            if(arr[mid]>=i){
                r= mid;
            }else{
                l = mid+1;
            }
        }
        return l;
    }