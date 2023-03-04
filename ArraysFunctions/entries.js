/* entries Function
    Esta función cumple la tarea de iterar un 
    Array de uno en  uno sacando por output 
    un elemento de dicho Array a la vez
*/
const frutas = ['pera', 'manzana', 'uva', 'banano', 'papa', 'sandia'];

let iterator = frutas.entries();

console.log(iterator.next().value);

/*
Output: [ 0, 'pera' ]
  */

