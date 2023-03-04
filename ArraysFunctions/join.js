/* Join function 
El método join() une todos los elementos de una matriz 
(o un objeto similar a una matriz) en una cadena y 
devuelve esta cadena.
 */

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"