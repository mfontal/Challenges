/* some Function
    Esta función se usa para arrays de objetos
    y cumple la tarea de validar si dicho array 
    tiene un atributo en especifico que se haya 
    solicitado arrojando true si lo tiene o un
    false si no.
*/
const carrito = [
  { nombre: 'Monitor 20 pulgadas', precio: 500 },
  { nombre: 'Nintendo Switch', precio: 350 },
  { nombre: 'TV 70 pulgadas', precio: 700 },
  { nombre: 'Portátil HP', precio: 600 },
  { nombre: 'Parlante Sony', precio: 200 },
];

const incluye = carrito.some(function (producto) {
  return producto.nombre === 'Nintendo Switch'
});
console.log(incluye);

/*
Como el array cuenta con el valor del atributo 
solicitado "Nintendo Switch" este arrojara true
 */
