/*
You are given an integer array heights where heights[i] represents the height of the i'th bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Input: height = [1,7,2,5,4,7,3,6]
                   L         R
                maxArea = 36
                currentArea = 15


Output: 36
*/

// Area: width * length
    // width => right - left
    // length => minimum between the two heights (the water can't overflow the container)
// Area => (r - l) * minumum(heights[left], heights[right])

// define left and right pointer (opposite ends of the array)
// define a max area (default to 0)
// iterate through the array => while left and right dont intersect
    // calculate the current area between the two pointers
    // set the maxArea to the max between the current area and the maxArea
    // * move the smaller pointer 
        // if heights[left] < heights[right] => move the left pointer UP 1
        // if heights[right] < heights[left] => move the right pointer DOWN 1

/*
Input: height = [1,7,2,5,4,7,3,6]
                   L R
                 currArea = 12
                 maxArea = 36

Output: 36


*/

function maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while (left < right){
        const currArea = (right - left) * Math.min(heights[left], heights[right]);
        maxArea = Math.max(currArea, maxArea);

        if(heights[left] < heights[right]){
            left++;
        } else{
            right--;
        }
    }
    return maxArea;
}

console.log(maxArea([1,7,2,5,4,7,3,6]));


