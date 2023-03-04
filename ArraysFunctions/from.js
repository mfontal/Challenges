/* From function 
El método Array.from() crea una nueva instancia 
de Array a partir de un objeto iterable.
 */

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]