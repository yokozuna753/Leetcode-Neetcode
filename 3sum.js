

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

// sort nums
// iterate through nums
// set left pointer = X + 1
// set right pointer = end of nums


// any triplets that we have inserted into the array
// will already have been passed previously
    // since the array is sorted
    // duplicate nums will be next to each other
// check if i > 0 (in case we haven't made the first pass)
// and if the current number is the same as the previous number
// if so, continue to the next pass i.e. we have a duplicate
// Example: [-1,-1,0,1] => nums[1] === nums[0] => condition has been met

