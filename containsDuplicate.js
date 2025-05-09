

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


true => not every element is distinct

false => every element is distinct

Input: nums = [1] => The element 1 occurs at the indices 0 and 3.
Output: true

hashSet = {1,3,2, }
pop = 1
*/

// create a hash set
// while nums has items inside
    // pop the last element
    // check if popped element is in hash set
        //* return true
        //! add the popped element to the hash set
            // continue loop
// return false

function hasDuplicate(nums) {
    const hashSet = new Set();

    while(nums.length){
        const curr = nums.pop();
        if(hashSet.has(curr)){
            return true;
        }
        hashSet.add(curr);
    }
    return false;
}

console.log(hasDuplicate([1, 2, 3, 3]));
console.log(hasDuplicate([1, 2, 3, 4]));