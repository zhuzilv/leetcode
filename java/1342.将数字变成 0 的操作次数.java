class Solution {
    public int numberOfSteps(int num) {
        int ans = 0;
        while(num>0){
            ans++;
            num=((num&1)==1)?num-1:num/2;
        }
        return ans;

    }
}
