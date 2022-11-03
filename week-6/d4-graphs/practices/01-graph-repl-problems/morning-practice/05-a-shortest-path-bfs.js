const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function aShortestPath(start, end) {
  let queue = [[start]];
  let visited = new Set(queue);
  while(queue.length){
    let currentPath = queue.shift();
    let current = currentPath[currentPath.length - 1];
    if(current === end) return currentPath;
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
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
