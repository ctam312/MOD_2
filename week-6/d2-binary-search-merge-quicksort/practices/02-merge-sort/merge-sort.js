// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midI = Math.floor(arr.length / 2);
  const left = arr.slice(0, midI);
  const right = arr.slice(midI);
  const leftSort = mergeSort(left);
  const rightSort = mergeSort(right);
  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  // Divide the array in half
  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return
return merge(leftSort, rightSort)
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
const mt = [];
  // Point to the first value of each array
let indexA = 0;
let indexB = 0;
  // While there are still values in each array...
  while (arrA.length > indexA && arrB.length > indexB){
    if (arrA[indexA] <= arrB[indexB]){
      mt.push(arrA[indexA]);
      indexA++
    } else {
      mt.push(arrB[indexB]);
      indexB++
    }
  }
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array
  return [...mt, ...arrA.slice(indexA), ...arrB.slice(indexB)]
}
module.exports = [merge, mergeSort];
