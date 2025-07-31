class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    /*
    mid = l + (r - l) / 2
    - is nums[l] < nums[r] => return nums[l]
        - we have a sorted and unshifted array
    - is nums[l] < nums[m]
        yes: nums[l] - nums[mid] is rotated (smallest is betweeen nums[m] - nums[r])
            - move left pointer to mid + 1
            - recalculate mid
        no: nums[m] - nums[r] holds values larger than smallest; smallest
        is either mid or to the left of mid
            - move the right pointer to mid - 1
            - recalculate mid
    [3,4,5,6,1,2]
             l
           m   
               r
     0 1 2 3 4 5 6
    [4,5,6,7,0,1,2]
             l
             m   
                 r
    */
    findMin(nums) {
        let smallest = nums[0];
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            if (nums[l] < nums[r]) {
                return Math.min(smallest, nums[l]);
            }
            let mid = Math.floor(l + (r - l) / 2);
            console.log(smallest);
            smallest = Math.min(smallest, nums[mid]);
            if (nums[mid] >= nums[l]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return smallest;
    
    }
}