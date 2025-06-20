const array = [7, 2, 1, 4, 8, 6, 3, 5];
//             L           R

//            [7,2,1,4,8,6,3,5] -> pivot = 5
/*
base case -> array length is 1 -> return array
iterate through the array twice and find elements that are smaller than pivot => left
iterate through the array twice and find elements that are greater than pivot => right
return left + pivot + right

*/

function quickSort(arr, l, r) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i];
    if (num <= pivot) left.push(num);
    else right.push(num);
  }
  return quickSort(left).concat([pivot]).concat(quickSort(right))
}

console.log(quickSort(array));
