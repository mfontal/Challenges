/* Reduce Function
    Esta función permite sumar valores de un array
    iterando sobre el con un función callback y 
    acumulándolos allí para después  de que se asigne
    "por recomendación" un valor inicial al final de la 
    función de una oportunidad de sacarlo.
*/
const números = [20, 30, 60, 70]

const resultado = números.reduce(function (acc, num) {
  return acc + num; 
}, 0);

console.log(resultado);
/*
La salida es 180(la suma de sus valores)
  */

