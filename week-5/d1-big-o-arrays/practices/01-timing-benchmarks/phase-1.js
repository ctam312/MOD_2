// Adds up positive integers from 1-n
function addNums(n) {
  counter = 0;
  for(let i = 0; i <=n; i++){
    counter += i;
  }
  return counter;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let counter2 = 0;
  for(let i = 1; i <= n; i++){
    counter2 += addNums(i);
  }
  return counter2
}


module.exports = [addNums, addManyNums];
