const {calcularPrecioConIva} = require('./utils/calculosVarios.js')
const { formatearPrecio } = require('./utils/formatos.js')
const {crearTxt, leerTxt, crearJSON, leerJSON} = require('./utils/sistemaArchivos.js')

/* crearTxt('archivo2', 'woaw esto es node js 😎🚀') */
/* leerTxt() */

/* const persona = {
    nombre: 'pepe',
    edad: 90
}

crearJSON('persona-1', persona) */
let persona_1 = leerJSON('persona-1')
console.log(persona_1.nombre)
/* 
Modulos:

-utils/validaciones.js
    -validarEmail
    -validarNumero
    -validarNombre

Probar las funciones en index.js

ejemplo:

let email_recibido = 'pepe@pepe'
console.log(validarEmail(email_recibido)) deberia devolver false
*/

/* const precio_vaso = 20

const objeto_iva = calcularPrecioConIva(precio_vaso)
console.log(objeto_iva)
console.log('El iva del vaso es: ' + formatearPrecio(objeto_iva.iva) ) */
