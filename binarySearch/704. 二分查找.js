/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while(l <= r) {
        const m = (l & r) + ((l ^ r) >> 1);
        if(target === nums[m]) {
            return m;
        } else if(target < nums[m]) {
            r = m - 1;
        } else {
            l = m + 1
        }
    }
    return -1;
    };

console.log(search([1,2,3,4,5],6))