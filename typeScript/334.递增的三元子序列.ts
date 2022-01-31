function increasingTriplet(nums: number[]): boolean {
    //左中右，贪心，假定左中都为无穷；结构赋值，for of
    let [left,mid]=[Infinity,Infinity];
    for(const right of nums){
        if(right>mid){
            return true;
        }else if(right<=left){
            left=right
        }else {
            mid=right;
        }
    }
    return false;
};