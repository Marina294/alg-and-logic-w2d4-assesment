// write a insertion sort algorithm based on the video shown in class.
// should take in an array, and sort it into ascending order using 
// insertion sorting logic

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7];

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45];



const insertionSort = function(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        // if (x[i -1] > current) {
        // let j = i;
        // for (let j = 1; j < arr.length; j++) {
            while ( j >= 0 && arr[j] > current) {
             arr[j + 1] = arr[j];
             j = j - 1;

            // }
         }

            arr[j + 1] = current;
            // i = i + 1;
        // }
    }

 return arr;
};

console.log(insertionSort(arr1));

console.log(insertionSort(arr2));




// for (i = 0; i < arr.length; i++) {
//     let current = arr[pointer];
//     for (j = 0; j < arr.length; j++) {
//         let position = pointer;
//         let i = 0;
//         while (position > 0 && arr[position - 1] > current) {
//           arr[position] = arr[position - 1];
//           position = position - 1;
//         }
//     arr[position] = current;
// }
// return pointer
// }


// let i = pointer;
// for (i = 0; i < arr.length; i++) {
//     let current = arr[pointer];
//     let position = pointer;
//     while (position > 0 && arr[position - 1] > current) {
//         arr[position] = arr[position - 1];
//         let position = position - 1;
//     }
//     arr[position] = current;
// }
// return pointer