class Solution {
    public List<String> simplifiedFractions(int n) {
        //欧几里得 O(n*n*logn)
    List<String> ans = new ArrayList<String>();
        for(int i=1;i<n;i++){
            for(int j=i+1;j<=n;j++){
                if (gcd(i, j) == 1) ans.add(i + "/" + j);
            }
        }
        return ans;
    };
    public int gcd(int a, int b){
            return a==0?b:gcd(b%a,a);
        }
}