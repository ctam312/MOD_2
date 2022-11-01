function quicksort(arr) {
  if(arr.length <= 1) return arr;
  // Check if the input is length 1 or less
    // If so, it's already sorted: return
const pivot = arr[0]
  // Pick the first value as the pivot
let left = [];
let right = [];
  for(let i = 1; i < arr.length ; i++){
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  let leftSort = quicksort(left);
  let rightSort = quicksort(right);
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order
  return([...leftSort, pivot,...rightSort])
}


module.exports = [quicksort];
