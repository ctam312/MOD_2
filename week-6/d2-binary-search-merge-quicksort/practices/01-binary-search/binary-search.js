function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i;
	}
	return -1;
	// Can you solve this in one line?
};

function binarySearch(arr, target) {
	// Set integers pointing to the high and low range of possible indices
	let high = arr.length - 1;
	let low = 0;
	while (high >= low) {
		let midpoint = Math.floor((high + low) / 2);
		if (target === midpoint) {
			return midpoint;
		} else if (target > midpoint) {
			low = midpoint + 1;
		} else if (target < midpoint) {
			high = midpoint - 1;
		}
	}
	return -1;
}
// While high and low indices do not overlap...
// Find the midpoint between high and low indices
// Compare the target value to the midpoint value

// If the target equals the midpoint...
// Return the midpoint index
// If the target is higher than the midpoint...

// Move the low pointer to midpoint + 1

// If the target is less than the midpoint...
// Move the high pointer to midpoint - 1

// Return -1 if the loop exits with overlapping pointers

module.exports = [linearSearch, binarySearch];
