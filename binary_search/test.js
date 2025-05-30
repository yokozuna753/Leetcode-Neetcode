// GOAL: implement a binary search algorithm
// to accomplish this: array must be sorted
// [1,3,5,5,7,10,23,30,50,51,100]
// 
// Target = 50

// take the start & end of the array
// find the midpoint
// check if the midpoint = target
    // * return the midpoint
    // ! if the target is > midpoint:
        // move the beginning to the midpoint + 1
        // continue
    // ! if the target is < midpoint
        //  move the end to the midpoint - 1
        // continue

const array = [1,3,5,5,7,10,23,30,50,51,100,230,500,1240];

function binarySearchTarget(array, low, high, target){
    const mid = low + Math.floor(high - low) / 2;
    if (high >= low) {
        if (array[mid] === target) return `Found target ${target} at index ${mid}`;
        if (array[mid] > target) return binarySearchTarget(array, low, mid - 1, target);
        
        return binarySearchTarget(array, mid + 1, high, target);
        }
    return -1;
}

console.log(binarySearchTarget(array, 0, array.length, target = 1240));

const binarySearchTargetLoop = (array, low, high, target) => {
    
    while (high >= low) {
        const mid = low + Math.floor(high - low) / 2;
        if(array[mid] === target) return mid;
        if (array[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }
    return -1;
}

console.log(binarySearchTargetLoop(array, 0, array.length, target = 5));