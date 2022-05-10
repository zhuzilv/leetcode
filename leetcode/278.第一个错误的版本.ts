/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */


 var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let low=1,high=n;
        while(low<=high){
            let mid=(low+high)/2 |0;
            if(isBadVersion(mid)===true&&isBadVersion(mid+1)===true&&isBadVersion(mid-1)===false){
                return mid;
            }else if(isBadVersion(mid)) {
                high=mid-1;
            }else {
                low=mid+1;
            }
        }
    };
};