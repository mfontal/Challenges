/* findLast Function
    Esta función cumple la tarea de de encontrar
    y mostrar el ELEMENTO de un Array que cumpla
    con una función solicitada.
*/
const myArray = [1, 2, 3, 4, 5, 6];


const myArray3 = myArray.findLast(function (numero) {
  return numero > 3;
});
console.log(myArray3);

/*
Dado que la función solicita los números mayores a 3  
Output: 6
  */