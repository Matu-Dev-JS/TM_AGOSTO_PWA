import ENVIROMENT from "../config/enviroment.config.js"
import ResponseBuilder from "../utils/builders/responseBuilder.js"
import jwt from 'jsonwebtoken'

export const verifyTokenMiddeware = (req, res, next) => {
    try{
        const auth_header = req.headers['authorization']
        if(!auth_header){
            const response = new ResponseBuilder()
            .setOk(false)
            .setMessage('Falta token de autorizacion')
            .setStatus(401)
            .setPayload({
                detail: 'Se espera un token de autorizacion'
            })
            .build()

            return res.status(401).json(response)
        }
        //'Bearer asdosadijsadsadosadi' => ['Bearer', 'asdosadijsadsadosadi'] => arr[1]
        const access_token = auth_header.split(' ')[1]
        if(!access_token){
            const response = new ResponseBuilder()
            .setOk(false)
            .setMessage('El token de autorizacion esta malformado')
            .setStatus(401)
            .setPayload({
                detail: 'Se espera un token de autorizacion'
            })
            .build()

            return res.status(401).json(response)
        }
        const decoded = jwt.verify(access_token, ENVIROMENT.JWT_SECRET)
        //Guardamos en la request la informacion del usuario
        req.user = decoded 
        return next() //pasamos al sig controllador
    }
    catch(error){
        const response = new ResponseBuilder()
        .setOk(false)
        .setMessage('Fallo al autentificar')
        .setStatus(401)
        .setPayload(
            {
                detail: error.message
            }
        )
        .build()
        return res.status(401).json(response)
    }
}

export const verifyApikeyMiddleware = (req, res, next) => {
    try{
        const apikey_header = req.headers['x-api-key']
        if(!apikey_header){
            const response = new ResponseBuilder()
            .setOk(false)
            .setMessage('Unauthorized')
            .setStatus(401)
            .setPayload({
                detail: 'Se espera un api-key'
            })
            .build()

            return res.status(401).json(response)
        }
        if(apikey_header !== ENVIROMENT.API_KEY_INTERN){
            const response = new ResponseBuilder()
            .setOk(false)
            .setMessage('Unauthorized')
            .setStatus(401)
            .setPayload({
                detail: 'Se espera un api-key valida'
            })
            .build()

            return res.status(401).json(response)
        }

        next()
    }
    catch(error){
        const response = new ResponseBuilder()
        .setOk(false)
        .setMessage('Internal server error')
        .setStatus(500)
        .setPayload({
            detail: 'No se pudo validar la api-key'
        })
        .build()

        return res.status(500).json(response)
    }
}