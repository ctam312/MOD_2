
function bubbleSort(arr) {

  // Iterate through the array
  let swap = true
  while(swap){
    swap = false;
    for (let i = 0; i <= arr.length - 1; i++){
      if (arr[i] > arr[i+1]){
        let tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        // [arr[i],arr[i+1]] = [arr[i+1], arr[i]] (u can just do a swap like this with destructuring)
        swap = true;
        console.log(arr.join(","));
      }
    }
  }
  return arr
}

console.log(bubbleSort[1,3,4,2]);
module.exports = bubbleSort;
