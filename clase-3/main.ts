let nombre : string | null = 'pepe'
nombre = null

/* Soy una variable de JS ni mas ni menos */
let datoRandom : any = 'hola'

console.log('hola' + nombre)

/* sumar(a, b) devuelve a + b */

function sumar (a : number, b : number) : number {
    return a + b
}

sumar(1, 2)

/* Cuando hay un ? al final de un parametro significa que ese valor es OPCIONAL */
/* const saludar = (edad : number = 10, nombre? : string) => {
    console.log('mi edad es ' + edad)
    if(nombre){
        return 'hola ' + nombre
    }
    else{
        return 'Hola, no se tu nombre'
    }
}

console.log(saludar()) */

/* prompt('dime algo', 'hola') */

interface Persona {
    nombre: string, 
    apellido: string, 
    edad: number
}

const persona : Persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
}

const persona_2 : Persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
}

const saludarAPersona = (persona : Persona) => {
    alert('hola ' + persona.nombre)
}

saludarAPersona(persona_2)