/* find Function
    Esta función cumple la tarea encontrar
    el primer elemento que cumpla con la
    función que hayamos solicitado.
*/
const myArray = [1, 2, 3, 4, 5, 6];

const encontrar = myArray.find(function (numero) {
  return numero > 2;
});
console.log(encontrar);

/*
Solicitamos en la función que el numero fuese mayor a 2
output: 3 
  */

