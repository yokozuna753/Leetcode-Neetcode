// [1,2,3,4,5]
// [2,3,4,5,1]
//  L       R
// nums = [3,4,5,6,1,2]

function findMin(nums) {

  let left = 0;
  let right = nums.length - 1;
  let res = nums[0];

  while (left <= right) {
    console.log('left num -> ', nums[left]);
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
      break;
    }

    let mid = Math.floor((left + right) / 2);
    console.log("mid here -> ", mid);

    res = Math.min(res, nums[mid]);

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
}

// console.log(findMin((nums = [3, 4, 5, 6, 1, 2])));
console.log(findMin((nums=[2,1])));
