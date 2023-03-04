/* value Function
    El método values() devuelve un nuevo objeto 
    Array Iterator que contiene los valores 
    para cada índice del array.
*/

var a = ['w', 'y', 'k', 'o', 'p'];
var iterator = a.values();

console.log(iterator.next().value); // w
console.log(iterator.next().value); // y
console.log(iterator.next().value); // k
console.log(iterator.next().value); // o
console.log(iterator.next().value); // p

