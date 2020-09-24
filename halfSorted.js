// Write a function that takes in an array, and sorts the first
// half of the array in ascending order, and the second half 
// of the array in descending order

// you may use methods for this. 

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6]

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45];

function halfSorted(arr) {
    arrhalf = arr.splice(0, Math.floor((arr.length ) / 2));
    arrsenondhalf = arr.splice(Math.floor((arr.length - 1) / 2), Math.floor(arr.length));

    ascendingfirst = arrhalf.sort(function (a, b) {
        return a - b
    });
    desandingsecond = arrsenondhalf.sort(function (a, b) {
        return b - a
    });

    arr = ascendingfirst.concat(desandingsecond);

    console.log(arr)

}
halfSorted(arr2)