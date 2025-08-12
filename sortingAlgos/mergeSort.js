// function merge(leftArray, rightArray, array) {
//     let i = 0, l = 0, r = 0;
//     let leftSize = leftArray.length;
//     let rightSize = rightArray.length;

//     while (l < leftSize && r < rightSize) {
//         if (leftArray[l] < rightArray[r]) {
//             array[i++] = leftArray[l++];
//         } else {
//             array[i++] = rightArray[r++];
//         }
//     }
//     while (l < leftSize) {
//         array[i++] = leftArray[l++];
//     }
//     while (r < rightSize) {
//         array[i++] = rightArray[r++];
//     }
// }

// function mergeSort(array) {
//     const length = array.length;
//     if (length <= 1) {
//         return;
//     }

//     const middle = Math.floor(length / 2);
//     let left = array.slice(0, middle);
//     let right = array.slice(middle);

//     mergeSort(left);
//     mergeSort(right);
//     merge(left, right, array);
// }

// let arr = [5, 9, 4, 2, 1, 3, 0, 8, 6, 7];
// mergeSort(arr);

// for (let num of arr) {
//     console.log(num);
// }





// func to merge two arrays -> from base case, up the call stack
const merge = (leftArr, rightArr, originalArray) => {
    let i = 0, l = 0, r = 0;
    const leftSize = leftArr.length;
    const rightSize = rightArr.length;

    while(l < leftSize && r < rightSize) {
        if (leftArr[l] < rightArr[r]){
            originalArray[i++] = leftArr[l++];
        } else {
            originalArray[i++] = rightArr[r++];
        }
    }

    while (l < leftSize) {
        originalArray[i++] = leftArr[l++];
    }
    while (r < rightSize) {
        originalArray[i++] = rightArr[r++];
    }

}

// func to split the array all the way down to single element arrays
// pass each left and right array going back up the call stack to the merge func
// since we are modifying the original array in place
const mergeSort = (array) => {
    if (array.length <= 1){
        return;
    }
    const mid = Math.floor(array.length / 2);
    const leftArr = array.slice(0, mid);
    const rightArr = array.slice(mid);

    mergeSort(leftArr);
    mergeSort(rightArr);
    merge(leftArr, rightArr, array);
}

let arr = [5, 9, 4, 2, 1, 3, 0, 8, 6, 7];
mergeSort(arr);

for (let num of arr) {
    console.log(num);
}

