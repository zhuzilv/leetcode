class Solution {
public:
    int numberOfSteps(int num) {
        int step=0;
        while(num>0){
            step++;
            num=num&1?num-1:num/2;
        }
        return step;
    }
};