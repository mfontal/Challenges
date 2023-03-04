/* lastIndexOf Function
    El método lastIndexOf() devuelve el último índice 
    en el que un cierto elemento puede encontrarse en 
    el arreglo, ó -1 si el elemento no se encontrara. 
    El arreglo es recorrido en sentido contrario, 
    empezando por el índice fromIndex.
*/

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

const ultimoIndice = animals.lastIndexOf("Dodo");

console.log(ultimoIndice);
// Expected output: 2