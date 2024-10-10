import express from "express";
import statusRouter from "./router/status.router.js";
import dotenv from 'dotenv'

//Va a leer el archivo .env y guardara los valores en process.env
dotenv.config()



const app = express();
const PORT = process.env.PORT || 3000

app.use('/api/status', statusRouter)

app.listen(PORT, () => {
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})