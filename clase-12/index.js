
import { mongoose } from "./config/mongoDB.config.js";


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

new Usuario('pepe', 'pepe@gmail.com', 'user', 'pepe123', '1231434', 'av siempre viva').save()