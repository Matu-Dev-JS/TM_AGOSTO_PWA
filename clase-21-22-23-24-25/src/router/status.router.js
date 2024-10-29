import express from "express";
import ResponseBuilder from "../utils/builders/responseBuilder.js";
import { getPingController } from "../controllers/status.controller.js";
import { verifyTokenMiddeware } from "../middlewares/auth.middleware.js";

const statusRouter = express.Router()



statusRouter.get('/ping', getPingController)
statusRouter.get('/protected-route/ping', verifyTokenMiddeware, getPingController)


export default statusRouter
