import ERRORES from "../constants/errors.js"
import Usuario from "../models/user.model.js"

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

const buscarUsuarioPorId = async (id) => {
    try{
        if(!id){
            throw {error: 'No recibi un id', code: 3}
        }
        const result = await Usuario.findById(id)
        return result
    }
    catch(error){
        throw error
    }
}


export { crearUsuario, buscarUsuarioPorId }