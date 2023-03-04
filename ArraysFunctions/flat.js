/* flat Function
  El método flat() crea una nueva matriz con todos 
  los elementos de sub-array concatenados 
  recursivamente hasta la profundidad especificada.
*/
const frutas = ['pera', 'manzana', ['uva', 'banano', ['papa', 'sandia']]];

const fusion = frutas.flat();

console.log(fusion);

/*
Output: [ 'pera', 'manzana', 'uva', 'banano', [ 'papa', 'sandia' ] ]
*/

