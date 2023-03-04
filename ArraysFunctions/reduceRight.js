/* Reduce Function
    Aplica una función simultáneamente contra un acumulador 
    y cada elemento de un array (de derecha a izquierda) 
    para reducirlo a un único valor.
*/
[0,1,2,3,4].reduceRight(function(valorPrevio, valorActual, indice, array){
  return valorPrevio + valorActual;
});

// First call
valorPrevio = 4, valorActual = 3, indice = 3

// Second call
valorPrevio = 7, valorActual = 2, indice = 2

// Third call
valorPrevio = 9, valorActual = 1, indice = 1

// Fourth call
valorPrevio = 10, valorActual = 0, indice = 0

// el array sobre el que se llama a reduceRight siempre es el objeto [0,1,2,3,4]

console.log(valorPrevio);
// Valor Devuelto: 10

