/* findIndex Function
    Esta función cumple la tarea de de encontrar
    y mostrar el INDEX de el primero elemento de
    un Array que cumpla con una función solicitada
*/
const frutas = ['pera', 'manzana', 'uva', 'banano', 'papa', 'sandia'];

let encontrarIndex = frutas.findIndex(function (fruta) {
  return fruta === 'banano';
});

console.log(encontrarIndex);

/*
Output: 3
*/

