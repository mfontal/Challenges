/* fill Function
    Esta función cumple la tarea de cambiar todos los elementos 
    en un arreglo por un valor estático, desde el índice start 
    (por defecto 0) hasta el índice end (por defecto array.length). 
    Devuelve el arreglo modificado.
*/
const frutas = ['pera', 'manzana', 'uva', 'banano', 'papa', 'sandia'];

console.log(frutas);
frutas.fill('Hamburguesa', 2, 5);

console.log(frutas);

/*
Output: [
  'pera',
  'manzana',
  'Hamburguesa',
  'Hamburguesa',
  'Hamburguesa',
  'sandia'
]
  */

