
import { mongoose } from "./config/mongoDB.config.js";
import { buscarUsuarioPorId } from "./managers/user.manager.js";



//En vez de hacer esto
/* console.log(await buscarUsuarioPorId('66e97b026aa53285a15f607d')) */

//Es mejor hacer esto:
//Then se ejecuta cuando la promesa se cumpla (osea la funcion retorne)
//Catch se ejecuta cuando la promesa no se cumpla (osea la funcion hizo un throw)
//Finally es un metodo de promesa que se ejecuta al finalizar la promesa (independientemente de si la accion funciono o fallo)
//Solo conviene .then .catch si no se deben hacer multiples operaciones asincronicas, sino podemos caer en el callback hell
//Callback Hell Ejemplo: https://blog.avenuecode.com/hubfs/Screen%20Shot%202019-01-09%20at%202.28.27%20PM.png
/* 
buscarUsuarioPorId('66e97b026aa53285a15f607d')
.then(
    (retorno) => {
        console.log(retorno)
    }
)
.catch(
    (error)=> {
        console.log('Ocurrio una excepcion', error)
    }
)
.finally(() => {
    console.log('proceso terminado')
}) */