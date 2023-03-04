/* map Function
    El método keys() devuelve un nuevo objeto Array 
    Iterator que contiene las claves de índice con
    las que acceder a cada elemento en el array.
*/

const numbers = [1, 2, 3, 4, 5, 6];

const doubles = numbers.map(function (numero) {
    return numero * 2;
})

console.log(doubles);
// Expected output: [ 2, 4, 6, 8, 10, 12 ]