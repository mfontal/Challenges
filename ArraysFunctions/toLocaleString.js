/* toLocaleString Function
    El método toLocaleString() devuelve una cadena 
    de texto representando los elementos del array. 
    Los elementos son convertidos a texto usando su 
    método toLocaleString y dichos Strings son 
    separados por un carácter específico para la 
    localidad (como una coma para la separación 
    de decimales “,”).
*/

const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

