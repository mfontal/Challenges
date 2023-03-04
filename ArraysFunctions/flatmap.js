/* flatmap Function
  Aplana todos los arrays que hayan dentro de 
  un array sacando uno nuevo.
*/
const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(function (num) {
return num
});

console.log(flattened);

/*
Output: [1, 2, 3, 4, 5, 6]
*/

