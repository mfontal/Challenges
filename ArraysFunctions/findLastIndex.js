/* findLastIndex Function
    Esta función cumple la tarea de de encontrar
    y mostrar el INDEX del ultimo elemento de
    un Array que cumpla con una función solicitada
*/
const numeros = [35, 45, 0, 139, 76, 10];

let ultimoIndex = numeros.findLastIndex(function (numero) {
  return numero > 50;
});

console.log(ultimoIndex);

/*
Output: 4

*/

