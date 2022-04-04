// 1.
// function sum(array) {
//   let sum = 0;
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//   } catch (err) {
//     if (err instanceof TypeError) {
//       console.log(err.message);
//     } else {
//       throw err('you done messed up');
//     }
//   }
//   return sum;
// }

// let res = sum(null);
// console.log(res);

// function sum(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// try {
//   let res = sum(null);
//   console.log(res);
// } catch (e) {
//   if (e instanceof TypeError) {
//     console.log(e.message);
//   } else {
//     throw e;
//   }
// }

// // 2.
// // tests
// // Your code here
// function sayName(name) {
//   if (!(typeof name === 'string')) {
//     throw new TypeError("Invalid name! Must be a string!");
//   }
//   console.log(name);
// }
// try {
//   sayName("Alex");
//   sayName(1);

// } catch (err) {
//   console.log('Oops. Jeffrey K Messed up again')
//   console.log(err.message)
// }

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet("Hello gorgeous!");
  greet();
} catch (e) {
  console.log("Hello world!");
  console.log(e.message)
}