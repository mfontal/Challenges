/* splice Function
    Esta función cumple la tarea
    de eliminar los elementos dentro
    de un array según los parámetros asignados
    siendo el primero, el indice desde el
    que se va a iniciar el proceso de eliminación 
    y el segundo parámetro la cantidad de valores 
    del array a eliminar.
*/
const myArray = [1, 2, 3, 4, 5, 6];

myArray.splice(3, 2);
console.log(myArray);

/*
Elimina del el index 3 "es el valor 4 en el array" 2 valores
dando como resultado 
[1, 2, 3, 6] 
  */

