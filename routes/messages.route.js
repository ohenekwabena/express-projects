import express from "express";

const messagesRouter = express.Router();

import { getMessages } from "../controllers/messages.controller.js";

messagesRouter.get("/", getMessages);



export default messagesRouter;