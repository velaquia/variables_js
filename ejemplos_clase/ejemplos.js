'use strict';

//Sobre comentarios:

// Este es un comentario de una sola línea (se usan dos / al inicio)

/* Este es un comentario de más de una línea de código,
se utiliza para apertura y cierre estos simbolos
*/

//Uso de variables:

//Asignacion de variables:

var miNumero = 10;

//Variable de tipo Number:
var miPrimeraCaja = 10;

//Variable de tipo String:
var miSegundaCaja = "Este es un texto";

//Variable de tipo Boolean:
var miTercerCaja = true;

// Operadores aritméticos: +,-,*,/
var numero1 = 10;
var numero2 = 5;
 
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);

// Uso de concatenadores!

// Declaración de variables
var texto1 = "Mi nombre es";
var nombre = "carlos";
var nacimiento = 1990;
var texto2 = "nací en el año:";

//Impresión por consola de variables:
console.log(texto1 + nombre + texto2 + nacimiento);

//Impresión por consola de variables y de strings de espacios:
console.log(texto1 + " " + nombre + ", " + texto2 + " " + nacimiento);

// Acumuladores:

var acumulador = 0;

acumulador = acumulador + 1;
console.log("acumulador vale: " + acumulador);

acumulador = acumulador + 1;
console.log("acumulador vale: " + acumulador);

acumulador = acumulador + 1;
console.log("acumulador vale: " + acumulador);

acumulador += 1;
console.log("acumulador vale: " + acumulador);

acumulador += 1;
console.log("acumulador vale: " + acumulador);
