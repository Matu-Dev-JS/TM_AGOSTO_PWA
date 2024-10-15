import ENVIROMENT from "../config/enviroment.config.js"
import User from "../models/user.model.js"
import ResponseBuilder from "../utils/builders/responseBuilder.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendEmail } from "../utils/mail.util.js"



export const registerUserController = async (req, res) => {
    try{
        const {name, email, password} = req.body
        const existentUser = await User.findOne({email: email})
        console.log({existentUser})
        if(existentUser){
            const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(400)
            .setMessage('Bad request')
            .setPayload(
                {
                    detail: 'El email ya esta en uso!'
                }
            )
            .build()
            return res.status(400).json(response)
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const verificationToken = jwt.sign({email: email}, ENVIROMENT.JWT_SECRET, {
            expiresIn: '1d'
        })
        const url_verification = `http://localhost:${ENVIROMENT.PORT}/auth/verify/${verificationToken}`
        await sendEmail({
            to: email,
            subject: 'Valida tu correo electronico',
            html: `
            <h1>Verificacion de correo electronico</h1>
            <p>Da click en el boton de abajo para verificar</p>
            <a 
                style='background-color: 'black'; color: 'white'; padding: 5px; border-radius: 5px;'
                href="${url_verification}"
            >Click aqui</a>
            `
        })

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken: verificationToken,
            emailVerified: false
        })

        //Metodo save nos permite guardar el objeto en la DB
        await newUser.save()

        const response = new ResponseBuilder()
        .setOk(true)
        .setStatus(200)
        .setMessage('Created')
        .setPayload({})
        .build()
        return res.status(201).json(response)
    }
    catch(error){
        console.error('Error al registrar usuario:', error)
        const response = new ResponseBuilder()
        .setOk(false)
        .setStatus(500)
        .setMessage('Internal server error')
        .setPayload(
            {
                detail: error.message
            }
        )
        .build()
        return res.status(500).json(response)
    }

}

