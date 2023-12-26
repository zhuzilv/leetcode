/**
 * @param {number[]} nums
 * @return {number}
 */
 // dp方程
 //     1.-2,4 3. 5 6. 1 5
 // [-2,    1,      -3,4,            -1,2,1,-5,4]
 // 
 -1




 // Math.max((-2 + 1), 1) => 1            f(i) = max(f[i]+ a[i], a[i])  
 // Math.max((-3 +1 ), -3) => -2
 //           -2 + 4.  4.   4
 //            4. -1   -1   3
 //            3 +2   2     5
 //           5 + 1.  1.    6 
 //            6 -5.  -5    1
 //             1 +4.  4     5
var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};
