/* Every Function
    Esta función cumple la tarea de validar 
    si todos los elementos dentro de un array
    cumplen una función  que se haya asignado 
    arrojando "true" si la cumple o "false" 
    si no lo hace.
*/
const myArray = [1, 2, 2];
const myArray2 = [1, 2, 5];

// Valida se existe si todos los números son menores que cuatro en 
// el array "myArray"
const areEvery = myArray.every(x => x<4);
console.log(areEvery);


// Valida se existe si todos los números son menores que cuatro
// el array "myArray2"
const areEvery2 = myArray2.every(x => x<4);
console.log(areEvery2);