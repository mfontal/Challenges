/* 
Las funciones de flecha a diferencia del las funciones regulares
omiten la palabra "function" que pasa a ser la flecha y el argumento
pasa a estar de primero.
*/

// Función regular
const n1 = 5;
const f1 = function (n1) {
    if (n1 % 2 === 0) {
        console.log("Es par");
    } else {
        console.log("Es impar");
    }
}

f1(n1);

// Función flecha
const n2 = 6;
const f2 = (n2) => {
    if (n2 % 2 === 0) {
        console.log("Es par");
    } else {
        console.log("Es impar");
    }
}

f1(n2);
