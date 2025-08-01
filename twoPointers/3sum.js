/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

Example 1:

target = 0
Input: nums = [-4,-1,-1,0,1,2]
                      X L R

[[-1,0,1], ]

Output: [[-1,-1,2],[-1,0,1]]


*/

// make an array to store the triplets
// sort nums
// iterate through nums
// set left pointer = X + 1
// set right pointer = end of nums
// while left < right
// check if the sum of the numbers is 0
// push the triplets in an array into the res array
// if > 0: move right pointer down 1
// if < 0: move left pointer up 1

// any triplets that we have inserted into the array
// will already have been passed previously
// since the array is sorted
// duplicate nums will be next to each other
// check if i > 0 (in case we haven't made the first pass)
// and if the current number is the same as the previous number
// if so, continue to the next pass i.e. we have a duplicate
// Example: [-1,-1,0,1] => nums[1] === nums[0] => condition has been met

// const threeSum = function (nums) {
//   const res = [];
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     const curr = nums[i];
//     const prev = nums[i - 1];
//     let left = i + 1;
//     let right = nums.length - 1;

//     if (i > 0 && curr === prev) {
//       continue;
//     }
//     while (left < right) {
//       const numLeft = nums[left];
//       const numRight = nums[right];
//       const sum = curr + numLeft + numRight;

//       if (sum === 0) {
//         res.push([curr, numLeft, numRight]);
//         while(left < right && numLeft === nums[left + 1]) left += 1;
//         while(left < right && numRight === nums[right - 1]) right -= 1;
//         left += 1;
//         right -= 1;
//       }
//       else if (sum > 0) {
//         right--;
//       } else {
//         left++;
//       }
//     }
//   }
//   return res;
// };

// threeSum([-1, 0, 1, 2, -1, -4]);

// ------- july 30, 2025

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // indices are all distinct (input may be sorted)
        // elemtents may have repeating values as long as they
            // add up to 0
        // first check if the sum is 0
        // then move the pointers if the previous value is the same

        /*

        nums = [-1,0,1,2,-1,-4]
                   i l
                          r

        */

        // set i to first array element
        // set left pointer to i + 1
        // set right pointer to last array element
        // loop while i < array length - 2 AND left and right dont cross
        // check if the 3sum equals 0
        // while the left pointer element equals the previous 
        let res = [];  
        nums.sort((a, b) => a - b);
        let i = 0;


        while(i < nums.length) {
            let l = i + 1;
            let r = nums.length - 1;
            let curr = nums[i];
            let prev = nums[i - 1];
            if(i > 0 && curr === prev) {
                i++;
                continue
            }
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum === 0) {
                    res.push([nums[i] , nums[l] , nums[r]]);
                    while(l < r && nums[l] === nums[l + 1]) l++;
                    while(l < r && nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                } 
                else if (sum < 0) l++;
                else r--;
            }
            i++;
        }
        return res;

    }
}
