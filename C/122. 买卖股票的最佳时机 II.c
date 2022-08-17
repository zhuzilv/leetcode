int maxProfit(int* prices, int pricesSize){
    int l =0,r=0,count =0;
    while(r<pricesSize){
        if(l==r){
            r++;
        }else if(prices[r]<prices[l]){
            l=r;
        }else {
            count+=(prices[r++]-prices[l++]);
        }
    }
    return count;
}