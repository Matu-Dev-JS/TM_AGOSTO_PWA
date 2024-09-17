
import { mongoose } from "./config/mongoDB.config.js";
import { buscarUsuarioPorId } from "./managers/user.manager.js";



//En vez de hacer esto
/* console.log(await buscarUsuarioPorId('66e97b026aa53285a15f607d')) */

//Es mejor hacer esto:
//Then se ejecuta cuando la promesa se cumpla (osea la funcion retorne)
//Catch se ejecuta cuando la promesa no se cumpla (osea la funcion hizo un throw)
buscarUsuarioPorId()
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