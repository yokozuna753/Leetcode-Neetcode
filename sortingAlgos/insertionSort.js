// pick a pivot in an array
// compare elements to the left of the pivot

// [3,3,7,8,9] temp = 1
//  j 
//      i

// O(n^2) average & worst case time complexity
// O(1) space complexity

function insertionSort(array) {
    
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j+1] = temp;
        
    }
}

let arr = [5,9,4,2,1,3,0,8,6,7];

insertionSort(arr);

for(let num of arr) {
    console.log(num);
}