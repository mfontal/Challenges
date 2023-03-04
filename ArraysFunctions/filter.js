/* filter Function
    Esta función permite como su nombre lo dice
    filtrar y traer los elementos de un array que 
    cumplan con una condición establecida.
*/
const carrito = [
  { nombre: 'Monitor 20 pulgadas', precio: 500 },
  { nombre: 'Nintendo Switch', precio: 350 },
  { nombre: 'TV 70 pulgadas', precio: 700 },
  { nombre: 'Portátil HP', precio: 600 },
  { nombre: 'Parlante Sony', precio: 200 },
];

const filtro = carrito.filter(producto => 
  producto.precio >= 600
  );
console.log(filtro);

/*
Para este caso establecimos que nos trajera 
todos los elementos cuyo precio fuera mayor 
o igual a 600
  */