// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  let copy = [...arr];
  let poop = [];

  while(copy.length){
    console.log(poop.join(','));
    let last = arr.pop;
    arr.push(null);
    let i = arr.length - 1
    while(i > 0){
      if (poop[i-1] <= last){
        break
      } else {
        poop[i] = poop[i-1];
        i--
      }
    }
    sorted[i] = last;
  }
  return poop;
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  // Set a pointer dividing the array into sorted and unsorted halve
  let divider = 1;
  // Repeat while the unsorted half is not empty:
  while(divider < arr.length){
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(arr.join(','));
    // - Grab the first value from the unsorted half
    const val = arr[divider];
    let i = divider;
    // - For each value starting from the divider,
    while (i > 0){
      // - Check if the value to the left is smaller than the unsorted value
      
      if(arr[i - 1] > val) {
        // - If not shift the value to the right by 1 and continue
        arr[i] = arr[i-1];
        i--
      }else{
      // - If so, you've reached the insertion point so exit the loop
      break;
    }
  }
  // - Insert the unsorted value at the break point
  arr[i] = val;
    // - Increment the dividing pointer and repeat
  divider++
  }
  // Return the mutated array
  return arr;
  // Your code here
}

module.exports = [insertionSort, insertionSortInPlace];
