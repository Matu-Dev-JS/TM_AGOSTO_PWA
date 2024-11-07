import express from "express";
import { 
    forgotPasswordController, 
    loginController, 
    registerUserController, 
    resetTokenController, 
    verifyMailValidationTokenController 
} from "../controllers/auth.controller.js";
import { verifyApikeyMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = express.Router()

authRouter.post('/register', registerUserController)
authRouter.get('/verify/:verification_token', verifyMailValidationTokenController)
authRouter.post('/login', loginController)
authRouter.post('/forgot-password', forgotPasswordController)
authRouter.put('/reset-password/:reset_token', resetTokenController)

/* 
resetTokenController

Obtener del body la password
Decodificar/verify el reset_token
Buscar al usuario con el email recibido en el reset_token
Encriptar la password
Guardar la nueva contraseña en el campo password del usuario
*/
export default authRouter