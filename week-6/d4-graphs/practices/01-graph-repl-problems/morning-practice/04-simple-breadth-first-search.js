const adjList = {
	1: [2, 5],
	2: [1, 3, 5],
	3: [2, 4],
	4: [3, 5],
	5: [1, 2, 4],
	6: [],
};

function breadthFirstSearch(start, end) {
	let queue = [start];
	let visited = new Set(queue);
	while (queue.length) {
		let current = queue.shift()
		for (let neighbor of adjList[current]) {
			if (!visited.has(neighbor)) {
				visited.add(neighbor);
				queue.push(neighbor);
			}
		}
	}
  return(visited.has(end))
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
