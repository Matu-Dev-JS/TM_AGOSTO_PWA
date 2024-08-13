"use strict";
let nombre = 'pepe';
nombre = null;
/* Soy una variable de JS ni mas ni menos */
let datoRandom = 'hola';
console.log('hola' + nombre);
/* sumar(a, b) devuelve a + b */
function sumar(a, b) {
    return a + b;
}
sumar(1, 2);
const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
};
const persona_2 = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
};
const saludarAPersona = (persona) => {
    alert('hola ' + persona.nombre);
};
saludarAPersona(persona_2);
