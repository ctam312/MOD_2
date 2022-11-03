const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function degreesOfSeparation(start, end) {
  let queue = [[start]];
  let visited = new Set(queue);
  while(queue.length){
    let currentPath = queue.shift();
    let current = currentPath[currentPath.length - 1];
    if(current === end) return currentPath.length - 1;
    for(let neighbor of adjList[current]){
      if(!visited.has(neighbor)){
        visited.add(neighbor);
        queue.push([...currentPath, neighbor]);
      }
    }
  }
  return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
