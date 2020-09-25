// Write a function that takes in an array, and sorts the first
// half of the array in ascending order, and the second half 
// of the array in descending order

// you may use methods for this. 

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7]

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45]


const halfSorted = function(arr) {
    if (arr.length < 2) {
        return arr
      }
    
      const middle = Math.floor(arr.length / 2);
      const leftSide = arr.slice(0, middle);
      const rightSide = arr.slice(middle, arr.length);
      return merge(mergeSort(leftSide), mergert(rightSide))
    
    };
    
    const merge = (left, right) => {
      const result = [];
    
      while (left.length && right.length) {
        if (left[0] <= right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift);
        }
      }
    
      while(left.length) result.push(left.shift());
    
      while(right.length) result.push(right.shift());
    
      return result;
};
  
    



console.log(halfSorted(arr1));

//results --> [2, 4, 8, 34, 54, 78, 567, 99, 77, 45, 23, 7, 6]

console.log(halfSorted(arr2));

//results --> [3, 4, 56, 58, 65, 98, 90, 68, 45, 34, 12]