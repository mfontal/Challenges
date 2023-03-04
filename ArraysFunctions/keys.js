/* keys Function
    El método keys() devuelve un nuevo objeto Array 
    Iterator que contiene las claves de índice con
     las que acceder a cada elemento en el array.
*/
var arr = ['a', 'b', 'c'];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }