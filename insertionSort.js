// write a insertion sort algorithm based on the video shown in class.
// should take in an array, and sort it into ascending order using 
// insertion sorting logic



// Not done yet 




let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7];

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45];


 function insertionSort (arr) {
for (let i =0; i < arr.length; i++) {
    for (j = 1; j > 0 ; j++) {
        if (arr[j] < arr[j-1]) {
        arr[j] = arr[j-1];
} else {
    break;
}
}
}
console.log(arr)
}


insertionSort(arr1);

insertionSort(arr2);