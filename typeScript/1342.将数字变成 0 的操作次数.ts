function numberOfSteps(num: number): number {
    //O(logN)
    let step=0;
    while(num>0){
        step++;
        num=num&1?num-1:num/2;
    }
    return step;
};