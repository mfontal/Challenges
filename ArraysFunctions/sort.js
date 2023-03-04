/* sort Function
    El método sort() ordena los elementos de un arreglo 
    (array) localmente y devuelve el arreglo ordenado. 
    La ordenación no es necesariamente estable. El modo
    de ordenación por defecto responde a la posición del
     valor del string de acuerdo a su valor Unicode.
*/
var frutas = ['guindas', 'manzanas', 'bananas'];
console.log(frutas.sort()); // ['bananas', 'guindas', 'manzanas']

var puntos = [1, 10, 2, 21];
console.log(puntos.sort());  // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

var cosas = ['word', 'Word', '1 Word', '2 Words'];
console.log(cosas.sort()); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.

