import ENVIROMENT from "./config/enviroment.config.js";
import express from "express";
import statusRouter from "./router/status.router.js";
import mongoose from './db/config.js'
import authRouter from "./router/auth.router.js";
import transporter from "./config/transporter.config.js";
import cors from 'cors'
import { verifyApikeyMiddleware } from "./middlewares/auth.middleware.js";


const app = express();
const PORT = ENVIROMENT.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(verifyApikeyMiddleware)


app.use('/api/status', statusRouter)
app.use('/api/auth', authRouter)




app.listen(PORT, () => {
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})