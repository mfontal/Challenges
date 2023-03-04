/* copyWithin Function
    Esta función cumple la tarea de desplazar los 
    datos en un Array o TypedArray. La secuencia 
    de datos es leída y escrita en una sola operación;
    a escritura será correcta incluso en el caso
    de que la zona de lectura y el destino de
    escritura se solapen
*/
const frutas = ['pera', 'manzana', 'uva', 'banano', 'papa', 'sandia'];

console.log(frutas);
frutas.copyWithin(0, 2, 5);

console.log(frutas);

/*
Output: [ 'uva', 'banano', 'papa', 'banano', 'papa', 'sandia' ]
  */

