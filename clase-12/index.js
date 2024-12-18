
import { mongoose } from "./config/mongoDB.config.js";
import ERRORES from "./constants/errors.js";


/* 
MONGO DB NO TIENE SCHEMAS
Mongoose trae schemas
 */



const usuarioSchema = new mongoose.Schema(
    {
        nombre: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        rol: {type: String, required: true},
        password: {type: String, required: true},
        telefono: {type: String, required: true},
        direccion: {type: String, required: true},
        fecha_registro: {type: Date, default: Date.now}
    }
)

const Usuario = mongoose.model('Usuario', usuarioSchema)


/**
 * Crea un nuevo usuario en la base de datos.
 *
 * @param {string} nombre - Nombre del usuario.
 * @param {string} email - Correo electrónico del usuario.
 * @param {string} rol - Rol del usuario.
 * @param {string} password - Contraseña del usuario.
 * @param {string} telefono - Teléfono del usuario.
 * @param {string} direccion - Dirección del usuario.
 * @return {object} El usuario creado.
 */
const crearUsuario = async (nombre, email, rol, password, telefono, direccion) =>{
    try{
        const usuario = new Usuario({
            nombre, 
            email, 
            rol, 
            password, 
            telefono, 
            direccion
        })
        const resultado = await usuario.save()
        return resultado
    }
    catch(error){
        const customError = ERRORES[error.code]
        console.log(customError)
        console.log(error)
    }
}

crearUsuario('juan', 'juan@gmail.com', 'user', 'pepesito123', '13223', 'blabla')