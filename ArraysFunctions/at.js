/* at Function
    Esta función se usa para traer un objeto especifico 
    de un array según su indice.
*/
const carrito = [
  { nombre: 'Monitor 20 pulgadas', precio: 600 },
  { nombre: 'Nintendo Switch', precio: 350 },
  { nombre: 'TV 70 pulgadas', precio: 700 },
  { nombre: 'Portátil HP', precio: 600 },
  { nombre: 'Parlante Sony', precio: 200 },
];

let ubicación = carrito.at(0);

console.log(ubicación);

/*
OIndice solicitado "0" objeto traído
{ nombre: 'Monitor 20 pulgadas', precio: 500 }
 */

